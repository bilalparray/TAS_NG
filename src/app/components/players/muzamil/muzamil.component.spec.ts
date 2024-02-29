import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuzamilComponent } from './muzamil.component';

describe('MuzamilComponent', () => {
  let component: MuzamilComponent;
  let fixture: ComponentFixture<MuzamilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MuzamilComponent]
    });
    fixture = TestBed.createComponent(MuzamilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
