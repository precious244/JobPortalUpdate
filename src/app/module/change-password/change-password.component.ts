import { Component, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/services/login/login.service';
import { ForgotPasswordModel } from '../forgot-password/model/forgot-password.model';
import { ChangePasswordModel } from './model/change-password.model';
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  data: any;
  changePasswordModel = new ChangePasswordModel();
  forgotPasswordModel = new ForgotPasswordModel();
  isLoading = false;
  submitted: boolean = false;

  toggleLoading = () => {
    this.isLoading = true;

    //Faking an API call
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  };

  constructor(
    private readonly loginService: LoginService,
    private toastr: ToastrService,
    private readonly router: Router,
  ) { }

  ngOnInit(): void {
  }

  get f(): { [key: string]: AbstractControl } {
    return this.changePasswordModel.formGroupChangePassword.controls;
  }

  newPassword() {
    const formData = this.changePasswordModel.formGroupChangePassword.getRawValue();
    const data = {
      ...formData,
      data: this.data
    }
    console.log(data)
    this.loginService.changePassword(this.changePasswordModel.formGroupChangePassword.value).subscribe(
      (response) => {
        this.loginService.saveChangePasswordData(response.data)
        this.submitted = true
        this.router.navigate(['login'])
        this.toastr.success('Your password has been successfully changed. Try to login now.', 'Success')
      },
      (error) => {
      }
    )
  }
}



