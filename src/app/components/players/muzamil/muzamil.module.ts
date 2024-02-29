import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MuzamilRoutingModule } from './muzamil-routing.module';
import { MuzamilComponent } from './muzamil.component';


@NgModule({
  declarations: [
    MuzamilComponent
  ],
  imports: [
    CommonModule,
    MuzamilRoutingModule
  ]
})
export class MuzamilModule { }
