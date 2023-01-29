import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobService } from 'src/app/services/job/job.service';
import { JobFindModel } from './model/job-find.model';

@Component({
  selector: 'app-job-find',
  templateUrl: './job-find.component.html',
  styleUrls: ['./job-find.component.scss']
})
export class JobFindComponent implements OnInit {

  jobFindModel = new JobFindModel();

  config: any;

  fill = '';

  loader = true;
  page: number = 1;
  noOfRows = 2;
  onSearch: boolean = false;

  constructor(
    public readonly jobService: JobService,
    public readonly router: Router
  ) {
  }

  ngOnInit(): void {
    this.jobService.getRecentJob().subscribe(
      (response) => {
        this.jobFindModel.recentJobs = response.data;
      },
      (error) => {

      });
  }

  createRange(lastPage: number): any {
    let paginationArray: any = [];
    for (let i = 0; i < lastPage; i++) {
      const page = {
        label: `${i + 1}`,
        value: i + 1,
      };
      paginationArray.push(page);
    }
    return paginationArray;
  }

  getStartIndex(currentPage: number, lastPage: number): string {
    let firstIndex = 1;
    if ((currentPage !== lastPage) || (currentPage > 0 && lastPage > 0)) {
      firstIndex = (Number(this.noOfRows) * (Number(currentPage) - 1) + 1);
    }
    return firstIndex.toString();
  }

  getLastIndex(currentPage: number, lastPage: number): string {
    let lastIndex = this.jobFindModel.recentJobs ? this.jobFindModel.recentJobs.length : null;
    if ((currentPage !== lastPage)) {
      lastIndex = (Number(this.noOfRows) * (Number(currentPage)));
    }
    return lastIndex.toString();
  }

  keJobSearch() {
    this.router.navigate(["main/job-search"], { queryParams: { data: this.fill } });
    this.onSearch = true;
  };

}
