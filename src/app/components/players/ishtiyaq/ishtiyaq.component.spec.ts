import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IshtiyaqComponent } from './ishtiyaq.component';

describe('IshtiyaqComponent', () => {
  let component: IshtiyaqComponent;
  let fixture: ComponentFixture<IshtiyaqComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IshtiyaqComponent]
    });
    fixture = TestBed.createComponent(IshtiyaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
