import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowketComponent } from './showket.component';

const routes: Routes = [{ path: '', component: ShowketComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowketRoutingModule { }
