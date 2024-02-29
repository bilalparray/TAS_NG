import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SahilRoutingModule } from './sahil-routing.module';
import { SahilComponent } from './sahil.component';


@NgModule({
  declarations: [
    SahilComponent
  ],
  imports: [
    CommonModule,
    SahilRoutingModule
  ]
})
export class SahilModule { }
