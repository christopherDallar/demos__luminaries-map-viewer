import { Component, Input, OnInit } from '@angular/core'
import { MenuItem } from 'src/app/views/luminaries/types/tool-bar.types'

@Component({
  selector: 'app-tool-bar-menu',
  templateUrl: './tool-bar-menu.component.html',
  styleUrls: ['./tool-bar-menu.component.css'],
})
export class ToolBarMenuComponent implements OnInit {
  @Input() menuItems: MenuItem[] = []

  currentTitle = ''
  constructor() {}

  ngOnInit(): void {
    if (this.menuItems.length > 0) {
      let title = this.menuItems[0].title

      const menuItemActive = this.menuItems.find((item) => item.active)

      if (menuItemActive) {
        title = menuItemActive.title
      }

      this.currentTitle = title
    }
  }

  handleClick(menuItem: MenuItem) {
    this.currentTitle = menuItem.title
  }
}
