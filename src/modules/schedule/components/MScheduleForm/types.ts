import { Control } from 'react-hook-form';

import { ICreateScheduleParams, IUpdateScheduleParams } from '@/types/schedule';

export interface IMScheduleFormProps {
  control: Control<ICreateScheduleParams | IUpdateScheduleParams, any>;
}
