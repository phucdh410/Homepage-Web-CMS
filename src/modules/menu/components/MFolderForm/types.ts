import { Control } from 'react-hook-form';

import { ICreateFolderParams, IUpdateFolderParams } from '@/types/folders';
import { IOption } from '@/types/options';

export interface IMFolderFormProps {
  control: Control<ICreateFolderParams | IUpdateFolderParams, any>;
  menuList: IOption[];
}
