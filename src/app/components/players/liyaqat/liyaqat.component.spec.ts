import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiyaqatComponent } from './liyaqat.component';

describe('LiyaqatComponent', () => {
  let component: LiyaqatComponent;
  let fixture: ComponentFixture<LiyaqatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LiyaqatComponent]
    });
    fixture = TestBed.createComponent(LiyaqatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
