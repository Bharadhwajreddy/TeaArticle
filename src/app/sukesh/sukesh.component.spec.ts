import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SukeshComponent } from './sukesh.component';

describe('SukeshComponent', () => {
  let component: SukeshComponent;
  let fixture: ComponentFixture<SukeshComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SukeshComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SukeshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
