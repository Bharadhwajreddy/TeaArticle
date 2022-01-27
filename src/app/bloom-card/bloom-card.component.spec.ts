import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloomCardComponent } from './bloom-card.component';

describe('BloomCardComponent', () => {
  let component: BloomCardComponent;
  let fixture: ComponentFixture<BloomCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloomCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BloomCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
