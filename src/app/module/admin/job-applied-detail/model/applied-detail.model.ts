import { FormControl, FormGroup } from "@angular/forms";

export class AppliedDetailModel {

    recentJobs: any = [];
    singleJobs: any;
    data: any = {};
    detailedForm = new FormGroup(
        {
            jobseekerId: new FormControl(''),
            jobId: new FormControl('')
        }
    )
}