import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuhailRoutingModule } from './suhail-routing.module';
import { SuhailComponent } from './suhail.component';


@NgModule({
  declarations: [
    SuhailComponent
  ],
  imports: [
    CommonModule,
    SuhailRoutingModule
  ]
})
export class SuhailModule { }
