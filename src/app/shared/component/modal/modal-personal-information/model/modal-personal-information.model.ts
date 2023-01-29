import { FormControl, FormGroup, Validators } from "@angular/forms";

export class ModalPersonalModel {

    profileModelForm = new FormGroup(
        {
            jobseekerId: new FormControl(0, [Validators.required]),
            jobseekerFirstName: new FormControl('', [Validators.required]),
            jobseekerLastName: new FormControl('', [Validators.required]),
            countryId: new FormControl('', [Validators.required]),
            cityId: new FormControl('', [Validators.required]),
            jobseekerPhone: new FormControl('', [Validators.required]),
            jobseekingStatus: new FormControl('', [Validators.required]),
            jobseekerProfession: new FormControl('', [Validators.required]),
            jobseekerPortfolio: new FormControl('', [Validators.required]),
            jobseekerFacebook: new FormControl('', [Validators.required]),
            jobseekerTwitter: new FormControl('', [Validators.required]),
            jobseekerInstagram: new FormControl('', [Validators.required]),
            jobseekerLinkedin: new FormControl('', [Validators.required]),
        });
    
    allCountry: any = [];
    allCity: any = [];
    userProfile: any = [];
    skills: any = [];
    addSkill(skill: any) {
    }
    removeSkill(skill: any) {
    }
}