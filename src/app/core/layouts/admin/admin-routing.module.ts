import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth.guard';
import { JobFindComponent } from 'src/app/module/admin/job-find/job-find.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: 'job-find',
        canActivate: [AuthGuard],
        loadChildren: () => import('../../../module/admin/job-find/job-find.module').then((x) => x.JobFindModule)
      },
      {
        path: 'detail/:id',
        canActivate: [AuthGuard],
        loadChildren: () => import('../../../module/admin/job-detail/job-detail.module').then((x) => x.JobDetailModule)
      },
      {
        path: 'apply/:id',
        canActivate: [AuthGuard],
        loadChildren: () => import('../../../module/admin/apply/apply.module').then((x) => x.ApplyModule)
      },
      {
        path: 'profile/:id',
        canActivate: [AuthGuard],
        loadChildren: () => import('../../../module/admin/profile/profile.module').then((x) => x.ProfileModule)
      },
      {
        path: 'applied-job/:id',
        canActivate: [AuthGuard],
        loadChildren: () => import('../../../module/admin/applied-job/applied-job.module').then((x) => x.AppliedJobModule)
      },
      {
        path: 'applied-job-detail/:id',
        canActivate: [AuthGuard],
        loadChildren: () => import('../../../module/admin/job-applied-detail/job-applied-detail.module').then((x) => x.JobAppliedDetailModule)
      },
      {
        path: 'job-search',
        canActivate: [AuthGuard],
        loadChildren: () => import('../../../module/admin/job-search/job-search.module').then((x) => x.JobSearchModule)
      },
      {
        path: 'settings/:id',
        canActivate: [AuthGuard],
        loadChildren: () => import('../../../module/admin/settings/settings.module').then((x) => x.SettingsModule)
      },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }
