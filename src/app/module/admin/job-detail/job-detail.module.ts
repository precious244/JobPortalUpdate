import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobDetailRoutingModule } from './job-detail-routing.module';
import { JobDetailComponent } from './job-detail.component';


@NgModule({
  declarations: [
    JobDetailComponent
  ],
  imports: [
    CommonModule,
    JobDetailRoutingModule
  ]
})
export class JobDetailModule { }
