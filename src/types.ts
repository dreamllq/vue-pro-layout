
export interface LayoutProps {
  title: string,
  loading: boolean,
  layout: LayoutType,
  contentWidth:'Fluid' | 'Fixed',
  siderWidth: number,
  suppressSiderWhenMenuEmpty: boolean,
  menu: MenuProps
}

export type LayoutType = 'side' | 'top' | 'mix'

export interface MenuItem {
  key: string,
  label: string,
  icon?: string,
  subPages?: string[],
  children?: MenuItem[]
}

export interface MenuProps {
  data: MenuItem[],
  index: string
}