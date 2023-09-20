import { IFormInputComponentProps, IFormInputComponentRef } from '@/types/form';

export interface ICImageUploadRef extends IFormInputComponentRef {}
export interface ICImageUploadProps extends IFormInputComponentProps {
  url?: string;
  value: string;
  onChange: (file_id: string) => void;
  // value: IFileUpload | null;
  // onChange: (value: IFileUpload) => void;
  aspectRatio?: string;
  maxWidth?: number;
  maxMb?: number;
}
