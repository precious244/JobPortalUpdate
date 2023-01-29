import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalAddEducationComponent } from './modal-add-education.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { CKEditorModule } from 'ng2-ckeditor';

@NgModule({
  declarations: [
    ModalAddEducationComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    CKEditorModule
  ],
  exports: [
    ModalAddEducationComponent
  ]
})
export class ModalAddEducationModule { }
