import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuminariesMapViewerComponent } from './luminaries-map-viewer.component';

describe('LuminariesMapViewerComponent', () => {
  let component: LuminariesMapViewerComponent;
  let fixture: ComponentFixture<LuminariesMapViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LuminariesMapViewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LuminariesMapViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
