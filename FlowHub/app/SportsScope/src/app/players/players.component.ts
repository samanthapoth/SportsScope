// players.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamsService } from '../services/teams.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {
  teamId: string | undefined;  // Handling uninitialized property
  players: any[] = [];  // Initialize to an empty array to handle TS2564

  constructor(
    private route: ActivatedRoute,
    private teamsService: TeamsService  // Ensure TeamsService is imported correctly
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.teamId = params['teamId'];
      if (this.teamId) {
        this.loadPlayers(this.teamId);
      }
    });
  }

  loadPlayers(teamId: string): void {
    this.teamsService.getTeamPlayers(teamId).subscribe((players: any[]) => {  // Added type for 'players'
      this.players = players;
    });
  }
}
