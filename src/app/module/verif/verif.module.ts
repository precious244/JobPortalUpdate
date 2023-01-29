import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VerifRoutingModule } from './verif-routing.module';
import { VerifComponent } from './verif.component';


@NgModule({
  declarations: [
    VerifComponent
  ],
  imports: [
    CommonModule,
    VerifRoutingModule
  ]
})
export class VerifModule { }
