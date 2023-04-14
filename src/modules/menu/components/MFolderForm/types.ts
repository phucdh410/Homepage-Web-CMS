import { Control } from 'react-hook-form';

import { ICreateFolderParams, IUpdateFolderParams } from '@/types/folder';

export interface IMFolderFormProps {
  control: Control<ICreateFolderParams | IUpdateFolderParams, any>;
}
