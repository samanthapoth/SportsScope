import { Component, OnInit } from '@angular/core';
import { Event } from '../models/event';
import { EventsService } from '../services/events.service';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../../core';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrl: './all.component.css',
})
export class AllComponent implements OnInit {
  events: Event[] = [];
  name = '';
  logo = '';
  players: string[] = [];
  location = '';
  busy = false;
  username = '';

  private modalRef?: NgbModalRef;
  constructor(
    authSvc: AuthService,
    private readonly svc: EventsService,
    private modalService: NgbModal
  ) {
    this.username = authSvc.user.username;
  }

  ngOnInit(): void {
    this.svc.getAllEvents().subscribe((x) => (this.events = x));
  }

  open(content: any) {
    this.modalRef = this.modalService.open(content, {
      size: 'lg',
      ariaLabelledBy: 'modal-title',
      backdrop: 'static',
    });
  }

  removePlayer(t: string) {
    this.players = this.players.filter((x) => x !== t);
  }
  addPlayer(t: string) {
    if (t && !this.players.includes(t)) {
      this.players.push(t);
    }
  }

  create(content: any) {
    this.busy = true;
    this.svc
      .createEvent(
        this.name,
        this.logo,
        this.players,
        this.location
      )
      .pipe(finalize(() => (this.busy = false)))
      .subscribe((_) => {
        this.ngOnInit();
        this.modalRef?.close();
        this.open(content);
      });
  }

  delete(id: string) {
    this.svc.deleteEvent(id).subscribe((_) => {
      this.ngOnInit();
      this.modalRef?.close();
    });
  }
}
