import { ToolBarFormFieldComponent } from './tool-bar-form-field/tool-bar-form-field.component'
import { ToolBarInitialMsgComponent } from './tool-bar-initial-msg/tool-bar-initial-msg.component'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  {
    path: '',
    component: ToolBarInitialMsgComponent,
  },
  {
    path: 'informacion-elemento',
    component: ToolBarFormFieldComponent,
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
