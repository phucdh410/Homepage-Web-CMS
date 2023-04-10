import { FormLabel } from '@mui/material';

import { ICFormLabelProps } from './types';

export const CFormLabel: React.FC<ICFormLabelProps> = ({
  label,
  htmlFor,
  required,
  ...props
}) => {
  return (
    <FormLabel
      sx={{ fontWeight: 600, lineHeight: '24px' }}
      required={required}
      htmlFor={htmlFor}
      {...props}
    >
      {label}
    </FormLabel>
  );
};
