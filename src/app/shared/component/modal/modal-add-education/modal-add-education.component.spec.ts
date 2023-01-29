import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddEducationComponent } from './modal-add-education.component';

describe('ModalAddEducationComponent', () => {
  let component: ModalAddEducationComponent;
  let fixture: ComponentFixture<ModalAddEducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAddEducationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAddEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
