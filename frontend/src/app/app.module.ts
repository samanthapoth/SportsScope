// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Import FormsModule for template-driven forms
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component'; // Import LoginComponent
import { RegisterComponent } from './register/register.component'; // Import RegisterComponent
import { PlayersComponent } from './teams/players/players.component';
import { TeamsComponent } from './teams/teams.component';
import { GamesComponent } from './games/games.component';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { AddTeamDialogComponent } from './teams/add-team-dialog/add-team-dialog.component'; // Import AddTeamDialogComponent
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


const appRoutes: Routes = [
  { path: 'players', component: PlayersComponent },
  { path: 'teams', component: TeamsComponent },
  { path: 'login', component: LoginComponent }, // Include LoginComponent in routes
  { path: 'register', component: RegisterComponent }, // Include RegisterComponent in routes
  { path: 'games', component: GamesComponent}, 
  { path: '', redirectTo: '/players', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent, // Include LoginComponent in declarations
    RegisterComponent, // Include RegisterComponent in declarations
    PlayersComponent,
    TeamsComponent,
    GamesComponent,
    AddTeamDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // Include FormsModule in imports for template-driven forms
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    MaterialModule,
    ReactiveFormsModule,
    MatDialogModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
