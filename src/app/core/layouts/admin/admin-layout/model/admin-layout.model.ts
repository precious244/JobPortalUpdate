import { FormControl, FormGroup, Validators } from "@angular/forms";

export class AdminLayoutModel {

    userProfile: any = [];

    uploadCVForm = new FormGroup(
        {
            jobseekerId: new FormControl(0, [Validators.required]),
        }
    );
}