import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobAppliedDetailComponent } from './job-applied-detail.component';

describe('JobAppliedDetailComponent', () => {
  let component: JobAppliedDetailComponent;
  let fixture: ComponentFixture<JobAppliedDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobAppliedDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobAppliedDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
