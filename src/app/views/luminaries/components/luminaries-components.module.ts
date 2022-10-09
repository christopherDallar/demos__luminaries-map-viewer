import { LuminariesRoutingModule } from './../luminaries-routing.module'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import {
  ToolBarFormFieldComponent,
  ToolBarInitialMsgComponent,
  ToolBarMenuComponent,
  LuminariesMapComponent,
  ToolBarFormComponent,
  ToolBarGraphicComponent,
} from './'
import { LeafletModule } from '@asymmetrik/ngx-leaflet'
import { FormsModule } from '@angular/forms'

const components = [
  ToolBarFormComponent,
  ToolBarInitialMsgComponent,
  ToolBarFormFieldComponent,
  ToolBarGraphicComponent,
  ToolBarMenuComponent,
  LuminariesMapComponent,
]

@NgModule({
  declarations: components,
  imports: [CommonModule, LuminariesRoutingModule, FormsModule, LeafletModule],
  exports: components,
})
export class LuminariesComponentsModule {}
