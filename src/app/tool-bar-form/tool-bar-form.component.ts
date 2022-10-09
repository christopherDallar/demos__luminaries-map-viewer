import { Component, OnInit } from '@angular/core'
import { FormField } from '@appTypes/tool-bar.types'
import { LuminariesService } from '@services/luminaries/luminaries.service'

@Component({
  selector: 'app-tool-bar-form',
  templateUrl: './tool-bar-form.component.html',
  styleUrls: ['./tool-bar-form.component.css'],
})
export class ToolBarFormComponent implements OnInit {
  fields: FormField[] = []

  constructor(private luminariesService: LuminariesService) {}

  ngOnInit(): void {
    this.fields = this.luminariesService.getFields()
  }
}
