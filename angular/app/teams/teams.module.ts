import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamsRoutingModule } from './teams-routing.module';
import { AllComponent } from './all/all.component';
import { DetailsComponent } from './details/details.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { SpinnerModule } from '@uiowa/spinner';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AllComponent, DetailsComponent],
  imports: [
    CommonModule,
    TeamsRoutingModule,
    FormsModule,
    NgbModalModule,
    SpinnerModule,
  ],
})
export class TeamsModule {}
