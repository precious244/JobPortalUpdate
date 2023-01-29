import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ModalUploadCvComponent } from './modal/modal-upload-cv/modal-upload-cv.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalAddExperienceComponent } from './modal/modal-add-experience/modal-add-experience.component';
import { ModalPersonalInformationModule } from './modal/modal-personal-information/modal-personal-information.module';
import { ModalAddSalaryModule } from './modal/modal-add-salary/modal-add-salary.module';
import { CurrencyMaskConfig, CurrencyMaskModule, } from "ng2-currency-mask";
import { ProfileUploadCvComponent } from './modal/profile-upload-cv/profile-upload-cv.component';
import { ModalAddEducationModule } from './modal/modal-add-education/modal-add-education.module';
import { ModalEditExperienceComponent } from './modal/modal-edit-experience/modal-edit-experience.component';
import { CKEditorModule } from 'ng2-ckeditor';
import { ModalEditEducationComponent } from './modal/modal-edit-education/modal-edit-education.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ModalEditSkillsComponent } from './modal/modal-edit-skills/modal-edit-skills.component';
import { ModalEditSkillsModule } from './modal/modal-edit-skills/modal-edit-skills.module';

export const CustomCurrencyMaskConfig: CurrencyMaskConfig = {
  align: "right",
  allowNegative: true,
  decimal: ",",
  precision: 2,
  prefix: "R$ ",
  suffix: "",
  thousands: "."
};
@NgModule({
  declarations: [
    ModalUploadCvComponent,
    ModalAddExperienceComponent,
    ProfileUploadCvComponent,
    ModalEditExperienceComponent,
    ModalEditEducationComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CurrencyMaskModule,
    CKEditorModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  exports: [
    ModalPersonalInformationModule,
    ModalAddEducationModule,
    FormsModule,
    CurrencyMaskModule,
    ReactiveFormsModule,
    ModalAddSalaryModule,
    ProfileUploadCvComponent,
    ModalAddExperienceComponent,
    ModalEditExperienceComponent,
    ModalEditEducationComponent,
    ModalEditSkillsModule
  ],
  providers: [
],
})
export class ComponentModule { }
