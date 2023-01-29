import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditEducationComponent } from './modal-edit-education.component';

describe('ModalEditEducationComponent', () => {
  let component: ModalEditEducationComponent;
  let fixture: ComponentFixture<ModalEditEducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEditEducationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEditEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
