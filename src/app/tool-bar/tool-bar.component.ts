import { Component, OnInit } from '@angular/core'
import { menuItem } from '@appTypes/tool-bar.types'

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.css'],
})
export class ToolBarComponent implements OnInit {
  menuItems: menuItem[] = [
    {
      path: 'informacion-elemento',
      iconClass: 'fa-solid fa-circle-info',
      title: 'Información de elemento',
      active: true,
    },
    {
      path: 'informacion-elemento',
      iconClass: 'fa-solid fa-circle-info',
      title: 'Información de elemento',
    },
  ]

  constructor() {}

  ngOnInit(): void {}
}
