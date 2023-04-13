import { Chip } from '@mui/material';

import { ICActiveTagProps } from './types';

const styles = {
  fontWeight: 500,
  minWidth: '80px',
  borderRadius: '10px',
};

export const CActiveTag: React.FC<ICActiveTagProps> = ({ value }) => {
  return value ? (
    <Chip
      label="Hiển thị"
      color="primary"
      sx={{ ...styles, backgroundColor: '#72a2ff' }}
    />
  ) : (
    <Chip
      label="Đã ẩn"
      color="error"
      sx={{ ...styles, backgroundColor: '#b0b0b0' }}
    />
  );
};
