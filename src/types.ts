
export interface LayoutProps {
  title: string,
  loading: boolean,
  layout: LayoutType,
  contentWidth:'Fluid' | 'Fixed',
  siderWidth: number,
  suppressSiderWhenMenuEmpty: boolean,
  menuData: any[]
}

export type LayoutType = 'side' | 'top' | 'mix'