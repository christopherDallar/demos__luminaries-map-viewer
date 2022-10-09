import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolBarGraphicComponent } from './tool-bar-graphic.component';

describe('ToolBarGraphicComponent', () => {
  let component: ToolBarGraphicComponent;
  let fixture: ComponentFixture<ToolBarGraphicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolBarGraphicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolBarGraphicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
