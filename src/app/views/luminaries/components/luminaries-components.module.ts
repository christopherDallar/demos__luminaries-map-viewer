import { LuminariesRoutingModule } from './../luminaries-routing.module'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import {
  ToolBarFormFieldComponent,
  ToolBarInitialMsgComponent,
  ToolBarMenuComponent,
  LuminariesMapComponent,
  ToolBarFormComponent,
  ToolBarGraphicComponent,
  LuminariesChartComponent,
} from './'
import { LeafletModule } from '@asymmetrik/ngx-leaflet'
import { HighchartsChartModule } from 'highcharts-angular'

const components = [
  ToolBarFormComponent,
  ToolBarInitialMsgComponent,
  ToolBarFormFieldComponent,
  ToolBarGraphicComponent,
  ToolBarMenuComponent,
  LuminariesMapComponent,
  LuminariesChartComponent,
]

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    LuminariesRoutingModule,
    FormsModule,
    LeafletModule,
    HighchartsChartModule,
  ],
  exports: components,
})
export class LuminariesComponentsModule {}
