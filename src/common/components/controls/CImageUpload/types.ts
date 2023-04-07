import { IFileUpload } from '@/types/file';
import { IFormInputComponentProps } from '@/types/form';

export interface ICImageUploadProps extends IFormInputComponentProps {
  url?: string;
  value: IFileUpload | null;
  onChange: (value: IFileUpload) => void;
}
