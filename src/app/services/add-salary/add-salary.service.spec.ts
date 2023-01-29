import { TestBed } from '@angular/core/testing';

import { AddSalaryService } from './add-salary.service';

describe('AddSalaryService', () => {
  let service: AddSalaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddSalaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
