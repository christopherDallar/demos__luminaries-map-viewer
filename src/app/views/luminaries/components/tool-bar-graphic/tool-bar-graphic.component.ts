import {
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core'
import { chartData } from '@appTypes/tool-bar.types'

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

  constructor() {}

  ngOnInit(): void {}

  ngAfterContentInit() {
    // if (!(this.outletRef && this.contentRef)) return
    // this.outletRef.createEmbeddedView(this.contentRef)
  }

  rerender(create = true) {
    if (!(this.outletRef && this.contentRef)) return
    this.outletRef.clear()
    if (!create) return
    this.outletRef.createEmbeddedView(this.contentRef)
  }

  getTitle(key: 'tipo_soporte' | 'tipo_luminaria' | 'tipo_lampara') {
    const titles = {
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

    this.setChartProps(this.getTitle(event.target.value))
    this.rerender()
  }

  setChartProps(title: string) {
    this.chartData = [
      {
        name: 'hello',
        color: 'blue',
        y: 1,
      },
    ]

    this.chartTitle = title
    this.totalLuminaries = 1000
  }
}
