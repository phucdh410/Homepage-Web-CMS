import { Control } from 'react-hook-form';

import { ICreatePageParams, IUpdatePageParams } from '@/types/page';

export interface IMPageFormProps {
  control: Control<ICreatePageParams | IUpdatePageParams, any>;
}
