import { Control } from 'react-hook-form';

import { ICreateMenuParams, IUpdateMenuParams } from '@/types/menu';

export interface IMMenuFormProps {
  control: Control<ICreateMenuParams | IUpdateMenuParams, any>;
}
