import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import(`./modules/main-page/main-page.module`).then(
        (module) => module.MainPageModule
      ),
    pathMatch: 'full'
  },{
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
  }, {
    path: 'admin-panel',
    loadChildren: () => 
      import(`./modules/admin-panel-page/admin-panel-page.module`).then(
        (module) => module.AdminPanelPageModule
      )
  }, {
    path: 'games',
    loadChildren: () => 
      import(`./modules/games-page/games-page.module`).then(
        (module) => module.GamesPageModule
      )
  }, {
    path: '**',
    loadChildren: () => 
      import(`./modules/not-found-page/not-found-page.module`).then(
        (module) => module.NotFoundPageModule
      ),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
