import { BorderColor, DeleteForever } from '@mui/icons-material';
import { IconButton, Stack, Tooltip } from '@mui/material';

import { ICActionsTableProps } from './types';

export const CActionsTable: React.FC<ICActionsTableProps> = ({
  onEdit,
  onDelete,
  multiLanguages,
}) => {
  //Đa ngôn ngữ sẽ có sử dụng Dropdown
  if (multiLanguages)
    return (
      <Stack direction="row" spacing={1} justifyContent="center">
        <Tooltip title="Chỉnh sửa">
          <IconButton
            color="warning"
            onClick={onEdit}
            sx={{ '&:hover': { backgroundColor: 'rgb(255 197 12 / 19%)' } }}
          >
            <BorderColor />
          </IconButton>
        </Tooltip>
        <Tooltip title="Xóa">
          <IconButton
            color="secondary"
            onClick={onDelete}
            sx={{ '&:hover': { backgroundColor: 'rgb(207 55 61 / 12%)' } }}
          >
            <DeleteForever />
          </IconButton>
        </Tooltip>
      </Stack>
    );

  return (
    <Stack direction="row" spacing={1} justifyContent="center">
      <Tooltip title="Chỉnh sửa">
        <IconButton
          color="warning"
          onClick={onEdit}
          sx={{ '&:hover': { backgroundColor: 'rgb(255 197 12 / 19%)' } }}
        >
          <BorderColor />
        </IconButton>
      </Tooltip>
      <Tooltip title="Xóa">
        <IconButton
          color="secondary"
          onClick={onDelete}
          sx={{ '&:hover': { backgroundColor: 'rgb(207 55 61 / 12%)' } }}
        >
          <DeleteForever />
        </IconButton>
      </Tooltip>
    </Stack>
  );
};
