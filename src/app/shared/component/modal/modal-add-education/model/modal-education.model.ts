import { FormControl, FormGroup, Validators } from "@angular/forms";

export class ModalEducationModel {
    formGroupAddEducation = new FormGroup({
        jobseekerId: new FormControl(""),
        educationId: new FormControl(""),
        schoolUniversity: new FormControl(""),
        degreeName: new FormControl(""),
        majorName: new FormControl(""),
        startPeriodMonth: new FormControl(""),
        endPeriodMonth: new FormControl(""),
        startPeriodYear: new FormControl(""),
        endPeriodYear: new FormControl(""),
        gradePointMax: new FormControl(""),
        educationDescription: new FormControl(""),
        gradePoint: new FormControl(""),
    });

    allUniversity: any = [];
    allDegree: any = [];
    allMajor: any = [];
    dataEducation: any = [];
}