import { EventEmitter, Injectable, Output } from '@angular/core'
import { FormField, luminariesAnalyticAttr } from '@appTypes/tool-bar.types'
import { luminariesGeoJson } from './luminaries-web-repository.entity'
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

  async getGeoJson() {
    return await (await fetch('assets/data/luminarias.geojson')).json()
  }
}
