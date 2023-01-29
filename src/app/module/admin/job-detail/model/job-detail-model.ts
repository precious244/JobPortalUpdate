import { FormControl, FormGroup } from "@angular/forms";

export class JobDetailModel {
    recentJobs: any = [];
    singleJobs: any;

    checkStatus = new FormGroup(
        {
            jobseekerId: new FormControl(''),
            jobId: new FormControl(''),
        }
    );
}