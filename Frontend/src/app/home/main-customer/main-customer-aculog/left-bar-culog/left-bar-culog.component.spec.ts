import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftBarCulogComponent } from './left-bar-culog.component';

describe('LeftBarCulogComponent', () => {
  let component: LeftBarCulogComponent;
  let fixture: ComponentFixture<LeftBarCulogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftBarCulogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeftBarCulogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
