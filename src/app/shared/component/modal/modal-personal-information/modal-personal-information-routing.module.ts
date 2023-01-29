import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from 'src/app/module/admin/settings/settings.component';

const routes: Routes = [
  {
    path: 'settings/:id',
    component: SettingsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModalPersonalInformationRoutingModule { }
