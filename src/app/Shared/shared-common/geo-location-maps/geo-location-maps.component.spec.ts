import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoLocationMapsComponent } from './geo-location-maps.component';

describe('GeoLocationMapsComponent', () => {
  let component: GeoLocationMapsComponent;
  let fixture: ComponentFixture<GeoLocationMapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeoLocationMapsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoLocationMapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
