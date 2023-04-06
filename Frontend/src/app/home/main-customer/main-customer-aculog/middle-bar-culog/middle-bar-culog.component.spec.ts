import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddleBarCulogComponent } from './middle-bar-culog.component';

describe('MiddleBarCulogComponent', () => {
  let component: MiddleBarCulogComponent;
  let fixture: ComponentFixture<MiddleBarCulogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiddleBarCulogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiddleBarCulogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
