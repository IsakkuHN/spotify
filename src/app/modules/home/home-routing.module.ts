import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  {
    path: 'tracks',
    loadChildren: () =>
      import('@modules/tracks/tracks.module').then(
        (module) => module.TracksModule
      ),
  },
  {
    path: 'favorites',
    loadChildren: () =>
      import('@modules/favorites/favorites.module').then(
        (module) => module.FavoritesModule
      ),
  },
  {
    path: 'history',
    loadChildren: () =>
      import('@modules/history/history.module').then(
        (module) => module.HistoryModule
      ),
  },
  {
    path: '**',
    redirectTo: '/tracks',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
