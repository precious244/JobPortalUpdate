import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileUploadCvComponent } from './profile-upload-cv.component';

describe('ProfileUploadCvComponent', () => {
  let component: ProfileUploadCvComponent;
  let fixture: ComponentFixture<ProfileUploadCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileUploadCvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileUploadCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
