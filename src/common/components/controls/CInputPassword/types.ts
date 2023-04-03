import { IFormInputComponentProps, IFormInputComponentRef } from '@/types/form';

export interface ICInputPasswordRef extends IFormInputComponentRef {}
export interface ICInputPasswordProps extends IFormInputComponentProps {
  placeholder?: string;
  startAdornment?: any;
}
