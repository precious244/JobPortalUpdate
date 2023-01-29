import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { JobService } from 'src/app/services/job/job.service';
import { TestModel } from './model/test.model';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {


  testModel = new TestModel();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  config: any;
  phoneForm: any;
  fill = '';
  result: string = '';
  finalresult: any;
  userkeyword: string = '';
  page: number = 1;
  noOfRows = 2;

  onSearch: boolean = false;
  constructor(
    public readonly jobService: JobService,
    public readonly router: Router,
    private activatedRoute: ActivatedRoute,
    private activeroute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {

    this.activeroute.queryParams.subscribe((params: any) => {
      this.fill = params.data;
      params = {
        keyword: this.fill
      }
      this.jobService.searchJobs(params).subscribe(
        (response: any) => {
          this.testModel.recentJobs = response.data;
          this.testModel.recentJobs.paginator = this.paginator;
          console.log(response.data)
        },
        (error) => {
        })
    })
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
    let lastIndex = this.testModel.recentJobs ? this.testModel.recentJobs.length : null;
    if ((currentPage !== lastPage)) {
      lastIndex = (Number(this.noOfRows) * (Number(currentPage)));
    }
    return lastIndex.toString();
  }

  keJobList() {
    this.router.navigate(["jobs/test"], { queryParams: { data: this.fill } });
    this.onSearch = true;
  };

}
