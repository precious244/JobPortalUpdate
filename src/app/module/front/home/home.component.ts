import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { JobService } from 'src/app/services/job/job.service';
import { HomeModel } from './model/home.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  fill = '';
  userData: any = {};
  onSearch: boolean = false;

  homeModel = new HomeModel();

  constructor(
    private readonly router: Router,
    public readonly jobService: JobService,
    public readonly authService: AuthService,
  ) { }

  ngOnInit(): void {
    if (this.authService.isLogin()) {
      this.userData = this.authService.loadUserData()
    }

    this.jobService.getRecentJob().subscribe(
      (response) => {
        this.homeModel.recentJobs = response.data;
      },
      (error) => {

      }
    );
  }

  submitLogin() {
    this.router.navigate(["login"]);
  };

  keJobList() {
    this.router.navigate(["jobs/search"], { queryParams: { data: this.fill } });
  };

  keJobSearch() {
    this.router.navigate(["main/job-search"], { queryParams: { data: this.fill } });
    this.onSearch = true;
  };

}
