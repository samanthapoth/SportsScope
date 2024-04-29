import { Component, OnInit } from '@angular/core';
import { GamesService } from './games.service';
import { Game } from './game.model';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  currentMonth: string = "";
  days: any[] = [];
  showEventForm: boolean = false;
  showEventDetails: boolean = false;
  selectedEvent: Game | null = null;

  constructor(private gamesService: GamesService) {}

  ngOnInit(): void {
    this.loadMonth(new Date());
  }

  closeEventForm() {
    this.showEventForm = false;
  }
  
  closeEventDetails() {
    this.showEventDetails = false;
  }
  openEventForm() {
    this.showEventForm = true;
  }
  clearAllEvents() {
    // Assuming your backend has an endpoint to clear all games, which is unlikely, this is hypothetical
    // If there is no such API, you might need to fetch all games, loop through them, and delete one by one
    console.log("Clear all events functionality is not implemented");
  }
  
  changeMonth(offset: number) {
    const current = new Date(this.currentMonth);
    current.setMonth(current.getMonth() + offset);
    this.loadMonth(current);
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

    this.fetchEvents(firstDayOfMonth);
  }

  fetchEvents(firstDayOfMonth: number) {
    this.gamesService.getAllGames().subscribe({
      next: (games) => {
        games.forEach(game => {
          const gameDate = new Date(game.date);
          const index = gameDate.getDate() + firstDayOfMonth - 1; // index correction for the calendar
          if (index >= 0 && index < this.days.length) {
            this.days[index].events.push(game);
          }
        });
      },
      error: (err) => console.error('Error fetching games:', err)
    });
  }

  addEvent(form: any) {
    const game: Game = {
      name: form.value.eventName,
      location: form.value.location,
      homeTeam: form.value.home_team,
      awayTeam: form.value.away_team,
      date: form.value.date,
      time: form.value.time,
      played: false,
      homeTeamScore: form.value.home_team_score || 0,
      awayTeamScore: form.value.away_team_score || 0
    };
  
    this.gamesService.createGame(game).subscribe({
      next: () => {
        this.fetchEvents(new Date().getDay()); // Refresh events on successful addition
        this.closeEventForm(); // Close the form on success
      },
      error: (err) => {
        console.error('Error adding game:', err);
        this.closeEventForm(); // Close the form on error
      }
    });
  }
  removeEvent(eventId: Game | null) {
  if (eventId && eventId._id) {
    this.gamesService.deleteGame(eventId._id).subscribe({
      next: () => {
        this.fetchEvents(new Date().getDay());  // Assuming fetchEvents has been adapted to take the day of the week
        this.closeEventDetails();  // Close details view on success
      },
      error: (err) => console.error('Error removing game:', err)
    });
  }
}

  updateEvent(form: any) {
    if (!this.selectedEvent || !this.selectedEvent._id) return;
  
    const updatedGame: Game = {
      _id: this.selectedEvent._id,
      name: form.value.eventName,
      location: form.value.location,
      homeTeam: form.value.home_team,
      awayTeam: form.value.away_team,
      date: form.value.date,
      time: form.value.time,
      played: this.selectedEvent.played,
      homeTeamScore: form.value.home_team_score || this.selectedEvent.homeTeamScore,
      awayTeamScore: form.value.away_team_score || this.selectedEvent.awayTeamScore
    };
  
    this.gamesService.updateGame(this.selectedEvent._id, updatedGame).subscribe({
      next: () => {
        this.fetchEvents(new Date().getDay()); // Refresh events on successful update
        this.closeEventDetails(); // Close details view on success
      },
      error: (err) => {
        console.error('Error updating game:', err);
        this.closeEventDetails(); // Close details view on error
      }
    });
  }

  // Implement other component methods as needed
}
