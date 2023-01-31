import { FormControl, FormGroup, Validators } from "@angular/forms";
import { JobDetailRoutingModule } from "src/app/module/admin/job-detail/job-detail-routing.module";

export class EditExperienceModel {
    allJobType: any = [];
    allJobFunction: any = [];
    allCompany:any=[];
    allCountry: any = [];
    allCity: any = [];
    userProfile: any = [];
    dataExperience: any = [];
    experience: any = [];

    editExperience = new FormGroup({
        jobseekerId: new FormControl(""),
        experienceId: new FormControl(""),
        jobTitle: new FormControl(""),
        jobFunctionId: new FormControl(""),
        companyName: new FormControl(""),
        jobTypeId: new FormControl(""),
        countryId: new FormControl(""),
        cityId: new FormControl(""),
        startPeriodMonth: new FormControl(""),
        endPeriodMonth: new FormControl(""),
        startPeriodYear: new FormControl(""),
        endPeriodYear: new FormControl(""),
        isPresent: new FormControl(""),
        jobDescription: new FormControl("", Validators.maxLength(2000)),
    });
}