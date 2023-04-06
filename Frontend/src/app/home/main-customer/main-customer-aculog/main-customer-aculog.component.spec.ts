import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCustomerAculogComponent } from './main-customer-aculog.component';

describe('MainCustomerAculogComponent', () => {
  let component: MainCustomerAculogComponent;
  let fixture: ComponentFixture<MainCustomerAculogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainCustomerAculogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainCustomerAculogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
