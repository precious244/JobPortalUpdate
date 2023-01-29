import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RegisterService } from 'src/app/services/register/register.service';
import { VerifyEmailService } from 'src/app/services/verify-email/verify-email.service';
import { RegisterModel } from '../front/sign-up/model/register.model';
import { VerifModel } from './model/verif.model';

@Component({
  selector: 'app-verif',
  templateUrl: './verif.component.html',
  styleUrls: ['./verif.component.scss']
})
export class VerifComponent implements OnInit {

  verifModel = new VerifModel();
  data: any;
  submitted: boolean = false;
  registerModel = new RegisterModel()

  constructor(
    public readonly registerService: RegisterService,
    public readonly verifyEmailService: VerifyEmailService,
    private activatedRoute: ActivatedRoute,
    private readonly router: Router,
    private readonly modalService: NgbModal,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params: any) => {
      console.log(params)
      this.registerModel.formGroupRegister.controls['jobseekerEmail'] = params.data
    })
  }

  verifyEmail() {
    this.verifyEmailService.sendVerificationMail(this.verifModel.formGroupRegister.value).subscribe(
      (response) => {
        this.verifyEmailService.sendVerificationMail(response.data);
        this.submitted = true;
        alert("Success")
      },
      (error) => {
        // this.registerModel.responseRegister = error.error;
      }
    )
  }

  sendingEmail() {
    this.router.navigate(['verify-again'])
  }

}
