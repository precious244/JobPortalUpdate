import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobAppliedDetailComponent } from '../job-applied-detail/job-applied-detail.component';
import { AppliedJobComponent } from './applied-job.component';

const routes: Routes = [
  {
    path: '',
    component: AppliedJobComponent
  },
  {
    path: 'applied-job-detail/:id',
    component: JobAppliedDetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppliedJobRoutingModule { }
