export interface luminariesGeoJson {
  type: string
  name: string
  crs: Crs
  features: Feature[]
}

export interface Feature {
  type: string
  properties: Properties2
  geometry: Geometry
  id: number
}

export interface Geometry {
  type: string
  coordinates: number[]
}

export interface Properties2 {
  observaciones?: string
  id_luminaria?: string
  punto_luz?: string
  vial?: string
  numero?: number
  lado_via?: any
  distancia_eje?: any
  s1?: any
  s2?: any
  centro_mando?: string
  circuito?: string
  operativa?: string
  altura?: number | string
  tipo_soporte?: string
  marca_soporte?: string
  modelo_soporte?: string
  estado_soporte?: string
  situacion_soporte?: string
  tamano_brazo?: any
  longitud_brazo?: number
  orientacion_brazo?: string
  tipo_luminaria?: string
  marca_luminaria?: string
  modelo_luminaria?: string
  estado_luminaria?: string
  tipo_lampara?: string
  marca_lampara?: string
  modelo_lampara?: string
  estado_lampara?: string
  cantidad_lamparas?: number
  potencia?: number
  equipo_auxiliar?: string
  situacion_equipo_auxiliar?: string
  orientacion?: string
  alta?: boolean
  usuario_alta?: string
  fecha_alta?: string
  modificado?: boolean
  usuario_modificado?: string
  fecha_modificado?: string
  herramienta?: string
  numero_registro?: number
  envio?: any
  fecha_envio?: any
  id_centro_mando?: any
  id_circuito?: any
}

export interface Crs {
  type: string
  properties: Properties
}

export interface Properties {
  name: string
}
