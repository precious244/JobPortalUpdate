import { FormControl, FormGroup, Validators } from "@angular/forms";

export class ProfileModel {

    userProfile: any = [];
    education: any = [];
    experience: any = [];
    salary: any = {};
    skills: any = [];
    allUniversity: any = [];
    allDegree: any = [];
    addSkill(skill: any) {
    }
    removeSkill(skill: any) {
    }

    uploadCVForm = new FormGroup(
        {
            jobseekerId: new FormControl(0, [Validators.required]),
            jobseekerResume: new FormControl('', [Validators.required]),
        }
    );

    uploadImageForm = new FormGroup(
        {
            jobseekerId: new FormControl(0, [Validators.required]),
            jobseekerImage: new FormControl('', [Validators.required]),
        }
    );

    data = [];
    editSkillModelForm = new FormGroup(
        {
            jobseekerId: new FormControl(0, [Validators.required]),
            skillId: new FormControl(this.data, [Validators.required]),
        }
    );

}