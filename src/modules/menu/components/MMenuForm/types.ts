import { Control } from 'react-hook-form';

import { ICreateMenuParams, IUpdateMenuParams } from '@/types/menus';

export interface IMMenuFormProps {
  control: Control<ICreateMenuParams | IUpdateMenuParams, any>;
}
