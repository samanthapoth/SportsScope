import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { GamesService } from './games.service';
import { Game } from './game.model';
import { NgForm } from '@angular/forms';


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
  showAddEventModal: boolean = false;
  selectedEvent: Game | null = null;
  newGame: Game = {
    name: '',
    location: '',
    home_team: '',
    away_team: '',
    date: '',
    time: '',
    played: false,
    home_team_score: 0,
    away_team_score: 0
  };

  constructor(private cdr: ChangeDetectorRef, private gamesService: GamesService) {}

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

  toggleAddEventModal(): void {
    this.showAddEventModal = !this.showAddEventModal;
  }

  changeMonth(offset: number) {
    const current = new Date(this.currentMonth + " 1");
    current.setMonth(current.getMonth() + offset);
    this.loadMonth(current);
    this.cdr.detectChanges();
  }

  loadMonth(date: Date) {
    this.currentMonth = date.toLocaleString('default', { month: 'long', year: 'numeric' });
    const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  
    this.days = Array(daysInMonth).fill(null).map((_, i) => ({
      date: i + 1,
      events: []
    }));
  
    // Adjust for starting day of the week
    for (let i = 0; i < firstDayOfMonth; i++) {
      this.days.unshift({ date: null, events: [] });
    }
  
    this.fetchEvents(); // Fetch events whenever month is loaded/changed
  }

  selectEvent(event: Game) {
    console.log("Event selected, attempting to show modal");
    this.selectedEvent = event;
    this.showEventDetails = true;
    this.cdr.detectChanges();
}

  fetchEvents() {
    this.gamesService.getAllGames().subscribe({
      next: (games) => {
        const monthStart = new Date(this.currentMonth + " 1");
        const firstDayOfMonth = monthStart.getDay();
        this.days.forEach(day => day.events = []); // Clear previous events
  
        games.forEach(game => {
          const gameDate = new Date(game.date);
          // Ensure only adding events of the current month
          if (gameDate.getMonth() === monthStart.getMonth() && gameDate.getFullYear() === monthStart.getFullYear()) {
            const index = gameDate.getDate() + firstDayOfMonth; 
            if (index >= 0 && index < this.days.length) {
              this.days[index].events.push(game);
            }
          }
        });
      },
      error: (err) => console.error('Error fetching games:', err)
    });
  }

  addEvent(form: NgForm) {
    if (form.valid) {
      this.gamesService.createGame(this.newGame).subscribe({
        next: () => {
          this.fetchEvents();
          form.reset();
        },
        error: (err) => {
          console.error('Error adding game:', err);
        }
      });
    }
  }

  removeEvent(eventId: Game | null) {
    if (eventId && eventId._id) {
      this.gamesService.deleteGame(eventId._id).subscribe({
        next: () => {
          this.fetchEvents();  // Refresh events
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
      home_team: form.value.home_team,
      away_team: form.value.away_team,
      date: form.value.date,
      time: form.value.time,
      played: this.selectedEvent.played,
      home_team_score: form.value.home_team_score || this.selectedEvent.home_team_score,
      away_team_score: form.value.away_team_score || this.selectedEvent.away_team_score
    };
  
    this.gamesService.updateGame(this.selectedEvent._id, updatedGame).subscribe({
      next: () => {
        this.fetchEvents(); // Refresh events on successful update
        this.closeEventDetails(); // Close details view on success
      },
      error: (err) => {
        console.error('Error updating game:', err);
        this.closeEventDetails(); // Close details view on error
      }
    });
  }
}
