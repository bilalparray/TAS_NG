import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EhsaanRoutingModule } from './ehsaan-routing.module';
import { EhsaanComponent } from './ehsaan.component';


@NgModule({
  declarations: [
    EhsaanComponent
  ],
  imports: [
    CommonModule,
    EhsaanRoutingModule
  ]
})
export class EhsaanModule { }
