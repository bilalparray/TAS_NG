import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuhailComponent } from './suhail.component';

describe('SuhailComponent', () => {
  let component: SuhailComponent;
  let fixture: ComponentFixture<SuhailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuhailComponent]
    });
    fixture = TestBed.createComponent(SuhailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
