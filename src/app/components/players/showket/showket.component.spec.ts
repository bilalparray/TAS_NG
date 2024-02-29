import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowketComponent } from './showket.component';

describe('ShowketComponent', () => {
  let component: ShowketComponent;
  let fixture: ComponentFixture<ShowketComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowketComponent]
    });
    fixture = TestBed.createComponent(ShowketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
