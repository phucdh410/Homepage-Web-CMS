import { TreeItemComponentProps } from 'dnd-kit-sortable-tree';

export interface IItem {
  id: string;
  label: string;
}

export interface IMTreeItemProps extends TreeItemComponentProps<IItem> {}
