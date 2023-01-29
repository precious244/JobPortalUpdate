import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VerifyAgainRoutingModule } from './verify-again-routing.module';
import { VerifyAgainComponent } from './verify-again.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    VerifyAgainComponent
  ],
  imports: [
    CommonModule,
    VerifyAgainRoutingModule,
    SharedModule
  ]
})
export class VerifyAgainModule { }
