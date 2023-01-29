import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ConfirmPasswordValidator } from "../../front/sign-up/model/confirm-password.validator";

export class ChangePasswordModel {
    data: any;
    formGroupChangePassword = new FormGroup({
        email: new FormControl("", [Validators.required, Validators.email]),
        password: new FormControl("", [Validators.required, Validators.minLength(8)]),
        confirmPassword: new FormControl("", [Validators.required, Validators.minLength(8)]),
    },
        [ConfirmPasswordValidator.MatchValidator('password', 'confirmPassword')],
    );

    passwordMatchError() {
        return (
            this.formGroupChangePassword.getError('mismatch') &&
            this.formGroupChangePassword.get('confirmPassword')?.touched
        );
    }

    responseReset: any = {
    }

    isInvalidChangePassword() {
        if (typeof this.responseReset.code !== 'undefined') {
            if (this.responseReset.code !== 200) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    }

}