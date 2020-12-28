import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'main',
    loadChildren: () =>
      import(`./modules/main-page/main-page.module`).then(
        (module) => module.MainPageModule
      ),
  },{
    path: 'player',
    loadChildren: () =>
      import(`./modules/player-page/player-page.module`).then(
        (module) => module.PlayerPageModule
      ),
  },{
    path: 'team',
    loadChildren: () =>
      import(`./modules/team-page/team-page.module`).then(
        (module) => module.TeamPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
