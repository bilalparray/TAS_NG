import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MuzamilComponent } from './muzamil.component';

const routes: Routes = [{ path: '', component: MuzamilComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MuzamilRoutingModule { }
