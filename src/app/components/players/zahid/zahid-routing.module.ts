import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ZahidComponent } from './zahid.component';

const routes: Routes = [{ path: '', component: ZahidComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ZahidRoutingModule { }
