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
      { name: 'Player 1', age: 25, position: 'Forward' },
      { name: 'Player 2', age: 28, position: 'Guard' },
      // Add more players as needed
    ];
  }

  uploadStats() {
    // Add logic for uploading stats
    console.log('Upload stats functionality will be implemented here.');
  }

  downloadPlayersData() {
    const csvContent = this.generateCsvContent();
    this.downloadCsv(csvContent, 'players.csv');
  }

  generateCsvContent(): string {
    let csv = 'Name,Age,Position\n';
    this.players.forEach(player => {
      csv += `${player.name},${player.age},${player.position}\n`;
    });
    return csv;
  }

  downloadCsv(csvContent: string, fileName: string) {
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    a.click();
    window.URL.revokeObjectURL(url);
  }
}
