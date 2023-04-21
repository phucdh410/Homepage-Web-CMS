import { SxProps, Theme } from '@mui/material';

import { IFormInputComponentProps, IFormInputComponentRef } from '@/types/form';

export interface ICCollapseSelectRef extends IFormInputComponentRef {}

export interface ICCollapseSelectProps extends IFormInputComponentProps {
  sx?: SxProps<Theme>;
  placeholder?: string;
}
