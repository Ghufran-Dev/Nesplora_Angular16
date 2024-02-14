import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientsCardsComponent } from './patients-cards.component';

describe('PatientsCardsComponent', () => {
  let component: PatientsCardsComponent;
  let fixture: ComponentFixture<PatientsCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatientsCardsComponent]
    });
    fixture = TestBed.createComponent(PatientsCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
