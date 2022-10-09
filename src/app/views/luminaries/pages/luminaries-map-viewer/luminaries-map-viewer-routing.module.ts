import { LuminariesMapViewerComponent } from './luminaries-map-viewer.component'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { ToolBarGraphicComponent, ToolBarFormComponent } from '../../components'

const routes: Routes = [
  {
    path: '',
    component: LuminariesMapViewerComponent,
    children: [
      {
        path: 'informacion-elemento',
        component: ToolBarFormComponent,
      },
      {
        path: 'analisis-grafico',
        component: ToolBarGraphicComponent,
      },
      {
        path: '',
        redirectTo: 'informacion-elemento',
      },
      {
        path: '**',
        redirectTo: 'informacion-elemento',
      },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LuminariesMapViewerRoutingModule {}
