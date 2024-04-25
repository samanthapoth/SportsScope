// teams.component.ts
import { Component, OnInit } from '@angular/core';
import { Team } from './team.model'; // You need to define this model

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  teams: Team[] = []; // Array to hold team data

  constructor() { }

  ngOnInit(): void {
    // You should fetch team data from your backend or provide static data
    // For example:
    this.teams = [
      { name: 'Team A', wins: 5, losses: 3 },
      { name: 'Team B', wins: 4, losses: 4 },
      // Add more teams as needed
    ];
  }

  calculateWinPercentage(team: Team): string {
    const totalGames = team.wins + team.losses;
    return ((team.wins / totalGames) * 100).toFixed(2) + '%';
  }
}
