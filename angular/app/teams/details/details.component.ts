//details component.ts
import { Component } from '@angular/core';
import { TeamsService } from '../services/teams.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { tap, switchMap, of, finalize } from 'rxjs';
import { Team } from '../models/team';
import { Player } from '../players/models/player';
import { AuthService } from '../../core';
import { Papa } from 'ngx-papaparse';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  loading = false;
  id = '';
  details: Team | null = null;
  name = '';
  logo = '';
  players: Player[] = [];
  location = '';
  busy = false;
  canUpdate = false;

  private modalRef?: NgbModalRef;

  constructor(
    private route: ActivatedRoute,
    private readonly authSvc: AuthService,
    private readonly svc: TeamsService,
    private modalService: NgbModal,
    private papa: Papa
  ) {}
  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        tap((_) => (this.loading = true)),
        switchMap((params: ParamMap) => {
          this.id = params.get('id') ?? '';
          if (this.id) {
            return this.svc
              .getTeamDetails(this.id)
              .pipe(finalize(() => (this.loading = false)));
          } else {
            return of(null);
          }
        })
      )
      .subscribe((x) => {
        this.details = x;
        this.canUpdate = this.authSvc.user.username === x?.creator;
      });
  }
  open(content: any) {
    this.name = this.details!.name;
    this.logo = this.details!.logo;
    this.players = this.details!.players;
    this.location = this.details!.location;

    this.modalRef = this.modalService.open(content, {
      size: 'lg',
      ariaLabelledBy: 'modal-title',
      backdrop: 'static',
    });
  }
  file: File | null = null; // Store the file object

  onFileChange(event: any): void {
    const files = event.target.files;
    
    if (files && files.length > 0) {
      this.file = files[0]; // Store the file
    }
  }
  parseCsvData(file: File): Player[] {
    const expectedHeaders = ['Name', 'Age', 'Position']; // Define expected headers
    const players: Player[] = [];
    const reader = new FileReader();
  
    reader.onload = (event) => {
      if (event.target) {
        const csvData = event.target.result as string;
        const rows = csvData.split('\n').map(row => row.trim()).filter(row => row); // Trim and remove empty lines
        const headers = rows[0].split(',').map(header => header.trim());
  
        // Check if headers match expected headers
        const isHeaderValid = expectedHeaders.every((header, index) => headers[index] === header);
        if (!isHeaderValid) {
          alert('CSV file does not have the correct headers. Please ensure the headers are: Name, Age, Position.');
          return; // Stop processing if headers are invalid
        }
  
        for (let i = 1; i < rows.length; i++) {
          const rowData = rows[i].split(',').map(data => data.trim());
          const player: Player = {
            name: rowData[0] || 'N/A',
            age: parseInt(rowData[1]) || 100, // Default to 100 if age is missing or invalid
            position: rowData[2] || 'N/A'
          };
          players.push(player);
        }
        alert('File uploaded successfully!');
      }
    };
  
    reader.readAsText(file);
    return players;
  }
  
  uploadCsv(): void {
    if (this.file) {
      {
          this.players = this.parseCsvData(this.file);
          this.file = null; // Reset the file after parsing
          
        }
      ;
    } else {
      alert('No file selected!');
    }
  }


  downloadCsv(): void {
    if (!this.details || !this.details.players.length) {
      alert('No players to download.');
      return;
    }
  
    let csvLines = ["Name,Age,Position"]; // Start with the header
  
    // Populate the CSV lines with player data
    this.details.players.forEach(player => {
      const row = `${player.name},${player.age},${player.position}`;
      csvLines.push(row);
    });
  
    // Combine all CSV lines using "\n" as the newline character
    let csvContent = csvLines.join("\n");
    let csvData = "data:text/csv;charset=utf-8," + encodeURI(csvContent);
  
    // Create a temporary link to trigger the download
    const link = document.createElement("a");
    link.setAttribute("href", csvData);
    link.setAttribute("download", `${this.details.name}-players.csv`);
    document.body.appendChild(link); // Required for Firefox
    link.click();
    document.body.removeChild(link); // Clean up
  }
  
  
  

  removePlayer(t: Player) {
    this.players = this.players.filter((x) => x !== t);
  }
  addPlayer(t: Player) {
    if (t && !this.players.includes(t)) {
      this.players.push(t);
    }
  }
  update(content: any) {
    this.busy = true;
    this.svc
      .updateTeamDetails(
        this.id,
        this.name,
        this.logo,
        this.players,
        this.location
      )
      .pipe(finalize(() => (this.busy = false)))
      .subscribe((x) => {
        this.details = x;
        this.modalRef?.close();
        this.open(content);
      });
  }
}
