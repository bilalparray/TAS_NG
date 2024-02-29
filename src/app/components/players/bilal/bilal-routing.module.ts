import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BilalComponent } from './bilal.component';

const routes: Routes = [{ path: '', component: BilalComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BilalRoutingModule { }
