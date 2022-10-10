import { Component, OnInit } from '@angular/core'
import { MenuItem } from '@appTypes/tool-bar.types'
import { LuminariesService } from '@services/luminaries/luminaries.service'

@Component({
  selector: 'app-luminaries-map-viewer',
  templateUrl: './luminaries-map-viewer.component.html',
  styleUrls: ['./luminaries-map-viewer.component.css'],
})
export class LuminariesMapViewerComponent implements OnInit {
  menuItems: MenuItem[] = [
    {
      path: 'informacion-elemento',
      iconClass: 'fa-solid fa-circle-info',
      title: 'Información de elemento',
    },
    {
      path: 'analisis-grafico',
      iconClass: 'fas fa-chart-pie',
      title: 'Análisis gráfico',
    },
  ]

  expandToolbar = false

  constructor(private luminariesData: LuminariesService) {}

  ngOnInit(): void {}

  handlePointMarked(event: any) {
    this.luminariesData.setFields(event.properties)
  }

  handleExpandToolbar(ev: boolean) {
    this.expandToolbar = ev
  }
}
