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
