import {
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core'
import { chartData, luminariesAnalyticAttr } from '@appTypes/tool-bar.types'
import { luminariesGeoJson } from '@services/luminaries/luminaries-web-repository.entity'
import { LuminariesService } from '@services/luminaries/luminaries.service'

@Component({
  selector: 'app-tool-bar-graphic',
  templateUrl: './tool-bar-graphic.component.html',
  styleUrls: ['./tool-bar-graphic.component.css'],
})
export class ToolBarGraphicComponent implements OnInit {
  @ViewChild('outlet', { read: ViewContainerRef }) outletRef?: ViewContainerRef
  @ViewChild('luminariesChart', { read: TemplateRef }) contentRef?: TemplateRef<
    any
  >

  luminariesGeoJson?: any

  options = [
    {
      value: '0',
      label: 'Seleccione un atributo',
    },
    {
      value: 'tipo_soporte',
      label: 'Tipo soporte',
    },
    {
      value: 'tipo_luminaria',
      label: 'Tipo luminaria',
    },
    {
      value: 'tipo_lampara',
      label: 'Tipo lampara',
    },
  ]

  chartTitle: string = ''
  totalLuminaries = 0
  chartData: chartData[] = []

  constructor(private luminariesData: LuminariesService) {}

  async ngOnInit() {
    this.luminariesGeoJson = await this.luminariesData.getGeoJson()
    this.totalLuminaries = this.luminariesGeoJson.features.length
  }

  rerender(create = true) {
    if (!(this.outletRef && this.contentRef)) return
    this.outletRef.clear()
    if (!create) return
    this.outletRef.createEmbeddedView(this.contentRef)
  }

  getTitle(key: string) {
    const titles: any = {
      tipo_soporte: 'Tipo soporte',
      tipo_luminaria: 'Tipo luminaria',
      tipo_lampara: 'Tipo lampara',
    }

    return titles[key]
  }

  handleChangeSelect(event: any) {
    if (event.target.value === '0') {
      this.rerender(false)
      return
    }

    this.setChartProps(event.target.value)
    this.rerender()
  }

  getAttrAnalyticData(attr: any) {
    if (!this.luminariesGeoJson) return

    const { features } = this.luminariesGeoJson

    const valuesToGroup = []

    for (let index = 0; index < features.length; index++) {
      const { properties } = features[index]

      const objetIncludeProperty = Object.getOwnPropertyNames(
        properties,
      ).includes(attr)

      if (!objetIncludeProperty || !properties[attr]) continue

      valuesToGroup.push(properties[attr])
    }

    let valuesGrouped: any = {}

    for (let index = 0; index < valuesToGroup.length; index++) {
      const value = valuesToGroup[index]
      const wasSavedProp = Object.keys(valuesGrouped).includes(value)

      if (wasSavedProp) {
        valuesGrouped[value] += 1
        continue
      }

      valuesGrouped[value] = 1
    }

    return valuesGrouped
  }

  setChartProps(value: string) {
    const valuesGrouped = this.getAttrAnalyticData(value)

    this.chartData = Object.keys(valuesGrouped).map((key) => ({
      name: key,
      y: valuesGrouped[key],
    }))

    this.chartTitle = this.getTitle(value)
  }
}
