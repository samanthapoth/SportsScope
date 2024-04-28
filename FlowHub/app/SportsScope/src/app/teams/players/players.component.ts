import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Team } from '../team.model'; // Adjust based on actual relative paths
import { TeamService } from '../services/teams.service'; // Import TeamService for fetching team data
import { Player } from './player.model'; // Adjust based on actual relative paths

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  team: Team | null = null; // Initialize team as null or provide a default value
  players: Player[] = [];

  constructor(
    private route: ActivatedRoute,
    private teamService: TeamService // Inject TeamService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const teamId = params.get('teamId');
      if (teamId) { // Ensure teamId is not null
        this.teamService.getTeamById(teamId).subscribe(team => {
          this.team = team;
          this.players = this.team ? this.team.players : [];
        });
      } else {
        // Handle the case where teamId is null
      }
    });
  }
}
