import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalUploadCvComponent } from './modal-upload-cv.component';

describe('ModalUploadCvComponent', () => {
  let component: ModalUploadCvComponent;
  let fixture: ComponentFixture<ModalUploadCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalUploadCvComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ModalUploadCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
