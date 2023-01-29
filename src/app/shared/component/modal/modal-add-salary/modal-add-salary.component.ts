import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ProfileModel } from 'src/app/module/admin/profile/model/profile.model';
import { AddSalaryService } from 'src/app/services/add-salary/add-salary.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ProfileService } from 'src/app/services/profile/profile.service';
import { AddSalaryModel } from './model/add-salary.model';

@Component({
  selector: 'app-modal-add-salary',
  templateUrl: './modal-add-salary.component.html',
  styleUrls: ['./modal-add-salary.component.scss']
})
export class ModalAddSalaryComponent implements OnInit {

  @Input() data: any;
  @Input() closeModal: any;
  salaryModel = new AddSalaryModel();
  profileModel = new ProfileModel;
  submitted: boolean = false;
  allCurrency: any = [];
  jobseekerId: any;
  userData: any = {};
  profileData: any = {};
  salaryData: any = {};
  profile: any = {};
  value: any;
  ngModelExample: number = 10;
  public autoSaveEnabled = false;

  constructor(
    public activeModal: NgbActiveModal,
    private readonly salaryService: AddSalaryService,
    public readonly authService: AuthService,
    public readonly profileService: ProfileService,
  ) { }

  ngOnInit(): void {
    this.salaryService.getCurrency().subscribe(
      (response) => {
        this.salaryModel.allCurrency = response.data;
      },
      (error) => {
      });

    if (this.authService.isLogin()) {
      this.userData = this.authService.loadUserData()
    }
    
    this.salaryModel.formGroupEditSalary.controls['jobseekerId'].setValue(this.userData.jobseekerId);
    this.profileService.getUserProfile(this.salaryModel.formGroupEditSalary.value).subscribe(
      (response: any) => {
        this.salaryModel.userProfile = response.data;
        this.profile = this.salaryModel.userProfile;
        this.salaryModel.salary = response.data.jobseekerSalary;
      })
    }

  public editSalary(): void {
    const formData = this.salaryModel.formGroupEditSalary.getRawValue()
    const data = {
      ...formData,
      jobseekerId: this.jobseekerId
    }
    this.salaryModel.formGroupEditSalary.controls['jobseekerId'].setValue(this.userData.jobseekerId);
    console.log(this.salaryModel.formGroupEditSalary.value, data);
    this.salaryService.editSalary(this.salaryModel.formGroupEditSalary.value).subscribe(
        (response: any) => {
          this.salaryService.saveData(response.data)
          this.submitted = true
          this.activeModal.dismiss('Cross click')
          window.location.reload()
        }),
    this.salaryModel.formGroupEditSalary.controls['jobseekerId'].setValue(this.userData.jobseekerId)
    this.salaryService.getSalaryId(this.salaryModel.formGroupEditSalary.value).subscribe(
      (response: any) => {
        var salaryId = response.data.salaryId
        this.salaryModel.formGroupEditSalary.controls['salaryId'].setValue(salaryId)
        console.log(this.salaryModel.formGroupEditSalary.value, salaryId)
        this.salaryService.updateSalary(this.salaryModel.formGroupEditSalary.value).subscribe(
          (response: any) => {
            this.salaryService.saveData(response.data)
            this.submitted = true
            this.activeModal.dismiss('Cross click')
            window.location.reload();
        })
      })
    }
  }