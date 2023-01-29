import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppliedJobRoutingModule } from './applied-job-routing.module';
import { AppliedJobComponent } from './applied-job.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FilterPipe } from './pipes/filter.pipe';


@NgModule({
  declarations: [
    AppliedJobComponent,
    FilterPipe,
  ],
  imports: [
    CommonModule,
    AppliedJobRoutingModule,
    SharedModule
  ]
})
export class AppliedJobModule { }
