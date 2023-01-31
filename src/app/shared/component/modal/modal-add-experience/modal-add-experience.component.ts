import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AddSalaryService } from 'src/app/services/add-salary/add-salary.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ProfileService } from 'src/app/services/profile/profile.service';
import { EditExperienceModel } from './model/edit-experience.model';

@Component({
  selector: 'app-modal-add-experience',
  templateUrl: './modal-add-experience.component.html',
  styleUrls: ['./modal-add-experience.component.scss']
})
export class ModalAddExperienceComponent implements OnInit {
  
  expModel = new EditExperienceModel();
  maxChars = 2000;
  stateInfo: any[] = [];
  countryInfo: any[] = [];
  cityInfo: any[] = [];
  userData: any = {};
  @Input() data: any;
  profile: any = {};
  submitted: boolean = false;
  value: any = [];

  currentYear = new Date().getFullYear();
  startPeriodYearOptions: number[] = [];
  endPeriodYearOptions: number[] = [];
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
    public profileService: ProfileService,
    public readonly authService: AuthService,
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
    const param = {
      jobseekerId: this.data.jobseekerId
    }
    this.profileService.getUserProfile(param).subscribe(
      (response: any) => {
        this.expModel.userProfile = response.data;
        this.profile = this.expModel.userProfile;
      })
    this.profileService.getAllJobType().subscribe(
      (response) => {
        this.expModel.allJobType = response.data;
      })
    this.profileService.getAllJobFunction().subscribe(
      (response) => {
        this.expModel.allJobFunction = response.data;
      })
    this.profileService.getAllCompanyList().subscribe(
      (response) => {
        this.expModel.allCompany= response.data;
      })
    this.getCountries();
    }

getCountries(){
  this.profileService.getCountryList().subscribe(
    (response) => {
      this.expModel.allCountry = response.data;
  })}

onChangeCountry(countryId:any) {
    this.expModel.allCity = this.expModel.allCountry[countryId];
    this.profileService.getCityList(countryId).subscribe(
      (response:any)=>{
        this.expModel.allCity = response.data
      }
    )
  }

updateData() {
  this.expModel.editExperience.controls['jobseekerId'].setValue(this.userData.jobseekerId);
  console.log(this.expModel.editExperience.value);
  this.profileService.editExp(this.expModel.editExperience.value).subscribe(
      (response: any) => {
        this.profileService.editExp(response.data)
        this.submitted = true
        this.activeModal.dismiss('Cross click')
        window.location.reload()
      })
    }

onKeyUp(event: any): void {
  this.numberOfCharacters1 = event.target.value.length;

  if (this.numberOfCharacters1 > this.maxNumberOfCharacters) {
    event.target.value = event.target.value.slice(0, this.maxNumberOfCharacters);
    this.numberOfCharacters1 = this.maxNumberOfCharacters;
  }
}

checkValue(event: any){
  console.log(event);
}
}


