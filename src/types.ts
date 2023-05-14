
export interface LayoutProps {
  title: string,
  loading: boolean,
  layout: LayoutType,
  contentWidth:'Fluid' | 'Fixed',
  siderWidth: number,
  suppressSiderWhenMenuEmpty: boolean,
  menuData: MenuItem[],
  menuSelectedIndex:string
}

export type LayoutType = 'side' | 'top' | 'mix'

export interface MenuItem {
  key: string,
  label: string,
  icon?: string,
  subPages?: string[],
  children?: MenuItem[]
}