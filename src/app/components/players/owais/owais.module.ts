import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwaisRoutingModule } from './owais-routing.module';
import { OwaisComponent } from './owais.component';


@NgModule({
  declarations: [
    OwaisComponent
  ],
  imports: [
    CommonModule,
    OwaisRoutingModule
  ]
})
export class OwaisModule { }
