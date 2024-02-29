import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwaisComponent } from './owais.component';

describe('OwaisComponent', () => {
  let component: OwaisComponent;
  let fixture: ComponentFixture<OwaisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OwaisComponent]
    });
    fixture = TestBed.createComponent(OwaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
