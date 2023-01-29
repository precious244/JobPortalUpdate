import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobsRoutingModule } from './jobs-routing.module';
import { JobsLayoutComponent } from './jobs-layout/jobs-layout.component';
import { TopbarJobsComponent } from './topbar-jobs/topbar-jobs.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    JobsLayoutComponent,
    TopbarJobsComponent
  ],
  imports: [
    CommonModule,
    JobsRoutingModule,
    SharedModule
  ]
})
export class JobsModule { }
