import { TestBed } from '@angular/core/testing';

import { BattingOrderService } from './batting-order.service';

describe('BattingOrderService', () => {
  let service: BattingOrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BattingOrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
