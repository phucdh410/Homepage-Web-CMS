import { Control } from 'react-hook-form';

import { IEmployeeForm } from '@/types/employee';

export interface IMEmployeeFormProps {
  control: Control<IEmployeeForm, any>;
}
