import { Controller } from 'react-hook-form';
import {
  FormControlLabel,
  Paper,
  Radio,
  RadioGroup,
  Stack,
  Unstable_Grid2 as Grid,
} from '@mui/material';

import { POSITION_DISPLAY_OPTIONS } from '@/constants/enums';
import { CFormLabel, CInput, CSwitch } from '@/controls/';

import { MFeature } from './MFeature';
import { IMMenuFormProps } from './types';

export const MMenuForm: React.FC<IMMenuFormProps> = ({ control }) => {
  return (
    <Grid container spacing={2.5} mb={2.5}>
      <Grid lg={12}>
        <Paper variant="wrapper">
          <Stack direction="row" spacing={3} mb={2.5}>
            <Stack direction="column" spacing={1} flex={1}>
              <CFormLabel label="Menu" required htmlFor="title" />
              <Controller
                control={control}
                name="title"
                render={({ field, fieldState: { error } }) => (
                  <CInput
                    {...field}
                    id="title"
                    placeholder="Nhập tên Menu..."
                    error={!!error}
                    helperText={error?.message}
                  />
                )}
              />
            </Stack>
            <Stack direction="row" spacing={3}>
              <CFormLabel
                label="Vị trí hiển thị"
                required
                sx={{ marginTop: '0.5rem' }}
              />
              <Controller
                control={control}
                name="display"
                render={({ field }) => (
                  <RadioGroup {...field}>
                    {POSITION_DISPLAY_OPTIONS.map((e) => (
                      <FormControlLabel
                        key={e.id}
                        value={e.value}
                        control={<Radio />}
                        label={e.label}
                      />
                    ))}
                  </RadioGroup>
                )}
              />
            </Stack>
          </Stack>

          <Stack direction="row" spacing={3} mb={2.5}>
            <CFormLabel label="Trạng thái" />
            <Controller
              control={control}
              name="active"
              render={({ field }) => <CSwitch {...field} />}
            />
          </Stack>
        </Paper>
      </Grid>

      <MFeature control={control} />
    </Grid>
  );
};
