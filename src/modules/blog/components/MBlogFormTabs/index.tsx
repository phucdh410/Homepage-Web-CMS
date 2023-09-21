import { useState } from 'react';
import { Paper, Tab, Tabs } from '@mui/material';

import { MTabForm } from './MTabForm';
import { IMBlogFormTabProps } from './types';

export const MBlogFormTabs: React.FC<IMBlogFormTabProps> = ({ control }) => {
  //#region Data
  const [tab, setTab] = useState<'vi' | 'en'>('vi');
  //#endregion

  //#region Event
  const onTabChange = (event: React.SyntheticEvent, newValue: 'vi' | 'en') => {
    setTab(newValue);
  };
  //#endregion

  //#region Render
  return (
    <Paper variant="wrapper" sx={{ mb: 1 }}>
      <Tabs value={tab} onChange={onTabChange} sx={{ mb: 1.5 }}>
        <Tab value="vi" label="Tiếng Việt" />
        <Tab value="en" label="Tiếng Anh" />
      </Tabs>
      <MTabForm control={control} lang={tab} />
    </Paper>
  );
  //#endregion
};
