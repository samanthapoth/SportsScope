// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Import FormsModule for template-driven forms
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component'; // Import LoginComponent
import { RegisterComponent } from './register/register.component'; // Import RegisterComponent
import { PlayersComponent } from './players/players.component';
import { TeamsComponent } from './teams/teams.component';

const appRoutes: Routes = [
  { path: 'players', component: PlayersComponent },
  { path: 'teams', component: TeamsComponent },
  { path: 'login', component: LoginComponent }, // Include LoginComponent in routes
  { path: 'register', component: RegisterComponent }, // Include RegisterComponent in routes
  { path: '', redirectTo: '/players', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent, // Include LoginComponent in declarations
    RegisterComponent, // Include RegisterComponent in declarations
    PlayersComponent,
    TeamsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // Include FormsModule in imports for template-driven forms
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
