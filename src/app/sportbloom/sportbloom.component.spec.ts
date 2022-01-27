import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportbloomComponent } from './sportbloom.component';

describe('SportbloomComponent', () => {
  let component: SportbloomComponent;
  let fixture: ComponentFixture<SportbloomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportbloomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SportbloomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
