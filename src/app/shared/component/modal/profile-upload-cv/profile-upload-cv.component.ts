import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AddSalaryService } from 'src/app/services/add-salary/add-salary.service';

@Component({
  selector: 'app-profile-upload-cv',
  templateUrl: './profile-upload-cv.component.html',
  styleUrls: ['./profile-upload-cv.component.scss']
})
export class ProfileUploadCvComponent {
  @Input() file: any;
  @Input() saveCv: any;
  @Input() putApplied: any;
  @Input() closeUploadCv: any;
  fileName = '';
  file_error: any;
  selectedFile: File = null as any;
  selectedFileName = '';
  invisible: boolean = true;

  url = "assets/uploadcv.png"
  url2 = "assets/pdf2.png"
  status = "Upload CV"
  status2 = "Change File"
  btnBg = "form-control btn btn-primary rounded-pill btnMuncul mt-2"
  btnBg2 = "form-control btn btn-outline-primary rounded-pill btnMuncul mt-4"
  available = "display: true;"
  notAvailable = "display: none;"
  submitted: boolean = false;

  constructor(
    public readonly router: Router,
    public activeModal: NgbActiveModal,
    private readonly salaryService: AddSalaryService,
  ) { }

  ngOnInit(): void {
  }

  onChange(event: any) {
    this.file_error = "";
    this.file.setValue(event.target.files[0]);
    this.selectedFile = event.target.files[0];
    if (event.target.files) {
      var reader = new FileReader()
      reader.readAsDataURL(event.target.files[0])
      reader.onload = (event: any) => {
        this.url = this.url2
        this.status = this.status2
        this.btnBg = this.btnBg2
        this.available = this.notAvailable
      }
    }
    this.fileName = event.target.files[0].name;
    let fileSize = 0;
    let ext = null;
    fileSize = (Math.round(this.selectedFile.size / 10024));
    if (fileSize >= 10024) {
      this.invisible = true;
      this.file_error = "File size limited to 10mb"
    } else {
      ext = this.fileName.split('?')[0].split('.').pop();
      if (ext == 'pdf' || ext == 'PDF'|| ext == 'doc' || ext == 'DOC' || ext == 'docx' || ext == 'DOCX') {
        this.invisible = false;
      } else {
        this.invisible = true;
        this.file_error = "please enter valid pdf file";
      }
    }
  }

  upload() {
    this.saveCv()
    this.activeModal.dismiss('Cross click');
    // window.location.reload();
  }

  close() {
    this.close
  }

}

