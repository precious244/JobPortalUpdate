import { Component, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { VerifyEmailService } from 'src/app/services/verify-email/verify-email.service';
import { VerifModel } from '../verif/model/verif.model';

@Component({
  selector: 'app-verify-again',
  templateUrl: './verify-again.component.html',
  styleUrls: ['./verify-again.component.scss']
})
export class VerifyAgainComponent implements OnInit {

  verifModel = new VerifModel();
  data: any;
  submitted: boolean = false;
  show = true;
  isLoading = false;


  toggleLoading = () => {
    this.isLoading = true;
    //Faking an API call
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  };

  constructor(
    public readonly verifyEmailService: VerifyEmailService,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
  }

  get f(): { [key: string]: AbstractControl } {
    return this.verifModel.formGroupRegister.controls;
  }

  sendingEmailAgain(): void {
    if (this.verifModel.formGroupRegister.valid) {
      this.verifyEmailService.sendVerificationMail(this.verifModel.formGroupRegister.value).subscribe(
        (response) => {
          this.submitted = true;
          this.verifyEmailService.sendVerificationMail(response.data);
          this.toastr.success('Email has been send!', 'Success');
        },
        (error) => {
        }
      )
    } else {
      this.toastr.error('', 'Error');
    }
  }
}
