import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LiyaqatRoutingModule } from './liyaqat-routing.module';
import { LiyaqatComponent } from './liyaqat.component';


@NgModule({
  declarations: [
    LiyaqatComponent
  ],
  imports: [
    CommonModule,
    LiyaqatRoutingModule
  ]
})
export class LiyaqatModule { }
