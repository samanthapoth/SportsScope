import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../src/environments/environment';
import { Observable } from 'rxjs';
import { Team } from '../models/team';

@Injectable({ providedIn: 'root' })
export class TeamsService {
  private readonly apiUrl = environment.apiUrl + `teams`;
  constructor(private httpClient: HttpClient) {}

  getAllTeams(): Observable<Team[]> {
    return this.httpClient.get<Team[]>(this.apiUrl);
  }

  getTeamDetails(id: string): Observable<Team> {
    return this.httpClient.get<Team>(`${this.apiUrl}/${id}`);
  }

  createTeam(
    name: string,
    logo: string,
    players: string[],
    location: string
  ): Observable<any> {
    return this.httpClient.post(`${this.apiUrl}/new`, {
      name,
      logo,
      players,
      location,
    });
  }

  updateTeamDetails(
    id: string,
    name: string,
    logo: string,
    players: string[],
    location: string
  ): Observable<Team> {
    return this.httpClient.put<Team>(`${this.apiUrl}/${id}`, {
      name,
      logo,
      players,
      location,
    });
  }

  deleteTeam(id: string): Observable<any> {
    return this.httpClient.delete(`${this.apiUrl}/${id}`);
  }
}
