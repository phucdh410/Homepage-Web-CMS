import { Control } from 'react-hook-form';

import {
  ICreateEmployeeParams,
  IUpdateEmployeeParams,
} from '@/types/employees';

export interface IMEmployeeFormProps {
  control: Control<ICreateEmployeeParams | IUpdateEmployeeParams, any>;
}
