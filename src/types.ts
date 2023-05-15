
export interface LayoutProps {
  title: string,
  loading: boolean,
  layout: LayoutType,
  contentWidth:'Fluid' | 'Fixed',
  siderWidth: number,
  suppressSiderWhenMenuEmpty: boolean,
  menu: MenuProps,
  avatar: AvatarProps,
  collapsed: boolean,
  hiddenCollapsedButton: boolean
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
  index: string,
  uniqueOpened?: boolean
}

export interface AvatarProps{
  src?: string,
  title?: string
}