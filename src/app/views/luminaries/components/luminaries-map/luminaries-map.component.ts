import { LuminariesService } from '@services/luminaries/luminaries.service'
import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import {
  circleMarker,
  geoJSON,
  GeoJSONOptions,
  LatLng,
  LatLngBounds,
  Map,
  MapOptions,
  tileLayer,
  TileLayer,
} from 'leaflet'

@Component({
  selector: 'app-luminaries-map',
  templateUrl: './luminaries-map.component.html',
  styleUrls: ['./luminaries-map.component.css'],
})
export class LuminariesMapComponent implements OnInit {
  @Output() pointMarkerSelected: EventEmitter<any> = new EventEmitter()

  ngOnInit(): void {}

  map?: Map

  initialLatLng = new LatLng(37.59013677986163, -4.079138223556711)

  mapOptions: MapOptions = {
    zoom: 17,
    zoomControl: false,
    preferCanvas: true,
  }

  baseLayer: TileLayer

  mapFitBounds: LatLngBounds = new LatLngBounds([
    [37.50547228, -4.22810257],
    [37.70590845000001, -3.98959274],
  ])

  prevPointLayer?: any

  constructor(private luminariesService: LuminariesService) {
    this.baseLayer = tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        crossOrigin: 'anonymous',
        className: 'OSM',
        maxNativeZoom: 19,
        maxZoom: 22,
        minZoom: 13,
      },
    )
  }

  onMapReady(map: Map): void {
    this.map = map
    this.addLuminariesLayer()
    this.map.setView(this.initialLatLng, 16)
  }

  private async addLuminariesLayer(): Promise<void> {
    if (!this.map) return

    const luminaires = await this.luminariesService.getGeoJson()

    const options: GeoJSONOptions = {
      pointToLayer: (feature: GeoJSON.Feature, latLng: LatLng) => {
        return circleMarker(latLng).on('click', (event) => {
          this.handleClickToMarker(event)
        })
      },
      style: (feature) => ({
        radius: 8,
        color: '#333',
        fillColor: '#FFFA4D',
        weight: 1,
        opacity: 1,
        fillOpacity: 1,
      }),
    }

    geoJSON(luminaires, options).addTo(this.map)
  }

  handleClickToMarker(event: any, emitter = this.pointMarkerSelected) {
    if (!this.map) return

    const { target } = event
    emitter.emit(target.feature)

    let layer = event.target

    if (this.prevPointLayer) {
      this.prevPointLayer.setStyle({
        fillColor: '#0000ff5b',
      })
    }

    layer.setStyle({
      fillColor: '#0000ff',
    })

    this.map.setView(event.latlng, 16)

    this.prevPointLayer = layer
  }
}
