import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolBarFormFieldComponent } from './tool-bar-form-field.component';

describe('ToolBarFormFieldComponent', () => {
  let component: ToolBarFormFieldComponent;
  let fixture: ComponentFixture<ToolBarFormFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolBarFormFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolBarFormFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
