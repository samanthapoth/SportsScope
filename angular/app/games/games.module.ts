import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesRoutingModule } from './games-routing.module';
import { GamesComponent } from './games.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { SpinnerModule } from '@uiowa/spinner';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [GamesComponent],
  imports: [
    CommonModule,
    GamesRoutingModule,
    FormsModule,
    NgbModalModule,
    SpinnerModule,
  ],
})
export class GamesModule {}