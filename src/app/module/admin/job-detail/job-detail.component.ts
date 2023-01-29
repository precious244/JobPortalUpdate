import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { JobService } from 'src/app/services/job/job.service';
import { UploadFileService } from 'src/app/services/upload-cv/upload-file.service';
import { JobDetailModel } from './model/job-detail-model';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.scss']
})
export class JobDetailComponent implements OnInit {

  jobDetailModel = new JobDetailModel();

  job: any = {};
  userData: any = {};
  id: any;
  statusCheck: unknown;

  constructor(
    public readonly jobService: JobService,
    public readonly router: Router,
    public readonly uploadCvService: UploadFileService,
    public readonly authService: AuthService,
    private activatedRoute: ActivatedRoute
  ) { }


  ngOnInit(): void {
    if (this.authService.isLogin()) {
      this.userData = this.authService.loadUserData()
    }

    this.activatedRoute.paramMap.subscribe((data: any) => {
      let id = data.params.id,
        params = {
          jobId: id,
          jobStatus: "visible"
        }

      this.jobService.getDetailJob(params).subscribe(
        (response: any) => {
          this.jobDetailModel.singleJobs = response.data;
          this.job = this.jobDetailModel.singleJobs;
        })

      this.jobDetailModel.checkStatus.controls['jobseekerId'].setValue(this.userData.jobseekerId);
      this.jobDetailModel.checkStatus.controls['jobId'].setValue(data.params);
      this.uploadCvService.getApplyStatus(this.jobDetailModel.checkStatus.value, params).subscribe(
        (response: any) => {
        },
        (error) => {
          this.statusCheck = true;
        })
    })
  }

  submitApply() {
    this.job.jobId;
    this.router.navigate([`main/apply/${this.job.jobId}`]);
  }
}
