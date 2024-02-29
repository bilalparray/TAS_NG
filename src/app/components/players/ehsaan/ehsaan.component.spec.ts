import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EhsaanComponent } from './ehsaan.component';

describe('EhsaanComponent', () => {
  let component: EhsaanComponent;
  let fixture: ComponentFixture<EhsaanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EhsaanComponent]
    });
    fixture = TestBed.createComponent(EhsaanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
