import { Control, Controller, useFieldArray } from 'react-hook-form';
import { AddCircleOutline, Delete } from '@mui/icons-material';
import { Avatar, ButtonBase, Stack } from '@mui/material';

import { CAutocomplete, CFormLabel, CInput } from '@/controls/';
import { IEmployeeDataAttach } from '@/types/employees';
import { IUpdateEmployeesParams } from '@/types/school-masters';

export interface IMEmployeesFormProps {
  control: Control<IUpdateEmployeesParams, any>;
}

export const MEmployeesForm: React.FC<IMEmployeesFormProps> = ({ control }) => {
  //#region Ref
  //#endregion

  //#region Data
  const { fields, append, remove, update } = useFieldArray({
    control,
    name: 'rank_2nd',
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
      <CFormLabel label="Cấp bậc" required sx={{ mb: 3 }} />
      <Stack direction="column" spacing={1} mb={2.5}>
        <CFormLabel label="Bậc 1" required />
        <Stack direction="row" alignItems="center" spacing={3}>
          <Controller
            control={control}
            name="rank_1st.position_id"
            render={({ field, fieldState: { error } }) => (
              <CAutocomplete
                {...field}
                placeholder="Chọn chức vụ"
                fullWidth
                options={[]}
                renderOption={(props, option) => (
                  <div key={option.id} {...props}>
                    {option.label}
                  </div>
                )}
                error={!!error}
                helperText={error?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="rank_1st.employee_id"
            render={({ field, fieldState: { error } }) => (
              <CAutocomplete
                {...field}
                placeholder="Chọn nhân sự"
                fullWidth
                options={[]}
                renderOption={(props, option) => (
                  <div key={option.id} {...props}>
                    {option.label}
                  </div>
                )}
                error={!!error}
                helperText={error?.message}
              />
            )}
          />
        </Stack>
      </Stack>

      <CFormLabel label="Bậc 2" sx={{ mb: 2.5 }} />
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
            name={`rank_2nd.${i}.sort_order`}
            render={({ field }) => <CInput {...field} type="number" />}
          />
          <Controller
            control={control}
            name={`rank_2nd.${i}.position_id`}
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
            name={`rank_2nd.${i}.employee_id`}
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
