import { Component, Input, OnInit } from '@angular/core'
import { chartData } from '@appTypes/tool-bar.types'
import * as Highcharts from 'highcharts'

@Component({
  selector: 'app-luminaries-chart',
  templateUrl: './luminaries-chart.component.html',
  styleUrls: ['./luminaries-chart.component.css'],
})
export class LuminariesChartComponent implements OnInit {
  @Input() data: chartData[] = []
  @Input() title = ''
  @Input() totalLuminaries = 0

  Highcharts: typeof Highcharts = Highcharts // required
  chartConstructor: string = 'chart' // optional string, defaults to 'chart'
  chartOptions: Highcharts.Options = {
    title: {
      text: '',
    },
    subtitle: {
      text: '',
    },
    chart: {
      type: 'pie',
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: false,
        },
        showInLegend: true,
      },
    },
    series: [
      {
        data: [],
        type: 'pie',
      },
    ],
  } // required
  // chartCallback: Highcharts.ChartCallbackFunction = function (chart) { ... } // optional function, defaults to null
  // updateFlag: boolean = false // optional boolean
  // oneToOneFlag: boolean = true // optional boolean, defaults to false
  // runOutsideAngular: boolean = false // optional boolean, defaults to false

  constructor() {}

  ngOnInit(): void {
    this.chartOptions.title = {
      text: this.title,
    }
    this.chartOptions.subtitle = {
      text: `Nº total luminarias ${this.totalLuminaries}`,
    }
    this.chartOptions.series = [
      {
        data: this.data,
        type: 'pie',
      },
    ]
  }
}
