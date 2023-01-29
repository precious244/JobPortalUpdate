import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopbarJobsComponent } from './topbar-jobs.component';

describe('TopbarJobsComponent', () => {
  let component: TopbarJobsComponent;
  let fixture: ComponentFixture<TopbarJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopbarJobsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopbarJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
