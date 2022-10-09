import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolBarMenuComponent } from './tool-bar-menu.component';

describe('ToolBarMenuComponent', () => {
  let component: ToolBarMenuComponent;
  let fixture: ComponentFixture<ToolBarMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolBarMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolBarMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
