import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelPageComponent } from './admin-panel-page.component'
import { AuthComponent } from './components/auth/auth.component';


const routes: Routes = [
    {
			path: 'edit',
      component: AdminPanelPageComponent,
      canActivate: []
    }, {
      path: 'auth',
      component: AuthComponent,
    }
  ];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class AdminPanelRoutingModule {}
