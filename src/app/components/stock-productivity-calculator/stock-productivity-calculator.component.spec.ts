import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockProductivityCalculatorComponent } from './stock-productivity-calculator.component';

describe('StockProductivityCalculatorComponent', () => {
  let component: StockProductivityCalculatorComponent;
  let fixture: ComponentFixture<StockProductivityCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockProductivityCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockProductivityCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
