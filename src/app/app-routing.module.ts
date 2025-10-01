import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PlayerComponent } from './components/player/player.component';
import { BattingOrderComponent } from './components/batting-order/batting-order.component';
import { PrivacyComponent } from './components/privacy/privacy.component';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./components/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: 'form',
    loadChildren: () =>
      import('./components/form/form.module').then((m) => m.FormModule),
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'privacy',
    component: PrivacyComponent,
  },
  {
    path: 'batting-order',
    component: BattingOrderComponent,
  },
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full',
  },

  {
    path: 'player/:id',
    component: PlayerComponent,
  },
  {
    path: '**',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
