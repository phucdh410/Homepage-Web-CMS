import { Dayjs } from 'dayjs';

import { IFormInputComponentProps } from '@/types/form';

export interface ICDatePickerProps
  extends IFormInputComponentProps<Date | Dayjs | string | null> {
  placeholder?: string;
  format?: string;
  fullWidth?: boolean;
  disablePast?: boolean;
  shouldDisableDate?: (day: Dayjs | Date | string) => boolean;
}
