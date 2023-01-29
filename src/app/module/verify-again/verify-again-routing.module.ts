import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerifyAgainComponent } from './verify-again.component';

const routes: Routes = [{
  path: '',
  component: VerifyAgainComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VerifyAgainRoutingModule { }
