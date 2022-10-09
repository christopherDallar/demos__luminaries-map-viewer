import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { LuminariesMapViewerRoutingModule } from './luminaries-map-viewer-routing.module'
import { LuminariesComponentsModule } from '../../components'
import { LuminariesMapViewerComponent } from './luminaries-map-viewer.component'

@NgModule({
  declarations: [LuminariesMapViewerComponent],
  imports: [
    CommonModule,
    LuminariesMapViewerRoutingModule,
    LuminariesComponentsModule,
  ],
})
export class LuminariesMapViewerModule {}
