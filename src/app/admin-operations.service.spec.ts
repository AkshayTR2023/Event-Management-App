//-------------------------github.com/AkshayTR2023--------------------------//
import { TestBed } from '@angular/core/testing';

import { AdminOperationsService } from './admin-operations.service';

describe('AdminOperationsService', () => {
  let service: AdminOperationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminOperationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
//-------------------------github.com/AkshayTR2023--------------------------//