import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingsecondComponent } from './bookingsecond.component';

describe('BookingsecondComponent', () => {
  let component: BookingsecondComponent;
  let fixture: ComponentFixture<BookingsecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingsecondComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingsecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
