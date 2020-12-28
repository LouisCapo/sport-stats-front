import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerPageComponent } from './player-page.component'


const routes: Routes = [
    {
			path: '',
      component: PlayerPageComponent,
      data: { title: 'Sport Stats' }
    },
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class PlayerPageRoutingModule {}