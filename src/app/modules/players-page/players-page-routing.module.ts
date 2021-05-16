import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayersPageComponent } from './players-page.component'


const routes: Routes = [
    {
			path: '',
      component: PlayersPageComponent,
      data: { title: 'Sport Stats' }
    },
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class PlayersPageRoutingModule {}