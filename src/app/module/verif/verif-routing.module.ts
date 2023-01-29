import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerifComponent } from './verif.component';

const routes: Routes = [
  {
    path: '',
    component: VerifComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VerifRoutingModule { }
