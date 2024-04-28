import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Team } from '../team.model'; // Adjust based on actual relative paths

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  // Mock teams data for demonstration
  private teams: Team[] = [
    { id: '1', name: 'Team A', logo: 'team-a-logo.png', players: [], location: 'Location A' },
    { id: '2', name: 'Team B', logo: 'team-b-logo.png', players: [], location: 'Location B' }
  ];

  constructor() {}

  // Method to fetch team data by ID
  getTeamById(teamId: string): Observable<Team | null> {
    const team = this.teams.find(t => t.id === teamId);
    return of(team || null); // Return the found team or null if not found
  }
}
