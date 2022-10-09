import { EventEmitter, Injectable, Output } from '@angular/core'
import { FormField } from 'src/app/views/luminaries/types/tool-bar.types'

@Injectable({
  providedIn: 'root',
})
export class LuminariesService {
  private fields: FormField[] = []

  @Output() changeFieldsEmitter: EventEmitter<FormField[]> = new EventEmitter()

  constructor() {}

  getFields() {
    return this.fields
  }

  setFields(data: any) {
    const fieldsMapper = Object.keys(data).map((key) => ({
      label: key,
      value: data[key],
    }))

    this.fields = fieldsMapper

    this.changeFieldsEmitter.emit()
  }
}
