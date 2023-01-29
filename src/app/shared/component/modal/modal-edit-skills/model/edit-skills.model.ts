import { FormControl, FormGroup, Validators } from "@angular/forms";

export class EditSkillsModel {
    userProfile: any = [];
    userSkills: any = [];

    allSkills: any = [];
    skills: any = [];

    addSkill(skill: any) {
    }

    removeSkill(skill: any) {
    }

    editExperience = new FormGroup({
        jobseekerId: new FormControl("")
    })

    data = [];
    editSkillModelForm = new FormGroup(
        {
            jobseekerId: new FormControl(0, [Validators.required]),
            skillId: new FormControl(this.data, [Validators.required]),
        }
    );
}