import { Dayjs } from 'dayjs';

import { IFormInputComponentProps } from '@/types/form';

export interface ICDatePickerProps
  extends IFormInputComponentProps<Dayjs | null> {
  placeholder?: string;
  format?: string;
  fullWidth?: boolean;
  shouldDisableDate?: (day: Dayjs) => boolean;
}
