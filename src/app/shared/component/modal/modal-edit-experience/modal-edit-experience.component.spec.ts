import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditExperienceComponent } from './modal-edit-experience.component';

describe('ModalEditExperienceComponent', () => {
  let component: ModalEditExperienceComponent;
  let fixture: ComponentFixture<ModalEditExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEditExperienceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEditExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
