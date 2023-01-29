import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobDetailComponent } from '../job-detail/job-detail.component';
import { JobSearchComponent } from './job-search.component';

const routes: Routes = [
  {
    path: '',
    component: JobSearchComponent
  },
  {
    path: "detail/:id",
    component: JobDetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobSearchRoutingModule { }
