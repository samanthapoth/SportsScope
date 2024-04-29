import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule


import { AddTeamDialogComponent } from './add-team-dialog/add-team-dialog.component';
import { TeamsRoutingModule } from './teams-routing.module';
// Other imports...

@NgModule({
  declarations: [
    AddTeamDialogComponent,
    // Other declarations...
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule, // Add ReactiveFormsModule here
    TeamsRoutingModule,
    // Other imports...
  ],
})
export class TeamsModule { }
