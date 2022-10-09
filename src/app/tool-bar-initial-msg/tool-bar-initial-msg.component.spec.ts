import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolBarInitialMsgComponent } from './tool-bar-initial-msg.component';

describe('ToolBarInitialMsgComponent', () => {
  let component: ToolBarInitialMsgComponent;
  let fixture: ComponentFixture<ToolBarInitialMsgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolBarInitialMsgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolBarInitialMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
