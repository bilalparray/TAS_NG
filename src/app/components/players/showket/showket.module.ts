import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowketRoutingModule } from './showket-routing.module';
import { ShowketComponent } from './showket.component';


@NgModule({
  declarations: [
    ShowketComponent
  ],
  imports: [
    CommonModule,
    ShowketRoutingModule
  ]
})
export class ShowketModule { }
