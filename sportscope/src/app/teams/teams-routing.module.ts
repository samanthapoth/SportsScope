import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamsComponent } from './teams.component';
import { PlayersComponent } from './players/players.component';
// Import other components as needed

const routes: Routes = [
  // Define routes for your Teams feature
  { path: 'teams', component: TeamsComponent },
  { path: 'players/:teamId', component: PlayersComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamsRoutingModule { }
