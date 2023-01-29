import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobFindRoutingModule } from './job-find-routing.module';
import { JobFindComponent } from './job-find.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JobService } from 'src/app/services/job/job.service';


@NgModule({
  declarations: [
    JobFindComponent
  ],
  imports: [
    CommonModule,
    JobFindRoutingModule,
    SharedModule
  ]
})
export class JobFindModule { }
