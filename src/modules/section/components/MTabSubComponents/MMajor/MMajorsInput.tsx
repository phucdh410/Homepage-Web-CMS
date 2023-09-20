import { Controller, useFieldArray } from 'react-hook-form';
import { AddCircleOutline, Delete } from '@mui/icons-material';
import { Avatar, ButtonBase, Stack } from '@mui/material';

import { CFormLabel, CInput } from '@/controls/';
import { IMajorData } from '@/types/majors';

import { IMFormProps } from './MForm';

interface IMMajorInputProps extends Pick<IMFormProps, 'control'> {}

export const MMajorInput: React.FC<IMMajorInputProps> = ({ control }) => {
  //#region Ref
  //#endregion

  //#region Data
  const { fields, append, remove, update } = useFieldArray({
    control,
    name: 'majors',
    keyName: '_id',
  });
  //#endregion

  //#region Event
  const onAppend = () => append({ sort_order: 1, name: '' });

  const onRemove = (index: number, el: IMajorData) => {
    // if (el?.id) {
    //   update(index, { ...el, deleted: true });
    // } else {
    remove(index);
    // }
  };
  //#endregion

  //#region Cycle
  //#endregion

  //#region Render
  return (
    <>
      <Stack direction="column" spacing={1} mb={2.5}>
        <CFormLabel label="Ngành đào tạo" required />
        {fields.map((e, i) => (
          <Stack
            key={e._id}
            direction="row"
            gap={3}
            alignItems="center"
            mb={2.5}
            // display={e?.deleted ? 'none' : 'flex'}
          >
            <CFormLabel label="Thứ tự" sx={{ flexShrink: 0 }} />
            <Controller
              control={control}
              name={`majors.${i}.sort_order`}
              render={({ field }) => (
                <CInput {...field} placeholder="Số thứ tự" type="number" />
              )}
            />
            <Controller
              control={control}
              name={`majors.${i}.name`}
              render={({ field }) => (
                <CInput
                  {...field}
                  fullWidth
                  placeholder="Nhập tên ngành đào tạo"
                />
              )}
            />
            <ButtonBase
              sx={{ borderRadius: '10px' }}
              onClick={() => onRemove(i, e)}
            >
              <Avatar
                variant="square"
                sx={{
                  borderRadius: 'inherit',
                  backgroundColor: (theme) => theme.palette.error.main,
                }}
              >
                <Delete sx={{ color: '#fff' }} />
              </Avatar>
            </ButtonBase>
          </Stack>
        ))}
      </Stack>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <ButtonBase sx={{ borderRadius: '10px' }} onClick={onAppend}>
          <Avatar
            variant="square"
            sx={{
              borderRadius: 'inherit',
              backgroundColor: (theme) => theme.palette.primary.main,
            }}
          >
            <AddCircleOutline
              sx={{ color: (theme) => theme.palette.primary.contrastText }}
            />
          </Avatar>
        </ButtonBase>
      </div>
    </>
  );
  //#endregion
};
