import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from 'src/app/services/profile/profile.service';
import { SettingsModel } from './model/settings.model';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  settingsModel = new SettingsModel();


  profile: any;
  id: any;
  hide = true;
  phoneForm = new FormGroup({
    phone: new FormControl('', Validators.required)

  });

  constructor(
    public readonly activatedRoute: ActivatedRoute,
    public readonly profileService: ProfileService,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((data: any) => {
      let id = data.params.id,
        params = {
          jobseekerId: id
        }
      console.log(data.params)
      this.profileService.getUserProfile(params).subscribe(
        (response: any) => {
          this.settingsModel.userProfile = response.data;
          this.profile = this.settingsModel.userProfile;
          console.log(this.settingsModel.userProfile)
        },
        (error) => {
        })
    })
  }

}
