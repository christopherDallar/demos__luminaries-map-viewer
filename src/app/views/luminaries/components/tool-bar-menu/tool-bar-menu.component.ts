import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { Router } from '@angular/router'
import { MenuItem } from 'src/app/views/luminaries/types/tool-bar.types'

@Component({
  selector: 'app-tool-bar-menu',
  templateUrl: './tool-bar-menu.component.html',
  styleUrls: ['./tool-bar-menu.component.css'],
})
export class ToolBarMenuComponent implements OnInit {
  @Output() arrowBtnEmitter = new EventEmitter()
  @Input() menuItems: MenuItem[] = []

  rotateArrowBtn = false
  currentTitle = ''

  constructor(private router: Router) {}

  ngOnInit(): void {
    if (this.menuItems.length > 0) {
      let title = this.menuItems[0].title

      const currentPath = this.router.url.slice(1, this.router.url.length)
      const menuItemActive = this.menuItems.find(
        (item) => item.path === currentPath,
      )

      if (menuItemActive) {
        title = menuItemActive.title
      }

      this.currentTitle = title
    }
  }

  handleClick(menuItem: MenuItem) {
    this.currentTitle = menuItem.title
  }

  handleClickArrowButton() {
    this.rotateArrowBtn = !this.rotateArrowBtn
    this.arrowBtnEmitter.emit(this.rotateArrowBtn)
  }
}
