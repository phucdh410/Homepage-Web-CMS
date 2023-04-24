import { Control } from 'react-hook-form';

import {
  ICreateInstituteParams,
  IUpdateInstituteParams,
} from '@/types/institutes';

export interface IMInstituteFormProps {
  control: Control<ICreateInstituteParams | IUpdateInstituteParams, any>;
}
