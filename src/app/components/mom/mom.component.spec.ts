import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MomComponent } from './mom.component';

describe('MomComponent', () => {
  let component: MomComponent;
  let fixture: ComponentFixture<MomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MomComponent]
    });
    fixture = TestBed.createComponent(MomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
