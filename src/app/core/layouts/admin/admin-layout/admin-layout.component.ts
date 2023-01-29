import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { arrow } from '@popperjs/core';
import { ProfileModel } from 'src/app/module/admin/profile/model/profile.model';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LoaderService } from 'src/app/services/loader/loader.service';
import { ProfileService } from 'src/app/services/profile/profile.service';

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
    // this.activatedRoute.paramMap.subscribe((data: any) => {
    //   let id = data.params.id,
    //     params = {
    //       jobseekerId: id,
    //     }
    //   this.profileService.getUserProfile(params).subscribe(
    //     (response: any) => {
    //       this.profileModel.userProfile = response.data;
    //       this.profile = this.profileModel.userProfile;
    //     })
    //   })
    }

  logout() {
    this.authService.logOut()
  }

  opened = false;

}
