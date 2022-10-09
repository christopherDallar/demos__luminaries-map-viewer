import { Component, Input, OnInit } from '@angular/core'
import { FormField } from '@appTypes/tool-bar.types'

@Component({
  selector: 'app-tool-bar-form-field',
  templateUrl: './tool-bar-form-field.component.html',
  styleUrls: ['./tool-bar-form-field.component.css'],
})
export class ToolBarFormFieldComponent implements OnInit {
  @Input() field: FormField = {
    label: '',
    value: '',
  }

  constructor() {}

  ngOnInit(): void {}
}
