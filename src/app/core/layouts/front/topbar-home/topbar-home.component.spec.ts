import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopbarHomeComponent } from './topbar-home.component';

describe('TopbarHomeComponent', () => {
  let component: TopbarHomeComponent;
  let fixture: ComponentFixture<TopbarHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopbarHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopbarHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
