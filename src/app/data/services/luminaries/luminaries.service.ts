import { Injectable } from '@angular/core'
import { FormField } from 'src/app/views/luminaries/types/tool-bar.types'

@Injectable({
  providedIn: 'root',
})
export class LuminariesService {
  private fields: FormField[] = [
    {
      label: 'some',
      value: 'some value',
    },
  ]

  constructor() {}

  getFields() {
    return this.fields
  }
}
