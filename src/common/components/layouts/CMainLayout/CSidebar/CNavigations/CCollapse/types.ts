import { IChildNavigationItem, INavigationItem } from '@/types/navigation';

export interface ICCollapseProps {
  data: INavigationItem;
  index: number;
  dropdownList: IChildNavigationItem[];
}
