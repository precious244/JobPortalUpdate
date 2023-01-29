import { FormControl, FormGroup, Validators } from "@angular/forms";

export class ForgotPasswordModel {
    formGroupForgotPassword = new FormGroup({
        jobseekerEmail: new FormControl("", [Validators.required, Validators.email])
    });

    data: any;

}