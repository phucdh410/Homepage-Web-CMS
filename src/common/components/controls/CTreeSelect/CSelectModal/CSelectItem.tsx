import { useState } from 'react';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import {
  Collapse,
  FormControlLabel,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Radio,
} from '@mui/material';

import { ICSelectModalProps, IOption } from './types';

interface ICSelectItemProps extends Omit<ICSelectModalProps, 'options'> {
  data: IOption;
}

export const CSelectItem: React.FC<ICSelectItemProps> = ({
  value,
  onChange,
  data,
}) => {
  //#region Ref
  //#endregion

  //#region Data
  const [show, setShow] = useState<boolean>(false);
  //#endregion

  //#region Event
  //#endregion

  //#region Cycle
  //#endregion

  //#region Render
  return (
    <>
      <ListItemButton
        key={data.id}
        sx={{
          borderRadius: '15px',
          py: 0,
          '&.Mui-selected': { backgroundColor: '#DAEAF8' },
        }}
        selected={data.id === value}
        disableRipple
        disableTouchRipple
      >
        <FormControlLabel
          value={data.id}
          control={<Radio />}
          label=""
          sx={{ mr: 0 }}
        />
        <ListItemText primary={data.name} />
        {data?.children &&
          (show ? (
            <IconButton onClick={() => setShow(false)}>
              <KeyboardArrowUp />
            </IconButton>
          ) : (
            <IconButton onClick={() => setShow(true)}>
              <KeyboardArrowDown />
            </IconButton>
          ))}
      </ListItemButton>
      {data?.children && (
        <Collapse in={show} timeout="auto">
          <List sx={{ ml: 3 }}>
            {data.children.map((e) => (
              <CSelectItem
                key={e.id}
                value={value}
                onChange={onChange}
                data={e}
              />
            ))}
          </List>
        </Collapse>
      )}
    </>
  );
  //#endregion
};
