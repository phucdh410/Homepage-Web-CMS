import { useState } from 'react';
import { AccountCircle } from '@mui/icons-material';
import {
  Box,
  ButtonBase,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from '@mui/material';

import { tryLogout } from '@/axios/index';

export const CProfile = () => {
  //#region Data
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = !!anchorEl;
  //#endregion

  //#region Event
  const toggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (anchorEl !== e.currentTarget) {
      setAnchorEl(e.currentTarget);
    }
  };

  const close = () => setAnchorEl(null);

  const onLogout = async () => {
    setAnchorEl(null);

    await tryLogout();
  };
  //#endregion

  //#region Render
  return (
    <>
      <ButtonBase onClick={toggle} onMouseOver={toggle}>
        <Stack direction="row" spacing={1} alignItems="center">
          <AccountCircle sx={{ height: '1.5em', width: '1.5em' }} />
          <Box>
            <Typography fontSize="1.2rem" fontWeight={600}>
              Đặng Hoàng Phúc
            </Typography>
            <Typography fontSize={14}>Administrator</Typography>
          </Box>
        </Stack>
      </ButtonBase>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClick={close}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
        MenuListProps={{ onMouseLeave: close }}
      >
        <MenuItem onClick={onLogout} sx={{ minWidth: '200px' }}>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
  //#endregion
};
