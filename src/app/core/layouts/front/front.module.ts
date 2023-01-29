import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontRoutingModule } from './front-routing.module';
import { FrontLayoutComponent } from './front-layout/front-layout.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TopbarHomeComponent } from './topbar-home/topbar-home.component';


@NgModule({
  declarations: [
    FrontLayoutComponent,
    TopbarHomeComponent,
  ],
  imports: [
    CommonModule,
    FrontRoutingModule,
    SharedModule,
  ],
  exports: [
    FrontLayoutComponent,
  ]
})
export class FrontModule { }
