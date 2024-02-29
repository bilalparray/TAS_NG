import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IshtiyaqRoutingModule } from './ishtiyaq-routing.module';
import { IshtiyaqComponent } from './ishtiyaq.component';


@NgModule({
  declarations: [
    IshtiyaqComponent
  ],
  imports: [
    CommonModule,
    IshtiyaqRoutingModule
  ]
})
export class IshtiyaqModule { }
