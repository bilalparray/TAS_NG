import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BilalRoutingModule } from './bilal-routing.module';
import { BilalComponent } from './bilal.component';


@NgModule({
  declarations: [
    BilalComponent
  ],
  imports: [
    CommonModule,
    BilalRoutingModule
  ]
})
export class BilalModule { }
