import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LiyaqatComponent } from './liyaqat.component';

const routes: Routes = [{ path: '', component: LiyaqatComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LiyaqatRoutingModule { }
