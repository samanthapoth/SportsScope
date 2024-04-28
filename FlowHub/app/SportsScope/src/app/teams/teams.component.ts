// teams.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Team } from './team.model';
import { AddTeamDialogComponent } from './add-team-dialog/add-team-dialog.component';
import { Player } from './players/player.model';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  teams: Team[] = [];

  constructor(public dialog: MatDialog, private router: Router) {}

  ngOnInit(): void {
    // Initialize teams here
  }

  navigateToPlayers(teamId: string) {
    // Use Angular's Router to navigate to the PlayersComponent with the given teamId
    this.router.navigate(['/teams/players', teamId]);
  }

  downloadLogs(): void {
    console.log('Downloading logs...');
    // Here you would implement the logic to download logs
    // For instance, fetching log data from a server or generating a file from local data
  }

  openAddTeamDialog(): void {
    const dialogRef = this.dialog.open(AddTeamDialogComponent, {
      width: '500px',
      position: { top: '20px', left: 'calc(50% - 250px)' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) { // Check if result has value, which means form was submitted
        console.log('The dialog was closed', result);
        // Create a new team object from the result
        const newTeam: Team = {
          id: this.generateUniqueId(), // You need to generate a unique ID for the new team
          name: result.name,
          logo: result.logo,
          players: this.parseCsvData(result.playersFile), // You will need to parse the CSV data
          location: result.location // You might need to update the form to include the location
        };

        // Add the new team to the teams array
        this.teams.push(newTeam);
      }
    });
  }

  generateUniqueId(): string {
    const id = this.teams.length + 1;
    return id.toString();
  }

  parseCsvData(file: File): Player[] {
    const players: Player[] = [];
    const reader = new FileReader();
    reader.onload = (event) => {
      if (event.target) {
        const csvData = event.target.result as string;
        const rows = csvData.split('\n');
        const headers = rows[0].split(',');

        for (let i = 1; i < rows.length; i++) {
          const rowData = rows[i].split(',');
          const player: Player = {
            name: rowData[0] || 'N/A',
            age: parseInt(rowData[1]) || 100,
            position: rowData[2] || 'N/A'
          };
          players.push(player);
        }
      }
    };

    reader.readAsText(file);
    return players;
  }
}
