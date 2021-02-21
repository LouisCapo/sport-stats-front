import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelPageComponent } from './admin-panel-page.component'


const routes: Routes = [
    {
			path: '',
      component: AdminPanelPageComponent,
      data: { title: 'Sport Stats' }
    },
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class AdminPanelRoutingModule {}