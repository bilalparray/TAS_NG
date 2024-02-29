import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IshtiyaqComponent } from './ishtiyaq.component';

const routes: Routes = [{ path: '', component: IshtiyaqComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IshtiyaqRoutingModule { }
