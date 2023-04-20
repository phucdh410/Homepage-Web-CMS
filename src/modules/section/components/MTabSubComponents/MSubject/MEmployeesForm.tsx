import { Control, Controller, useFieldArray } from 'react-hook-form';
import { AddCircleOutline, Delete } from '@mui/icons-material';
import { Avatar, ButtonBase, Stack } from '@mui/material';

import { CAutocomplete, CFormLabel, CInput } from '@/controls/';
import { IEmployeeDataAttach } from '@/types/employees';
import { IUpdateEmployeesParams } from '@/types/subjects';

export interface IMEmployeesFormProps {
  control: Control<IUpdateEmployeesParams, any>;
}

export const MEmployeesForm: React.FC<IMEmployeesFormProps> = ({ control }) => {
  //#region Ref
  //#endregion

  //#region Data
  const { fields, append, remove, update } = useFieldArray({
    control,
    name: 'payload',
    keyName: '_id',
  });
  //#endregion

  //#region Event
  const onAppend = () =>
    append({ sort_order: 1, employee_id: '', position_id: '' });

  const onRemove = (index: number, el: IEmployeeDataAttach) => {
    if (el?.id) {
      update(index, { ...el, deleted: true });
    } else {
      remove(index);
    }
  };
  //#endregion

  //#region Cycle
  //#endregion

  //#region Render
  return (
    <>
      {fields.map((e, i) => (
        <Stack
          key={e._id}
          direction="row"
          gap={3}
          alignItems="center"
          mb={2.5}
          display={e?.deleted ? 'none' : 'flex'}
        >
          <CFormLabel label="Thứ tự" sx={{ flexShrink: 0 }} />
          <Controller
            control={control}
            name={`payload.${i}.sort_order`}
            render={({ field }) => <CInput {...field} type="number" />}
          />
          <Controller
            control={control}
            name={`payload.${i}.position_id`}
            render={({ field }) => (
              <CAutocomplete
                {...field}
                fullWidth
                placeholder="Chọn chức vụ"
                options={[]}
                renderOption={(props, option) => (
                  <div key={option.id} {...props}>
                    {option.label}
                  </div>
                )}
              />
            )}
          />
          <Controller
            control={control}
            name={`payload.${i}.employee_id`}
            render={({ field }) => (
              <CAutocomplete
                {...field}
                fullWidth
                placeholder="Chọn nhân sự"
                options={[]}
                renderOption={(props, option) => (
                  <div key={option.id} {...props}>
                    {option.label}
                  </div>
                )}
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
      <div style={{ textAlign: 'center' }}>
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
