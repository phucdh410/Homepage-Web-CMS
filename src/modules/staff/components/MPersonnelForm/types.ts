import { Control } from 'react-hook-form';

import { IPersonnelForm } from '@/types/personnel';

export interface IMPersonnelFormProps {
  control: Control<IPersonnelForm, any>;
}
