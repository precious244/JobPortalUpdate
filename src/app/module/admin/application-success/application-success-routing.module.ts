import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationSuccessComponent } from './application-success.component';

const routes: Routes = [
  {
    path: '',
    component: ApplicationSuccessComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationSuccessRoutingModule { }
