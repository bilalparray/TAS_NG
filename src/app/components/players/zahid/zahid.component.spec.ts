import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZahidComponent } from './zahid.component';

describe('ZahidComponent', () => {
  let component: ZahidComponent;
  let fixture: ComponentFixture<ZahidComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ZahidComponent]
    });
    fixture = TestBed.createComponent(ZahidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
