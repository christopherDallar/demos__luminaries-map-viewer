import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { ToolBarFormComponent } from './tool-bar-form/tool-bar-form.component';
import { ToolBarInitialMsgComponent } from './tool-bar-initial-msg/tool-bar-initial-msg.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolBarComponent,
    ToolBarFormComponent,
    ToolBarInitialMsgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LeafletModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
