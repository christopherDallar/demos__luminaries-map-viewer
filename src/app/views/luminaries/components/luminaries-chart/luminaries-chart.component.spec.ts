import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuminariesChartComponent } from './luminaries-chart.component';

describe('LuminariesChartComponent', () => {
  let component: LuminariesChartComponent;
  let fixture: ComponentFixture<LuminariesChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LuminariesChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LuminariesChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
