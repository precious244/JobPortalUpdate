import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { JobService } from 'src/app/services/job/job.service';
import { AppliedDetailModel } from './model/applied-detail.model';

@Component({
  selector: 'app-job-applied-detail',
  templateUrl: './job-applied-detail.component.html',
  styleUrls: ['./job-applied-detail.component.scss']
})
export class JobAppliedDetailComponent {

  jobseekerId: any;
  appliedDetailModel = new AppliedDetailModel();
  job: any = {};
  jobs: any = {};
  id: any;
  userData: any = {};

  constructor(
    public readonly jobService: JobService,
    public readonly router: Router,
    private activatedRoute: ActivatedRoute,
    public readonly authService: AuthService,
  ) { }

  ngOnInit(): void {
    if (this.authService.isLogin()) {
      this.userData = this.authService.loadUserData()
    }
    this.activatedRoute.paramMap.subscribe((data: any) => {
      let jobId = data.params.id,
        params = {
          jobId: jobId,
          jobStatus: "visible"
        }
    this.appliedDetailModel.detailedForm.controls['jobseekerId'].setValue(this.userData.jobseekerId);
    this.appliedDetailModel.detailedForm.controls['jobId'].setValue(data.params);
    console.log(this.appliedDetailModel.detailedForm.value);
    this.jobService.getAppliedDetailJob(this.appliedDetailModel.detailedForm.value, params).subscribe(
      (response: any) => {
        this.appliedDetailModel.data = response.data;
        this.job = this.appliedDetailModel.data;
      },
      (error) => {
      })
    this.jobService.getDetailJob(params).subscribe(
      (response: any) => {
        this.appliedDetailModel.data = response.data;
        this.jobs = this.appliedDetailModel.data;
      })
    }) 
  }
}