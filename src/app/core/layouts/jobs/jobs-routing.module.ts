import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobsLayoutComponent } from './jobs-layout/jobs-layout.component';

const routes: Routes = [
  {
    path: '',
    component: JobsLayoutComponent,
    children: [

      {
        path: 'list',
        loadChildren: () => import('../../../module/jobs/list/list.module').then((x) => x.ListModule)
      },
      {
        path: 'test',
        loadChildren: () => import('../../../module/jobs/test/test.module').then((x) => x.TestModule)
      },
      {
        path: 'search',
        loadChildren: () => import('../../../module/jobs/search/search.module').then((x) => x.SearchModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobsRoutingModule { }
