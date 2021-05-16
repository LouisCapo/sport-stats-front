import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamsPageComponent } from './teams-page.component'


const routes: Routes = [
    {
			path: '',
      component: TeamsPageComponent,
      data: { title: 'Sport Stats' }
    },
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class TeamsPageRoutingModule {}