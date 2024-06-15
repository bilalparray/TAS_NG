import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BattingOrderComponent } from './batting-order.component';

describe('BattingOrderComponent', () => {
  let component: BattingOrderComponent;
  let fixture: ComponentFixture<BattingOrderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BattingOrderComponent]
    });
    fixture = TestBed.createComponent(BattingOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
