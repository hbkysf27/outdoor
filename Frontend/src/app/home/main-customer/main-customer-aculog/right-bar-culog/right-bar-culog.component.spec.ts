import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightBarCulogComponent } from './right-bar-culog.component';

describe('RightBarCulogComponent', () => {
  let component: RightBarCulogComponent;
  let fixture: ComponentFixture<RightBarCulogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightBarCulogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RightBarCulogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
