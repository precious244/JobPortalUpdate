import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from '../detail/detail.component';
import { TestComponent } from './test.component';

const routes: Routes = [
  {
    path: '',
    component: TestComponent
  },
  {
    path: "details/:id",
    component: DetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule { }
