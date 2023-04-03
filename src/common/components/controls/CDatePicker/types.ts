import { IFormInputComponentProps } from '@/types/form';

export interface ICDatePickerProps extends IFormInputComponentProps<string> {
  placeholder?: string;
  format?: string;
  fullWidth?: boolean;
  shouldDisableDate?: (day: string) => boolean;
}
