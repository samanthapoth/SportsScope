import { Component, OnInit } from '@angular/core';
import { Team } from '../models/team';
import { Player } from '../players/models/player';
import { TeamsService } from '../services/teams.service';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../../core';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrl: './all.component.css',
})
export class AllComponent implements OnInit {
  teams: Team[] = [];
  name = '';
  logo = '';
  players: Player[] = [];
  location = '';
  busy = false;
  username = '';

  private modalRef?: NgbModalRef;
  constructor(
    authSvc: AuthService,
    private readonly svc: TeamsService,
    private modalService: NgbModal
  ) {
    this.username = authSvc.user.username;
  }

  ngOnInit(): void {
    this.svc.getAllTeams().subscribe((x) => (this.teams = x));
  }

  open(content: any) {
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

  create(content: any) {
    this.busy = true;
    this.svc
      .createTeam(
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
    this.svc.deleteTeam(id).subscribe((_) => {
      this.ngOnInit();
      this.modalRef?.close();
    });
  }
}
