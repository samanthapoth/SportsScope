import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Team } from '../models/team';
import { Player } from '../players/models/player';
import { TeamsService } from '../services/teams.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../../core';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css'],
})
export class AllComponent implements OnInit {
  teams: Team[] = [];
  name = '';
  logo = '';
  players: Player[] = [];
  location = '';
  busy = false;
  username = '';

  private modalRef?: NgbModalRef;
  private file: File | null = null;

  constructor(
    private authSvc: AuthService,
    private svc: TeamsService,
    private modalService: NgbModal,
    private cdr: ChangeDetectorRef
  ) {
    this.username = this.authSvc.user.username;
  }

  ngOnInit(): void {
    this.loadTeams();
  }

  open(content: any): void {
    this.modalRef = this.modalService.open(content, {
      size: 'lg',
      ariaLabelledBy: 'modal-title',
      backdrop: 'static',
    });
  }

  loadTeams(): void {
    this.svc.getAllTeams().subscribe((teams) => {
      this.teams = teams;
      this.cdr.markForCheck();
    });
  }

  onFileChange(event: any): void {
    const files = event.target.files;
    if (files && files.length > 0) {
      this.file = files[0];
    }
  }

  parseCsvData(file: File): void {
    const reader = new FileReader();
    reader.onload = (event) => {
      if (event.target) {
        const csvData = event.target.result as string;
        const rows = csvData.split('\n').map(row => row.trim()).filter(row => row);
        const headers = rows[0].split(',').map(header => header.trim());
        
        // Validate headers
        const expectedHeaders = ['Name', 'Age', 'Position'];
        const isHeaderValid = expectedHeaders.every((header, index) => headers[index] === header);
        if (!isHeaderValid) {
          alert('CSV file does not have the correct headers. Please ensure the headers are: Name, Age, Position.');
          return; // Stop processing if headers are invalid
        }
  
        for (let i = 1; i < rows.length; i++) {
          const rowData = rows[i].split(',');
          const player: Player = {
            name: rowData[0] || 'N/A',
            age: parseInt(rowData[1]) || 100,
            position: rowData[2] || 'N/A'
          };
          this.players.push(player);
        }
        this.cdr.markForCheck(); // Update the view with new players
      }
    };
    reader.readAsText(file);
  }

  uploadCsv(): void {
    if (this.file) {
      this.parseCsvData(this.file);
      this.file = null; // Reset the file after parsing
    } else {
      alert('No file selected!');
    }
  }

  create(content: any): void {
    if (this.players.length === 0) {
      alert("Please add at least one player.");
      return;
    }

    this.busy = true;
    this.svc.createTeam(this.name, this.logo, this.players, this.location)
      .pipe(finalize(() => {
        this.busy = false;
        this.resetForm();
        this.loadTeams();
      }))
      .subscribe({
        next: (team) => {
          this.teams.push(team);
          this.modalRef?.close();
        },
        error: (error) => {
          console.error('Error creating team:', error);
          alert('Failed to create team');
        }
      });
  }

  resetForm(): void {
    this.name = '';
    this.logo = '';
    this.players = [];
    this.location = '';
  }

  delete(id: string): void {
    this.svc.deleteTeam(id).subscribe(() => {
      this.loadTeams();
      this.modalRef?.close();
    });
  }

  removePlayer(t: Player): void {
    this.players = this.players.filter((x) => x !== t);
  }

  addPlayer(t: Player): void {
    if (t && !this.players.includes(t)) {
      this.players.push(t);
    }
  }
}
