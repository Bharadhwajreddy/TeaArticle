import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockchainbloomComponent } from './blockchainbloom.component';

describe('BlockchainbloomComponent', () => {
  let component: BlockchainbloomComponent;
  let fixture: ComponentFixture<BlockchainbloomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockchainbloomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockchainbloomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
