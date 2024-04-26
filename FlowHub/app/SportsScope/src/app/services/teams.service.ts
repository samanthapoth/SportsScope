// teams.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor(private http: HttpClient) { }

  getTeamPlayers(teamId: string): Observable<any[]> {
    return this.http.get<any[]>(`/api/teams/${teamId}/players`);
  }
}
