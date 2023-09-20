import { Control } from 'react-hook-form';

import {
  ICreateDepartmentParams,
  IUpdateDepartmentParams,
} from '@/types/departments';

export interface IMDepartmentFormProps {
  control: Control<ICreateDepartmentParams | IUpdateDepartmentParams, any>;
}
