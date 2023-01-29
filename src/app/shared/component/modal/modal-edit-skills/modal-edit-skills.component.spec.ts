import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditSkillsComponent } from './modal-edit-skills.component';

describe('ModalEditSkillsComponent', () => {
  let component: ModalEditSkillsComponent;
  let fixture: ComponentFixture<ModalEditSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEditSkillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEditSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
