import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurWhyComponent } from './our-why.component';

describe('OurWhyComponent', () => {
  let component: OurWhyComponent;
  let fixture: ComponentFixture<OurWhyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurWhyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurWhyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
