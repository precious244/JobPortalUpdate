import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ConfirmPasswordValidator } from './confirm-password.validator';

export class RegisterModel {
    formGroupRegister = new FormGroup({
        jobseekerFirstName: new FormControl("", Validators.required),
        jobseekerLastName: new FormControl("", Validators.required),
        jobseekerEmail: new FormControl("", [Validators.required, Validators.email]),
        jobseekerPassword: new FormControl("", [Validators.required, Validators.minLength(8)]),
        jobseekerConfirmPassword: new FormControl("", [Validators.required, Validators.minLength(8)]),
    },
        [ConfirmPasswordValidator.MatchValidator('jobseekerPassword', 'jobseekerConfirmPassword')],
    );

    passwordMatchError() {
        return (
            this.formGroupRegister.getError('mismatch') &&
            this.formGroupRegister.get('jobseekerConfirmPassword')?.touched
        );
    }

    responseRegister: any = {
    }

    isInvalidRegister() {
        if (typeof this.responseRegister.code !== 'undefined') {
            if (this.responseRegister.code !== 200) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    }

}