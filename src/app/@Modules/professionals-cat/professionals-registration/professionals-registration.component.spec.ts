import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalsRegistrationComponent } from './professionals-registration.component';

describe('ProfessionalsRegistrationComponent', () => {
  let component: ProfessionalsRegistrationComponent;
  let fixture: ComponentFixture<ProfessionalsRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessionalsRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalsRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
