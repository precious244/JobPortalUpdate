import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobAppliedDetailRoutingModule } from './job-applied-detail-routing.module';
import { JobAppliedDetailComponent } from './job-applied-detail.component';


@NgModule({
  declarations: [
    JobAppliedDetailComponent
  ],
  imports: [
    CommonModule,
    JobAppliedDetailRoutingModule
  ]
})
export class JobAppliedDetailModule { }
