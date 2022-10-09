import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolBarFormComponent } from './tool-bar-form.component';

describe('ToolBarFormComponent', () => {
  let component: ToolBarFormComponent;
  let fixture: ComponentFixture<ToolBarFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolBarFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolBarFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
