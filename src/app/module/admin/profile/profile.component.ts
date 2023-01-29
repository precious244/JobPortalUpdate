import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from '../../../services/login/login.service';
import { ModalAddEducationComponent } from 'src/app/shared/component/modal/modal-add-education/modal-add-education.component';
import { ModalAddExperienceComponent } from 'src/app/shared/component/modal/modal-add-experience/modal-add-experience.component';
import { ProfileModel } from './model/profile.model';
import { ProfileService } from 'src/app/services/profile/profile.service';
import { ModalAddSalaryComponent } from 'src/app/shared/component/modal/modal-add-salary/modal-add-salary.component';
import { UploadFileService } from 'src/app/services/upload-cv/upload-file.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ModalPersonalInformationComponent } from 'src/app/shared/component/modal/modal-personal-information/modal-personal-information.component';
import { ModalPersonalModel } from 'src/app/shared/component/modal/modal-personal-information/model/modal-personal-information.model';
import { AddSalaryService } from 'src/app/services/add-salary/add-salary.service';
import { ProfileUploadCvComponent } from 'src/app/shared/component/modal/profile-upload-cv/profile-upload-cv.component';
import { ModalEditExperienceComponent } from 'src/app/shared/component/modal/modal-edit-experience/modal-edit-experience.component';
import { EditExperienceModel } from 'src/app/shared/component/modal/modal-add-experience/model/edit-experience.model';
import { ModalEducationModel } from 'src/app/shared/component/modal/modal-add-education/model/modal-education.model';
import { ModalEditEducationComponent } from 'src/app/shared/component/modal/modal-edit-education/modal-edit-education.component';
import { ModalEditSkillsComponent } from 'src/app/shared/component/modal/modal-edit-skills/modal-edit-skills.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profileModel = new ProfileModel();
  modalPersonalModel = new ModalPersonalModel();
  educationModel = new ModalEducationModel();
  profile: any = {};
  degree: any = {};
  id: any;
  userData: any = {};
  isUploaded: unknown;
  education: any = {};
  submitted: boolean = false;
  fileName = '';
  @Input() file: any;
  isUpload: unknown;
  onUpload: unknown;
  countryInfo: any[] = [];
  countryValue:any;
  countryName:any;
  expModel = new EditExperienceModel();

  constructor(
    public readonly loginService: LoginService,
    public readonly profileService: ProfileService,
    public readonly router: Router,
    private readonly modalService: NgbModal,
    private activatedRoute: ActivatedRoute,
    public readonly uploadCvService: UploadFileService,
    public readonly authService: AuthService,
    private readonly salaryService: AddSalaryService,
  ) { }

  ngOnInit(): void {
    if (this.authService.isLogin()) {
      this.userData = this.authService.loadUserData()
    }
    this.activatedRoute.paramMap.subscribe((data: any) => {
      let id = data.params.id,
        params = {
          jobseekerId: id,
        }
      this.profileService.getUserProfile(params).subscribe(
        (response: any) => {
          this.profileModel.userProfile = response.data;
          this.profile = this.profileModel.userProfile;
          this.profileModel.skills = response.data.skills;
          this.profileModel.salary = response.data.jobseekerSalary;
          this.profileModel.education = response.data.jobseekerEducation;
          this.profileModel.experience = response.data.jobseekerExperience;
        },
        (error) => {
        })

      this.profileService.getAllDegree().subscribe(
        (response) => {
          this.profileModel.allDegree = response.data;
          this.degree = this.profileModel.allDegree;
        },
        (error) => {
        })

      this.profileModel.uploadImageForm.controls['jobseekerId'].setValue(this.userData.jobseekerId);
      this.uploadCvService.getResumeStatus(this.profileModel.uploadImageForm.value).subscribe(
        (response: any) => {
          this.isUploaded = true;
        })
    })
    this.getCountries();
  }

  getCountries(){
    this.profileService.allCountries().
    subscribe(
      data2 => {
        this.countryInfo=data2.Countries
      },
      err => console.log(err),
      () => console.log('complete')
    )
  }

  openAddExperience() {
    const modal = this.modalService.open(
      ModalAddExperienceComponent, { size: 'lg' }
    );
    modal.componentInstance.data = this.profileModel.userProfile;
    modal.componentInstance.deleteExp = () => { this.deleteExp() }
  }

  roleData = [];

  deleteExp() { 
    this.expModel.editExperience.controls['jobseekerId'].setValue(this.userData.jobseekerId);
    this.profileService.getExpList(this.expModel.editExperience.value).subscribe(
        (response: any) => {
          this.roleData = response['data'];
          // console.log(response['data'][0]['experienceId'])
          var experienceId = response.data[0]['experienceId']
          this.expModel.editExperience.controls['experienceId'].setValue(experienceId)
          console.log(this.expModel.editExperience.value, experienceId)
          this.profileService.deleteExp(this.expModel.editExperience.value).subscribe(
            (response: any) => {
              this.salaryService.saveData(response.data)
              this.submitted = true
              window.location.reload();
      })})}

  openEditExperience() {
    const modal = this.modalService.open(
      ModalEditExperienceComponent, { size: 'lg' }
    );
    modal.componentInstance.data = this.profileModel.userProfile;
  }

  openAddEducation() {
    const modal = this.modalService.open(
      ModalAddEducationComponent, { size: 'lg' }
    );
    modal.componentInstance.data = this.profileModel.userProfile;
    modal.componentInstance.deleteEdu = () => { this.deleteEdu() }
  }

  roleData2 = [];

  deleteEdu() { 
    this.educationModel.formGroupAddEducation.controls['jobseekerId'].setValue(this.userData.jobseekerId);
    this.profileService.getEduList(this.educationModel.formGroupAddEducation.value).subscribe(
        (response: any) => {
          this.roleData2 = response['data'];
          // console.log(response['data'][0]['educationId'])
          var educationId = response.data[0]['educationId']
          this.educationModel.formGroupAddEducation.controls['educationId'].setValue(educationId)
          console.log(this.educationModel.formGroupAddEducation.value, educationId)
          this.profileService.deleteEdu(this.educationModel.formGroupAddEducation.value).subscribe(
            (response: any) => {
              this.salaryService.saveData(response.data)
              this.submitted = true
              window.location.reload();
      })})}

  openEditEducation() {
    const modal = this.modalService.open(
      ModalEditEducationComponent, { size: 'lg' }
    );
    modal.componentInstance.data = this.profileModel.userProfile;
  }
  openEditPersonalInformation() {
    const modal = this.modalService.open(
      ModalPersonalInformationComponent, { size: 'lg' });
    modal.componentInstance.data = this.profileModel.userProfile;
    modal.componentInstance.file = this.profileModel.uploadImageForm.controls['jobseekerImage'];
    modal.componentInstance.saveImage = () => { this.saveImage() }
    modal.componentInstance.resetFileUploader = () => { this.resetFileUploader() }
  }

  saveImage() {
    this.profileModel.uploadImageForm.controls['jobseekerId'].setValue(this.userData.jobseekerId);
    console.log(this.profileModel.uploadImageForm.value)
    this.uploadCvService.onUploadPhoto(this.profileModel.uploadImageForm.value).subscribe(
      (event: any) => {
        if (typeof (event) === 'object') {
          this.isUploaded = true;
        }
        this.salaryService.saveData(event.data)
      })
     }

  resetFileUploader() { 
  this.modalPersonalModel.profileModelForm.controls['jobseekerId'].setValue(this.userData.jobseekerId);
  console.log(this.modalPersonalModel.profileModelForm.value);
  this.profileService.deleteImage(this.modalPersonalModel.profileModelForm.value).subscribe(
      (response: any) => {
        this.isUpload = false;
      },
      (error) => {
        this.isUpload = true;
      }),
    (error: any) => {
      this.onUpload = true;
    }}

     openEditSkills() {
    const modal = this.modalService.open(
      ModalEditSkillsComponent, { size: 'lg' }
    );
    modal.componentInstance.data = this.profileModel.userProfile;
    // modal.componentInstance.data = this.profileModel.editSkillModelForm.controls['skillId'];
  }

  openEditSalary() {
    const modal = this.modalService.open(
      ModalAddSalaryComponent, { size: 'lg' }
    );
    modal.componentInstance.data = this.profileModel.userProfile;
  }

  saveCv() {
    this.profileModel.uploadCVForm.controls['jobseekerId'].setValue(this.userData.jobseekerId);
    console.log(this.profileModel.uploadCVForm.value)
    this.uploadCvService.upload(this.profileModel.uploadCVForm.value).subscribe(
      (event: any) => {
        if (typeof (event) === 'object') {
          this.isUploaded = true;
        }
      })
     }

  resetCv() { 
  this.modalPersonalModel.profileModelForm.controls['jobseekerId'].setValue(this.userData.jobseekerId);
  console.log(this.modalPersonalModel.profileModelForm.value);
  this.uploadCvService.deleteCv(this.modalPersonalModel.profileModelForm.value).subscribe(
      (response: any) => {
        this.isUploaded = false;
      },
      (error) => {
        this.isUpload = true;
      })
    }
     
  openUploadCv() {
    const modal = this.modalService.open(
      ProfileUploadCvComponent, { size: 'md' }
    );
    modal.componentInstance.data = this.profileModel.userProfile;
    modal.componentInstance.file = this.profileModel.uploadCVForm.controls['jobseekerResume'];
    modal.componentInstance.saveCv = () => { this.saveCv() }
    modal.componentInstance.resetCv = () => { this.resetCv() }
    
  }
}
