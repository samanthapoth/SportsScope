//details component.ts
import { Component } from '@angular/core';
import { EventsService } from '../services/events.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { tap, switchMap, of, finalize } from 'rxjs';
import { Event } from '../models/event';
import { AuthService } from '../../core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  loading = false;
  id = '';
  details: Event | null = null;
  name = '';
  logo = '';
  players: string[] = [];
  location = '';
  busy = false;
  canUpdate = false;

  private modalRef?: NgbModalRef;

  constructor(
    private route: ActivatedRoute,
    private readonly authSvc: AuthService,
    private readonly svc: EventsService,
    private modalService: NgbModal
  ) {}
  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        tap((_) => (this.loading = true)),
        switchMap((params: ParamMap) => {
          this.id = params.get('id') ?? '';
          if (this.id) {
            return this.svc
              .getEventDetails(this.id)
              .pipe(finalize(() => (this.loading = false)));
          } else {
            return of(null);
          }
        })
      )
      .subscribe((x) => {
        this.details = x;
        this.canUpdate = this.authSvc.user.username === x?.creator;
      });
  }
  open(content: any) {
    this.name = this.details!.name;
    this.logo = this.details!.logo;
    this.players = this.details!.players;
    this.location = this.details!.location;

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
  update(content: any) {
    this.busy = true;
    this.svc
      .updateEventDetails(
        this.id,
        this.name,
        this.logo,
        this.players,
        this.location
      )
      .pipe(finalize(() => (this.busy = false)))
      .subscribe((x) => {
        this.details = x;
        this.modalRef?.close();
        this.open(content);
      });
  }
}
