import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationSuccessRoutingModule } from './application-success-routing.module';
import { ApplicationSuccessComponent } from './application-success.component';


@NgModule({
  declarations: [
    ApplicationSuccessComponent
  ],
  imports: [
    CommonModule,
    ApplicationSuccessRoutingModule
  ]
})
export class ApplicationSuccessModule { }
