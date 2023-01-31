import { FormControl, FormGroup, Validators } from "@angular/forms";

export class LoginModel {
    formGroupLogin = new FormGroup({
        jobseekerEmail: new FormControl("", [Validators.required, Validators.email]),
        jobseekerPassword: new FormControl("", [Validators.required, Validators.minLength(8)]),
        jobseekerConfirmPassword: new FormControl("", [Validators.required, Validators.minLength(8)]),
        token: new FormControl("", [Validators.required])
    });

    responseLogin: any = {
    }

    isInvalidLogin() {
        if (typeof this.responseLogin.code !== 'undefined') {
            if (this.responseLogin.code !== 200) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    }
}