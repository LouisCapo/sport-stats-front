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
    path: 'player/:id',
    loadChildren: () =>
      import(`./modules/player-page/player-page.module`).then(
        (module) => module.PlayerPageModule
      ),
  },{
    path: 'team/:id',
    loadChildren: () =>
      import(`./modules/team-page/team-page.module`).then(
        (module) => module.TeamPageModule
      ),
  },{
    path: 'news/:id',
    loadChildren: () =>
      import(`./modules/news-page/news-page.module`).then(
        (module) => module.NewsPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
