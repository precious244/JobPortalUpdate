import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AddSalaryService } from 'src/app/services/add-salary/add-salary.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ProfileService } from 'src/app/services/profile/profile.service';
import { ModalEducationModel } from '../modal-add-education/model/modal-education.model';

@Component({
  selector: 'app-modal-edit-education',
  templateUrl: './modal-edit-education.component.html',
  styleUrls: ['./modal-edit-education.component.scss']
})
export class ModalEditEducationComponent {
  educationModel = new ModalEducationModel();

  currentYear = new Date().getFullYear();
  startPeriodYearOptions: number[] = [];
  endPeriodYearOptions: number[] = [];
  userData: any = {};
  jobseekerId: any;
  submitted: boolean = false;
  chosenYearDate: Date | undefined;
  education :any = {};

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
    private readonly salaryService: AddSalaryService,
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
      });

    this.profileService.getAllDegree().subscribe(
      (response) => {
        this.educationModel.allDegree = response.data;
      });

    this.profileService.getAllMajor().subscribe(
      (response) => {
        this.educationModel.allMajor = response.data;
      })

    this.educationModel.formGroupAddEducation.controls['jobseekerId'].setValue(this.userData.jobseekerId);
    this.profileService.getEduList(this.educationModel.formGroupAddEducation.value).subscribe(
        (response: any) => {
          var educationId = response.data[0]['educationId']
          this.educationModel.formGroupAddEducation.controls['educationId'].setValue(educationId)
          console.log(this.educationModel.formGroupAddEducation.value, educationId)
          this.profileService.getEduDetail(this.educationModel.formGroupAddEducation.value).subscribe(
            (data: any) => {
              this.educationModel.dataEducation = data.data;
              this.education = this.educationModel.dataEducation;
            })
          })
        }

  onKeyUp(event: any): void {
    this.numberOfCharacters1 = event.target.value.length;
  
    if (this.numberOfCharacters1 > this.maxNumberOfCharacters) {
      event.target.value = event.target.value.slice(0, this.maxNumberOfCharacters);
      this.numberOfCharacters1 = this.maxNumberOfCharacters;
    }
  }

  roleData2 = [];
  updateEducation(){
    this.educationModel.formGroupAddEducation.controls['jobseekerId'].setValue(this.userData.jobseekerId);
    this.profileService.getEduList(this.educationModel.formGroupAddEducation.value).subscribe(
        (response: any) => {
          // console.log(response['data'][0]['educationId'])
          var educationId = response.data[0]['educationId']
          this.educationModel.formGroupAddEducation.controls['educationId'].setValue(educationId)
          this.educationModel.formGroupAddEducation.controls['jobseekerId'].setValue(this.userData.jobseekerId);
          console.log(this.educationModel.formGroupAddEducation.value, educationId)
          this.profileService.updateEducation(this.educationModel.formGroupAddEducation.value).subscribe(
            (response: any) => {
              this.salaryService.saveData(response.data)
              this.submitted = true
              this.activeModal.dismiss('Cross click')
              window.location.reload();
      })})}

}

