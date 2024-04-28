import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  currentMonth: string;
  days: any[]; // This should be adjusted to suit your calendar logic
  games: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadMonth(new Date());
  }

  loadMonth(date: Date) {
    this.currentMonth = date.toLocaleString('default', { month: 'long', year: 'numeric' });
    const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

    this.days = Array(daysInMonth).fill(null).map((_, i) => ({
      date: i + 1,
      events: []
    }));

    for (let i = 0; i < firstDayOfMonth; i++) {
      this.days.unshift({ date: null, events: [] }); // placeholders for empty days at the start
    }

    this.fetchEvents(date);
  }

  fetchEvents(date: Date) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // JavaScript months are 0-indexed
    this.http.get<any[]>(`http://127.0.0.1:8000/games/${year}/${month}`).subscribe({
      next: (games) => {
        this.games = games;
        games.forEach(game => {
          const gameDate = new Date(game.date);
          const index = gameDate.getDate() + new Date(game.date).getDay() - 1; // index correction for the calendar
          if (index >= 0 && index < this.days.length) {
            this.days[index].events.push(game);
          }
        });
      },
      error: (err) => console.error('Error fetching games:', err)
    });
  }

  addEvent(event: any) {
    // You need to adjust how you collect data from the form, possibly using Angular forms
    const game = {
      name: event.name,
      location: event.location,
      home_team: { name: event.home_team },
      away_team: { name: event.away_team },
      date: event.date,
      time: event.time,
      played: false,
      home_team_score: event.home_team_score || 0,
      away_team_score: event.away_team_score || 0
    };

    this.http.post('http://127.0.0.1:8000/games/new', game).subscribe({
      next: () => this.fetchEvents(new Date(game.date)), // Refresh events on successful addition
      error: (err) => console.error('Error adding game:', err)
    });
  }

  changeMonth(change: number) {
    const current = new Date(this.currentMonth);
    current.setMonth(current.getMonth() + change);
    this.loadMonth(current);
  }

  clearAllEvents() {
    this.http.delete('http://127.0.0.1:8000/games/').subscribe({
      next: () => this.fetchEvents(new Date(this.currentMonth)),
      error: (err) => console.error('Error clearing games:', err)
    });
  }
}
