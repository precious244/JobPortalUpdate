import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'main',
    loadChildren: () => import('../app/core/layouts/admin/admin.module').then((x) => x.AdminModule)
  },
  {
    path: '',
    loadChildren: () => import('../app/core/layouts/front/front.module').then((x) => x.FrontModule)
  },
  {
    path: 'jobs',
    loadChildren: () => import('../app/core/layouts/jobs/jobs.module').then((x) => x.JobsModule)
  },
  {
    path: 'verif',
    loadChildren: () => import('../app/module/verif/verif.module').then((x) => x.VerifModule)
  },
  {
    path: 'verify-again',
    loadChildren: () => import('../app/module/verify-again/verify-again.module').then((x) => x.VerifyAgainModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('../app/module/forgot-password/forgot-password.module').then((x) => x.ForgotPasswordModule)
  },
  {
    path: 'change-password/:token',
    loadChildren: () => import('../app/module/change-password/change-password.module').then((x) => x.ChangePasswordModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
