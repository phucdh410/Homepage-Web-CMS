import { useState } from 'react';
import { ArrowCircleDown, ArrowCircleUp } from '@mui/icons-material';
import {
  CircularProgress,
  Collapse,
  FormControlLabel,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Radio,
} from '@mui/material';

import { ICSelectModalProps } from './types';

interface ICSelectItemProps extends ICSelectModalProps {
  data: { id: string; label: string; isChildren?: boolean };
}

const SUB1 = [
  { id: '2.1', label: 'Thạc sĩ' },
  { id: '2.2', label: 'Tiến sĩ' },
  { id: '2.3', label: 'Chương trình' },
];

export const CSelectItem: React.FC<ICSelectItemProps> = ({
  value,
  onChange,
  data,
}) => {
  //#region Ref
  //#endregion

  //#region Data
  const [loading, setLoading] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);
  const [subData, setSubData] = useState<
    { id: string; label: string; isChildren?: boolean }[]
  >([]);
  //#endregion

  //#region Event
  const onGetData = async () => {
    setLoading(true);
    setTimeout(() => {
      setSubData(SUB1);
      setShow(true);
      setLoading(false);
    }, 1000);
  };
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
        selected={data.label === value}
        disableRipple
        disableTouchRipple
      >
        <FormControlLabel
          value={data.label}
          control={<Radio />}
          label=""
          sx={{ mr: 0 }}
        />
        <ListItemText primary={data.label} />
        {data?.isChildren &&
          (loading ? (
            <CircularProgress
              sx={{ height: '20px!important', width: '20px!important' }}
            />
          ) : show ? (
            <IconButton onClick={() => setShow(false)}>
              <ArrowCircleUp />
            </IconButton>
          ) : (
            <IconButton onClick={onGetData}>
              <ArrowCircleDown />
            </IconButton>
          ))}
      </ListItemButton>
      <Collapse in={show} timeout="auto">
        <List sx={{ ml: 3 }}>
          {subData?.map((e) => (
            <CSelectItem
              key={e.id}
              value={value}
              onChange={onChange}
              data={e}
            />
          ))}
        </List>
      </Collapse>
    </>
  );
  //#endregion
};
