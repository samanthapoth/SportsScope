// teams.component.ts
import { Component, OnInit } from '@angular/core';
import { Team, TeamUpdate } from './team.model'; // Import the models

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  teams: Team[] = []; // Array to hold team data
  selectedLogoFile: File | null = null;

  constructor() { }

  ngOnInit(): void {
    // You should fetch team data from your backend or provide static data
    // For example:
    this.teams = [
      { name: 'Team A', logo: 'https://placehold.co/600x400?text=Team+A', players: ['Player 1', 'Player 2'], location: 'Location A' },
      { name: 'Team B', logo: 'https://placehold.co/600x400?text=Team+B', players: ['Player 3', 'Player 4'], location: 'Location B' }
      // Add more teams as needed
    ];
  }

  calculateWinPercentage(team: Team): string {
    // Add your logic for calculating win percentage
    return ''; // Placeholder for now
  }

  uploadStats() {
    // Add logic for uploading stats
    console.log('Upload stats functionality will be implemented here.');
  }

  onLogoFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file && file.type === 'image/png') {
      this.selectedLogoFile = file;
    } else {
      // Handle invalid file type
      console.log('Please select a PNG file.');
    }
  }

  changeLogo(event: any) {
    // Trigger click event of file input to open file dialog
    const fileInput = event.target.nextElementSibling;
    fileInput.click();
  }
}
