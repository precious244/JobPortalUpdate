import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPersonalInformationComponent } from './modal-personal-information.component';

describe('ModalPersonalInformationComponent', () => {
  let component: ModalPersonalInformationComponent;
  let fixture: ComponentFixture<ModalPersonalInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalPersonalInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalPersonalInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
