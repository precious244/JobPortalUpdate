import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AddSalaryService } from 'src/app/services/add-salary/add-salary.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ProfileService } from 'src/app/services/profile/profile.service';
import { UploadFileService } from 'src/app/services/upload-cv/upload-file.service';
import { ModalPersonalModel } from './model/modal-personal-information.model';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-modal-personal-information',
  templateUrl: './modal-personal-information.component.html',
  styleUrls: ['./modal-personal-information.component.scss']
})
export class ModalPersonalInformationComponent implements OnInit {

  @Input() data: any;
  @Input() file: any;
  @Input() saveCv: any;
  @Input() saveImage: any;
  @Input() resetFileUploader: any;
  @Input() closeModal: any;
  fileName = '';
  file_error: any;
  selectedFile: File = null as any;
  selectedFileName = '';
  invisible: boolean = true;

  status = "Change File"
  available = "display: true;"
  notAvailable = "display: none;"
  
  modalPersonalModel = new ModalPersonalModel();
  profile: any = {};
  id: any;
  userData: any = {};
  isUploaded: unknown;
  allCountry: any = [];
  imageUrl: any
  submitted: boolean = false;
  isUpload: unknown;
  onUpload: unknown;

  stateInfo: any[] = [];
  countryInfo: any[] = [];
  cityInfo: any[] = [];
  selected: any;
  faCoffee = faCoffee;
  roleData2 = [];

  constructor(
    public activeModal: NgbActiveModal,
    public readonly authService: AuthService,
    public readonly profileService: ProfileService,
    public readonly router: Router,
    public readonly uploadCvService: UploadFileService,
    private readonly salaryService: AddSalaryService,
  ) { }

  ngOnInit(): void {
    if (this.authService.isLogin()) {
      this.userData = this.authService.loadUserData()
      console.log(this.authService.loadUserData())
    }
    const param = {
      jobseekerId: this.data.jobseekerId
    }
    this.profileService.getUserProfile(param).subscribe(
      (response: any) => {
        this.modalPersonalModel.userProfile = response.data;
        this.profile = this.modalPersonalModel.userProfile;
        this.modalPersonalModel.skills = response.data.skills;
      })
      this.getCountries();
    }

getCountries(){
  this.profileService.getCountryList().subscribe(
    (response) => {
      this.modalPersonalModel.allCountry = response.data;
  })}

onChangeCountry(countryId:any) {
    this.modalPersonalModel.allCity = this.modalPersonalModel.allCountry[countryId];
    console.log(countryId)
    this.profileService.getCityList(countryId).subscribe(
      (response:any)=>{
        this.modalPersonalModel.allCity = response.data
      }
    )
  }

  uploadPhoto(event: any) {
    this.file.setValue(event.target.files[0]);
    this.selectedFile = event.target.files[0];
    if (event.target.files) {
      var reader = new FileReader()
      reader.readAsDataURL(event.target.files[0])
      reader.onload = () => {
          this.file = reader.result
      }
    }
    this.fileName = event.target.files[0].name;
    let fileSize = 0;
    let ext = null;
    fileSize = (Math.round(this.selectedFile.size / 1024 * 100));
    if (fileSize >= 100024) {
      this.invisible = true;
    }else {
      ext = this.fileName.split('?')[0].split('.').pop();
      if (ext == 'jpg' ||  ext == 'JPG' || ext == 'jpG' || ext == 'jPg' ||
          ext == 'jPG' || ext == 'JPg' || ext == 'JpG' || ext == 'Jpg'||
          ext == 'png' || ext == 'PNG' || ext == 'pnG' || ext == 'pNg' ||
          ext == 'pNG' || ext == 'PNg' || ext == 'PnG' || ext == 'Png' ||
          ext == 'jpeg' || ext == 'Jpeg' || ext == 'jPeg' || ext == 'jpEg' ||
          ext == 'jpeG' || ext == 'JPeg' || ext == 'JpEg' || ext == 'JpeG' ||
          ext == 'jPEg' || ext == 'jPeG'  || ext == 'jpEG'  || ext == 'jPEG'  ||
          ext == 'JPeG'  || ext == 'JPEg' || ext == 'JpEG' || ext == 'JPEG' ){
      this.invisible = false;
      }
    }
  }

  resetPhoto() { 
    this.resetFileUploader()
    this.activeModal.dismiss('Cross click');
    window.location.reload();
  }

  upload() {
    this.saveImage()
    this.activeModal.dismiss('Cross click');
    window.location.reload();
  }

  updateDataProfile() {
    this.saveImage()
    this.modalPersonalModel.profileModelForm.controls['jobseekerId'].setValue(this.userData.jobseekerId);
    console.log(this.modalPersonalModel.profileModelForm.value);
    this.profileService.editProfile(this.modalPersonalModel.profileModelForm.value).subscribe(
        (response: any) => {
          this.profileService.editProfile(response.data)
          this.submitted = true
          this.activeModal.dismiss('Cross click')
          window.location.reload()
        })
    this.activeModal.dismiss('Cross click');
    window.location.reload();
  }

  changeEmail() {
    this.router.navigate(["settings/:id"]);
  }

  close() {
    this.close
  }
}
