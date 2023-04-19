import { Control } from 'react-hook-form';

import { IEmployeeForm } from '@/types/employees';

export interface IMEmployeeFormProps {
  control: Control<IEmployeeForm, any>;
}
