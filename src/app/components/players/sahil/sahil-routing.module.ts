import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SahilComponent } from './sahil.component';

const routes: Routes = [{ path: '', component: SahilComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SahilRoutingModule { }
