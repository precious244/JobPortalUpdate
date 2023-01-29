import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobService } from 'src/app/services/job/job.service';
import { SearchModel } from './model/search.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchModel = new SearchModel();

  config: any;

  fill = '';
  result: string = '';
  page: number = 1;
  noOfRows = 2;
  onSearch: boolean = true;

  constructor(
    public readonly jobService: JobService,
    public readonly router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params: any) => {
      this.fill = params.data;
      params = {
        keyword: this.fill
      }
      this.jobService.searchJobs(params).subscribe(
        (response: any) => {
          this.searchModel.recentJobs = response.data;
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
    let lastIndex = this.searchModel.recentJobs ? this.searchModel.recentJobs.length : null;
    if ((currentPage !== lastPage)) {
      lastIndex = (Number(this.noOfRows) * (Number(currentPage)));
    }
    return lastIndex.toString();
  }

  keJobSearch() {
    this.router.navigate(["jobs/search"], { queryParams: { data: this.fill } }).then(() => {
      window.location.reload();
    });
    this.onSearch = true;
  };

}
