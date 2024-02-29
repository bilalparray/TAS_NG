import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwaisComponent } from './owais.component';

const routes: Routes = [{ path: '', component: OwaisComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwaisRoutingModule { }
