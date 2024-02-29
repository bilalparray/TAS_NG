import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ZahidRoutingModule } from './zahid-routing.module';
import { ZahidComponent } from './zahid.component';


@NgModule({
  declarations: [
    ZahidComponent
  ],
  imports: [
    CommonModule,
    ZahidRoutingModule
  ]
})
export class ZahidModule { }
