export interface INavigationItem {
  title: string;
  isChildren: boolean;
  path: string;
  icon: React.ReactNode | string;
  children?: IChildNavigationItem[];
}

export interface IChildNavigationItem extends INavigationItem {
  level: number;
}
