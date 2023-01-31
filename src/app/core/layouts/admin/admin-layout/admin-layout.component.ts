import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { arrow } from '@popperjs/core';
import { ProfileModel } from 'src/app/module/admin/profile/model/profile.model';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LoaderService } from 'src/app/services/loader/loader.service';
import { ProfileService } from 'src/app/services/profile/profile.service';
import { AdminLayoutModel } from './model/admin-layout.model';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {

  jobs = new Array<any>();
  login = new Array<any>();
  userData: any = {};
  profile: any = {};
  status: boolean = false;
  profileModel = new ProfileModel();
  adminLayoutModel = new AdminLayoutModel();

  constructor(
    public readonly authService: AuthService,
    public readonly loaderService: LoaderService,
    public readonly profileService: ProfileService,
    public readonly activatedRoute: ActivatedRoute,
  ) {
    loaderService.isLoading.subscribe(
      (status) => {
        this.status = status;
      }
    )
  }

  ngOnInit(): void {
    if (this.authService.isLogin()) {
      this.userData = this.authService.loadUserData()
    }
    this.adminLayoutModel.uploadCVForm.controls['jobseekerId'].setValue(this.userData.jobseekerId);
    this.profileService.getUserProfile(this.adminLayoutModel.uploadCVForm.value).subscribe(
      (response: any) => {
        this.adminLayoutModel.userProfile = response.data;
        this.profile = this.adminLayoutModel.userProfile;
        console.log(this.profile)
      },
      (error) => {
      })
  }

  logout() {
    this.authService.logOut()
  }

  opened = false;

}
