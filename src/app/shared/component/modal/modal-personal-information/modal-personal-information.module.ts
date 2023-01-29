import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalPersonalInformationComponent } from './modal-personal-information.component';
import { NgxMatIntlTelInputComponent } from 'ngx-mat-intl-tel-input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatSelectIconModule } from '@angular-material-extensions/select-icon'; 

@NgModule({
  declarations: [
    ModalPersonalInformationComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMatIntlTelInputComponent,
    MatFormFieldModule,
    MatIconModule,
    FontAwesomeModule,
    MatSelectIconModule
  ],
  exports: [
    ModalPersonalInformationComponent,
  ]
})
export class ModalPersonalInformationModule { }
