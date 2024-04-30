import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Team } from '../models/team';
import { Player } from '../players/models/player';
import { TeamsService } from '../services/teams.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../../core';
import { finalize } from 'rxjs';
import { Papa } from 'ngx-papaparse';

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
    private papa: Papa,
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

  uploadCsv(): void {
    if (this.file) {
      this.papa.parse(this.file, {
        header: true,
        skipEmptyLines: true,
        complete: (result) => {
          this.players = result.data as Player[];
          this.cdr.markForCheck(); // Ensure the new players are reflected in the view
          this.file = null; // Reset the file after parsing
        }
      });
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
        this.modalRef?.close();
        this.resetForm();
        this.loadTeams();
      }))
      .subscribe({
        next: (team) => {
          this.teams.push(team);
          this.open(content);
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
