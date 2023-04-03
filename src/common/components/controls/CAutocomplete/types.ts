import { ReactNode } from 'react';

import { IFormInputComponentProps, IFormInputComponentRef } from '@/types/form';

export interface IOption {
  id: any;
  label: string;
  value: any;
  record?: any;
}

export interface ICAutocompleteRef extends IFormInputComponentRef {}
export interface ICAutocompleteProps extends IFormInputComponentProps {
  placeholder?: string;
  type?: string;
  multiple?: boolean;
  options: IOption[];
  renderOption: (props: any, option: IOption) => ReactNode;
}
