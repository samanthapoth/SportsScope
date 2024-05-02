import { Component, OnInit, ChangeDetectorRef, ViewChild  } from '@angular/core';
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
  @ViewChild('updateEventForm') updateEventForm!: NgForm;
  editMode: boolean = false;
  showEventForm: boolean = false;
  showEventDetails: boolean = false;
  showAddEventModal: boolean = false;
  selectedEvent: Game = {
    _id: '',
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
  editStates: { [key: string]: boolean } = {
    name: false,
    date: false,
    time: false,
    location: false,
    home_team: false,
    away_team: false,
    score: false
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
  onPlayedStatusChange(): void {
    if (!this.selectedEvent.played) {
      this.selectedEvent.home_team_score = 0
      this.selectedEvent.away_team_score = 0
    }
  }
  
  toggleEdit(): void {
    this.editMode = !this.editMode;
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
            if (index >= 0 && index <= this.days.length) {
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
  

  updateEvent() {
    if (this.editMode && this.updateEventForm.valid && this.selectedEvent._id) { // Check that _id is not undefined
      const updatedGame: Game = {
        _id: this.selectedEvent._id,
        name: this.selectedEvent.name,
        location: this.selectedEvent.location,
        home_team: this.selectedEvent.home_team,
        away_team: this.selectedEvent.away_team,
        date: this.selectedEvent.date,
        time: this.selectedEvent.time,
        played: this.selectedEvent.played,
        home_team_score: this.selectedEvent.home_team_score,
        away_team_score: this.selectedEvent.away_team_score
      };
  
      this.gamesService.updateGame(this.selectedEvent._id, updatedGame).subscribe({
        next: () => {
          this.fetchEvents(); // Refresh events on successful update
          this.closeEventDetails(); // Close details view on success
          this.toggleEdit(); // Turn off edit mode after updating
        },
        error: (err) => {
          console.error('Error updating game:', err);
          this.closeEventDetails(); // Close details view on error
        }
      });
    } else {
      console.error('Attempted to update with undefined ID or invalid form');
    }
  }
}  