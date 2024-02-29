import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UbiRoutingModule } from './ubi-routing.module';
import { UbiComponent } from './ubi.component';


@NgModule({
  declarations: [
    UbiComponent
  ],
  imports: [
    CommonModule,
    UbiRoutingModule
  ]
})
export class UbiModule { }
