import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/games', pathMatch: 'full' },
  {
    path: 'games',
    loadComponent: () =>
      import('./game/game-list/game-list.component').then(
        (x) => x.GameListComponent
      ),
  },
  {
    path: 'admin',
    loadComponent: () =>
      import('./admin/admin.component').then(
        (x) => x.AdminComponent
      ),
  },
];
