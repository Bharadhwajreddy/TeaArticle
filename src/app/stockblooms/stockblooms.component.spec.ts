import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockbloomsComponent } from './stockblooms.component';

describe('StockbloomsComponent', () => {
  let component: StockbloomsComponent;
  let fixture: ComponentFixture<StockbloomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockbloomsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockbloomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
