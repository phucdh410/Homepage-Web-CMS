import { Control } from 'react-hook-form';

import {
  ICreatePositionParams,
  IUpdatePositionParams,
} from '@/types/positions';

export interface IMPositionFormProps {
  control: Control<ICreatePositionParams | IUpdatePositionParams, any>;
}
