import { ToolBarFormComponent } from './tool-bar-form/tool-bar-form.component'
import { ToolBarGraphicComponent } from './tool-bar-graphic/tool-bar-graphic.component'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
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
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '',
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
