import { Component, OnInit } from '@angular/core'
import { MenuItem } from '@appTypes/tool-bar.types'

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.css'],
})
export class ToolBarComponent implements OnInit {
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
}
