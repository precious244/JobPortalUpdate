import { FormControl, FormGroup, Validators } from "@angular/forms";
export class VerifModel {
    formGroupRegister = new FormGroup({
        jobseekerEmail: new FormControl("", [Validators.required, Validators.email]),
    })
}