import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddSalaryComponent } from './modal-add-salary.component';

describe('ModalAddSalaryComponent', () => {
  let component: ModalAddSalaryComponent;
  let fixture: ComponentFixture<ModalAddSalaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAddSalaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAddSalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
