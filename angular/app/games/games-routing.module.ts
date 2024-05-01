import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesComponent } from './games.component';

const routes: Routes = [
    {
      path: 'games',
      component: GamesComponent,
      pathMatch: 'full',
      children: [],
    },
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class GamesRoutingModule {}
  