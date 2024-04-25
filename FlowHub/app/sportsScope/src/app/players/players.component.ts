// players.component.ts
import { Component, OnInit } from '@angular/core';
import { Player } from './player.model';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  players: Player[] = [];

  constructor() { }

  ngOnInit(): void {
    // Fetch player data or provide static data
    this.players = [
      { name: 'Player 1', points: 10, assists: 5, rebounds: 8 },
      { name: 'Player 2', points: 15, assists: 3, rebounds: 6 },
      // Add more players as needed
    ];
  }

  uploadStats() {
    // Add logic for uploading stats
    console.log('Upload stats functionality will be implemented here.');
  }
}
