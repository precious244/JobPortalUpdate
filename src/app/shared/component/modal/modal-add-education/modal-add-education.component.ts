import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { map, Observable, startWith } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ProfileService } from 'src/app/services/profile/profile.service';
import { ModalEducationModel } from './model/modal-education.model';

@Component({
  selector: 'app-modal-add-education',
  templateUrl: './modal-add-education.component.html',
  styleUrls: ['./modal-add-education.component.scss']
})
export class ModalAddEducationComponent implements OnInit {

  educationModel = new ModalEducationModel();

  currentYear = new Date().getFullYear();
  startPeriodYearOptions: number[] = [];
  endPeriodYearOptions: number[] = [];
  userData: any = {};
  jobseekerId: any;
  submitted: boolean = false;
  chosenYearDate: Date | undefined;

  @Input()
  maxNumberOfCharacters = 2000;
  counter = true;

  numberOfCharacters1 = 0;
  numberOfCharacters2 = 0;
  interaction = {
    textValue: ''
  };

  constructor(
    public activeModal: NgbActiveModal,
    public readonly authService: AuthService,
    public readonly profileService: ProfileService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {

    for (let i = 0; i < 100; i++) {
      this.endPeriodYearOptions.push(2050 - i);
    }

    for (let i = 0; i < 100; i++) {
      this.startPeriodYearOptions.push(this.currentYear - i);
    }

    if (this.authService.isLogin()) {
      this.userData = this.authService.loadUserData()
    }

    this.profileService.getAllUniversity().subscribe(
      (response) => {
        this.educationModel.allUniversity = response.data;
      },
      (error) => {

      });

    this.profileService.getAllDegree().subscribe(
      (response) => {
        this.educationModel.allDegree = response.data;
      },
      (error) => {

      });

    this.profileService.getAllMajor().subscribe(
      (response) => {
        this.educationModel.allMajor = response.data;
      },
      (error) => {

      });
  }
  
  onKeyUp(event: any): void {
    this.numberOfCharacters1 = event.target.value.length;
  
    if (this.numberOfCharacters1 > this.maxNumberOfCharacters) {
      event.target.value = event.target.value.slice(0, this.maxNumberOfCharacters);
      this.numberOfCharacters1 = this.maxNumberOfCharacters;
    }
  }
  addEducation(){
    this.educationModel.formGroupAddEducation.controls['jobseekerId'].setValue(this.userData.jobseekerId)
    console.log(this.educationModel.formGroupAddEducation.value)
    this.profileService.addEducation(this.educationModel.formGroupAddEducation.value).subscribe(
      (response: any) => {
        this.profileService.addEducation(response.data)
        this.submitted = true
        this.activeModal.dismiss('Cross click');
        window.location.reload();
      },
      (error) => {
      })
  }
  

}
