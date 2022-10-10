export type MenuItem = {
  path: 'informacion-elemento' | 'analisis-grafico'
  iconClass: 'fa-solid fa-circle-info' | 'fas fa-chart-pie'
  title: string
  active?: boolean
}

export type FormField = {
  label: string
  value: string | boolean | number
}

export type chartData = {
  name: string
  y: number
  color?: string
}
export type luminariesAnalyticAttr =
  | 'tipo_soporte'
  | 'tipo_luminaria'
  | 'tipo_lampara'
