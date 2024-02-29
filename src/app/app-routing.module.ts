import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

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
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'bilal',
    loadChildren: () =>
      import('./components/players/bilal/bilal.module').then(
        (m) => m.BilalModule
      ),
  },

  {
    path: 'ubi',
    loadChildren: () =>
      import('./components/players/ubi/ubi.module').then((m) => m.UbiModule),
  },
  { path: 'owais', loadChildren: () => import('./components/players/owais/owais.module').then(m => m.OwaisModule) },
  { path: 'ehsaan', loadChildren: () => import('./components/players/ehsaan/ehsaan.module').then(m => m.EhsaanModule) },
  { path: 'muzamil', loadChildren: () => import('./components/players/muzamil/muzamil.module').then(m => m.MuzamilModule) },
  { path: 'ishtiyaq', loadChildren: () => import('./components/players/ishtiyaq/ishtiyaq.module').then(m => m.IshtiyaqModule) },
  { path: 'sahil', loadChildren: () => import('./components/players/sahil/sahil.module').then(m => m.SahilModule) },
  { path: 'zahid', loadChildren: () => import('./components/players/zahid/zahid.module').then(m => m.ZahidModule) },
  { path: 'showket', loadChildren: () => import('./components/players/showket/showket.module').then(m => m.ShowketModule) },
  { path: 'liyaqat', loadChildren: () => import('./components/players/liyaqat/liyaqat.module').then(m => m.LiyaqatModule) },
  { path: 'suhail', loadChildren: () => import('./components/players/suhail/suhail.module').then(m => m.SuhailModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
