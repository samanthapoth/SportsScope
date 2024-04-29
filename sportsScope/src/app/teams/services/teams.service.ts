// team.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Team } from '../team.model'; // Ensure you have a Team model
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private baseUrl = 'http://127.0.0.1:8000'; // The URL where your backend server is running

  constructor(private http: HttpClient) {}

  getTeams() {
    return this.http.get<Team[]>(`${this.baseUrl}/teams`);
  }

  getTeamById(teamId: string): Observable<Team> {
    return this.http.get<Team>(`${this.baseUrl}/teams/${teamId}`);
  }
}
