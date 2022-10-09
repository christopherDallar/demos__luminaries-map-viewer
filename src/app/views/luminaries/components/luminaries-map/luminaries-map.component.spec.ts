import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuminariesMapComponent } from './luminaries-map.component';

describe('LuminariesMapComponent', () => {
  let component: LuminariesMapComponent;
  let fixture: ComponentFixture<LuminariesMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LuminariesMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LuminariesMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
