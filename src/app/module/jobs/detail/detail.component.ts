import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobService } from 'src/app/services/job/job.service';
import { DetailModel } from './detail-model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  detailModel = new DetailModel();

  job: any;
  id: any;

  constructor(
    public readonly jobService: JobService,
    public readonly router: Router,
    private activatedRoute: ActivatedRoute
  ) { }


  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe((data: any) => {
      let id = data.params.id,
        params = {
          jobId: id,
          jobStatus: "visible"
        }

      this.jobService.getDetailJob(params).subscribe(
        (response: any) => {
          this.detailModel.singleJobs = response.data;
          this.job = this.detailModel.singleJobs;
          console.log(this.detailModel.singleJobs)
        })
    })
  }

  submitApply() {
    this.router.navigate(['login']);
  }
}
