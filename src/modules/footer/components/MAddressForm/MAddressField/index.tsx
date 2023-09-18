import { useFieldArray } from 'react-hook-form';
import { DeleteForever } from '@mui/icons-material';
import { Box, IconButton, Stack, Tooltip, Typography } from '@mui/material';

import { CFormLabel } from '@/controls/';

import { AddTextField } from './AddTextField';
import { IMAddressFieldProps } from './types';

export const MAddressField: React.FC<IMAddressFieldProps> = ({ control }) => {
  //#region Data
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'address',
    keyName: '_id',
  });
  //#endregion

  //#region Event
  const onRemove = (index: number) => () => {
    remove(index);
  };
  //#endregion

  //#region Render
  return (
    <Stack direction="column" spacing={1} mb={2.5}>
      <CFormLabel label="Danh sách cơ sở" required />
      <AddTextField append={append} />
      <Box px={3} py={1}>
        {fields.length > 0 &&
          fields.map((addressItem, index) => (
            <Stack
              key={addressItem._id}
              direction="row"
              alignItems="center"
              spacing={1.5}
            >
              <Typography sx={{ userSelect: 'none' }}>
                {addressItem.name}
              </Typography>
              <Tooltip title="Xóa">
                <IconButton
                  color="secondary"
                  onClick={onRemove(index)}
                  sx={{
                    '&:hover': { backgroundColor: 'rgb(207 55 61 / 12%)' },
                  }}
                >
                  <DeleteForever />
                </IconButton>
              </Tooltip>
            </Stack>
          ))}
      </Box>
    </Stack>
  );
  //#endregion
};
