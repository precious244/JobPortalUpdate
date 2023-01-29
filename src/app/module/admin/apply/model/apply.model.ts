import { FormControl, FormGroup, Validators } from "@angular/forms";

export class ApplyModel {

    userProfile: any = [];

    applyModelForm = new FormGroup(
        {
            jobId: new FormControl(''),
            jobseekerId: new FormControl(0, [Validators.required]),
            jobseekerResume: new FormControl('', [Validators.required]),
            jobName: new FormControl(''),
            recruiterCompany: new FormControl(''),
        }
    );

    applyForm = new FormGroup(
        {
            jobseekerId: new FormControl(''),
            jobId: new FormControl('')
        }
    );
}