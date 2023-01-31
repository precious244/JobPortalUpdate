import { Component, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/services/login/login.service';
import { ForgotPasswordModel } from './model/forgot-password.model';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  data: any;
  submitted: boolean = false;
  forgotPasswordModel = new ForgotPasswordModel();
  isLoading = false;

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
    private readonly router: Router
  ) { }

  ngOnInit(): void {

  }

  get f(): { [key: string]: AbstractControl } {
    return this.forgotPasswordModel.formGroupForgotPassword.controls;
  }

  onSendingEmail(): void {
    if (this.forgotPasswordModel.formGroupForgotPassword.valid) {
      this.loginService.forgotPassword(this.forgotPasswordModel.formGroupForgotPassword.value).subscribe(
        (response) => {
          this.submitted = true;
          this.loginService.forgotPassword(response.data);
          this.toastr.success('Check your e-mail to change the password', 'Success');
        },
        (error) => {
        }
      )
    } else {
      this.toastr.error('', 'Error');
    }
  }

}
