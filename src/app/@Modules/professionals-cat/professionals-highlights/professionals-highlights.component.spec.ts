import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalsHighlightsComponent } from './professionals-highlights.component';

describe('ProfessionalsHighlightsComponent', () => {
  let component: ProfessionalsHighlightsComponent;
  let fixture: ComponentFixture<ProfessionalsHighlightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessionalsHighlightsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalsHighlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
