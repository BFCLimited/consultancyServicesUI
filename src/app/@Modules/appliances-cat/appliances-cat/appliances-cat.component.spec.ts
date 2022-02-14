import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppliancesCatComponent } from './appliances-cat.component';

describe('AppliancesCatComponent', () => {
  let component: AppliancesCatComponent;
  let fixture: ComponentFixture<AppliancesCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppliancesCatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppliancesCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
