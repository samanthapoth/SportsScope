// teams.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Team } from './team.model';

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

  navigateToPlayers(teamId: string): void {
    this.router.navigate(['/players', teamId]);
  }

  openAddTeamDialog(): void {
    // Existing dialog open method
  }

  downloadLogs(): void {
    console.log('Downloading logs...');
    // Here you would implement the logic to download logs
    // For instance, fetching log data from a server or generating a file from local data
  }
}
