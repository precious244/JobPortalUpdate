import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplyComponent } from '../apply/apply.component';
import { JobDetailComponent } from '../job-detail/job-detail.component';
import { JobSearchComponent } from '../job-search/job-search.component';
import { JobFindComponent } from './job-find.component';

const routes: Routes = [
  {
    path: '',
    component: JobFindComponent,
  },
  {
    path: "detail/:id",
    component: JobDetailComponent
  },
  // {
  //   path: "job-search/:keyword",
  //   component: JobSearchComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobFindRoutingModule { }
