import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntertbloomComponent } from './entertbloom.component';

describe('EntertbloomComponent', () => {
  let component: EntertbloomComponent;
  let fixture: ComponentFixture<EntertbloomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntertbloomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntertbloomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
