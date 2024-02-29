import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuhailComponent } from './suhail.component';

const routes: Routes = [{ path: '', component: SuhailComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuhailRoutingModule { }
