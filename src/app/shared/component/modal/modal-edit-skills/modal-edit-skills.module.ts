import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalEditSkillsComponent } from './modal-edit-skills.component';
import { MatIconModule } from '@angular/material/icon';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';


@NgModule({
  declarations: [
    ModalEditSkillsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    NgMultiSelectDropDownModule
  ],
  exports: [
    ModalEditSkillsComponent,
  ]
})
export class ModalEditSkillsModule { }
