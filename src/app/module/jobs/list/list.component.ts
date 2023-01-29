import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobService } from 'src/app/services/job/job.service';
import { ListModel } from './model/list.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  listModel = new ListModel();
  config: any;

  fill = '';

  loader = true;
  page: number = 1;
  noOfRows = 2;
  onSearch: boolean = false;

  constructor(
    public readonly jobService: JobService,
    public readonly router: Router,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {

    this.jobService.getRecentJob().subscribe(
      (response) => {
        this.listModel.recentJobs = response.data;
      },
      (error) => {

      }
    );
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

  keJobSearch() {
    this.router.navigate(["jobs/search"], { queryParams: { data: this.fill } });
  };
}
