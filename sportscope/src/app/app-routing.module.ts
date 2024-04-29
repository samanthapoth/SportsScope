// app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayersComponent } from './teams/players/players.component';
import { TeamsComponent } from './teams/teams.component';

const routes: Routes = [
  { path: 'teams', component: TeamsComponent },
  { path: 'players/:teamId', component: PlayersComponent },  // Confirm this is defined correctly
  { path: '', redirectTo: '/teams', pathMatch: 'full' }  // Redirect to teams by default
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
