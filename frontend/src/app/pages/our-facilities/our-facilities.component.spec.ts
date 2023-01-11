import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurFacilitiesComponent } from './our-facilities.component';

describe('OurFacilitiesComponent', () => {
  let component: OurFacilitiesComponent;
  let fixture: ComponentFixture<OurFacilitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurFacilitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurFacilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
