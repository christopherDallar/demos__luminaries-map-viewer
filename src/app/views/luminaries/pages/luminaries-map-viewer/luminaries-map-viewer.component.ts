import { Component, OnInit } from '@angular/core'
import { MenuItem } from '@appTypes/tool-bar.types'

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
      active: true,
    },
    {
      path: 'analisis-grafico',
      iconClass: 'fas fa-chart-pie',
      title: 'Análisis gráfico',
    },
  ]

  constructor() {}

  ngOnInit(): void {}

  handlePointMarked(event: any) {
    console.log('handlePointMarked', event)
  }
}
