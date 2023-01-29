import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { ModalAddSalaryComponent } from './modal-add-salary.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CurrencyMaskModule } from 'ng2-currency-mask';

@NgModule({
  declarations: [
    ModalAddSalaryComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    CurrencyMaskModule
  ],
  exports: [
    ModalAddSalaryComponent
  ],
  providers: [
    CurrencyPipe
  ]
})
export class ModalAddSalaryModule { }
