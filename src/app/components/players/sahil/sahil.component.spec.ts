import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SahilComponent } from './sahil.component';

describe('SahilComponent', () => {
  let component: SahilComponent;
  let fixture: ComponentFixture<SahilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SahilComponent]
    });
    fixture = TestBed.createComponent(SahilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
