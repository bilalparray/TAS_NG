import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UbiComponent } from './ubi.component';

const routes: Routes = [{ path: '', component: UbiComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UbiRoutingModule { }
