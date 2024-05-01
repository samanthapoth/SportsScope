import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Game } from '../models/game';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  private baseUrl = 'http://127.0.0.1:8000/games';

  constructor(private http: HttpClient) { }

  getAllGames(): Observable<Game[]> {
    return this.http.get<Game[]>(`${this.baseUrl}/`);
  }

  getGame(id: string): Observable<Game> {
    return this.http.get<Game>(`${this.baseUrl}/${id}`);
  }

  createGame(game: Game): Observable<any> {
    return this.http.post(`${this.baseUrl}/new`, game);
  }

  updateGame(id: string, game: Game): Observable<Game> {
    return this.http.put<Game>(`${this.baseUrl}/${id}`, game);
  }

  deleteGame(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
