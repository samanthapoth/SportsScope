import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Game } from './models/game';
import { environment } from './../../src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  private readonly apiUrl = environment.apiUrl + `games`;
  constructor(private http: HttpClient) { }

  getAllGames(): Observable<Game[]> {
    return this.http.get<Game[]>(`${this.apiUrl}/`);
  }

  getGame(id: string): Observable<Game> {
    return this.http.get<Game>(`${this.apiUrl}/${id}`);
  }

  createGame(game: Game): Observable<any> {
    return this.http.post(`${this.apiUrl}/new`, game);
  }

  updateGame(id: string, game: Game): Observable<Game> {
    return this.http.put<Game>(`${this.apiUrl}/${id}`, game);
  }

  deleteGame(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
