import { Dayjs } from 'dayjs';

import { IFormInputComponentProps } from '@/types/form';

export interface ICDateTimePickerProps
  extends IFormInputComponentProps<string | Date | Dayjs | null> {
  placeholder?: string;
  format?: string;
  fullWidth?: boolean;
  shouldDisableDate?: (day: Dayjs | Date | string) => boolean;
}