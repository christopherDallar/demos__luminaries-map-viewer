import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/luminaries-map-viewer/luminaries-map-viewer.module').then(
        (m) => m.LuminariesMapViewerModule,
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LuminariesRoutingModule {}
