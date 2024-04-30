//details component.ts
import { Component } from '@angular/core';
import { TeamsService } from '../services/teams.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { tap, switchMap, of, finalize } from 'rxjs';
import { Team } from '../models/team';
import { Player } from '../players/models/player';
import { AuthService } from '../../core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  loading = false;
  id = '';
  details: Team | null = null;
  name = '';
  logo = '';
  players: Player[] = [];
  location = '';
  busy = false;
  canUpdate = false;

  private modalRef?: NgbModalRef;

  constructor(
    private route: ActivatedRoute,
    private readonly authSvc: AuthService,
    private readonly svc: TeamsService,
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
              .getTeamDetails(this.id)
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

  removePlayer(t: Player) {
    this.players = this.players.filter((x) => x !== t);
  }
  addPlayer(t: Player) {
    if (t && !this.players.includes(t)) {
      this.players.push(t);
    }
  }
  update(content: any) {
    this.busy = true;
    this.svc
      .updateTeamDetails(
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
