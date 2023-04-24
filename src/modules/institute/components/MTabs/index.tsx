import { useState } from 'react';
import { useWatch } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import { Tab, Tabs } from '@mui/material';

import { queryStringToObject } from '@/funcs/';
import { useNavigateQuery } from '@/hooks/';

import {
  MActivity,
  MContact,
  MMission,
  MOrgStructure,
  MSchoolMaster,
  MTimeline,
} from '../MTabSubComponents';

import { IMTabsProps } from './types';

const TABS = [
  { id: '1', value: 1, label: 'Timeline' },
  { id: '2', value: 2, label: 'Chức năng - Nhiệm vụ' },
  { id: '3', value: 3, label: 'Cơ cấu tổ chức' },
  { id: '4', value: 4, label: 'Hoạt động' },
  { id: '5', value: 5, label: 'Lãnh đạo qua các thời kỳ' },
  { id: '6', value: 6, label: 'Liên hệ' },
];

interface TabPanelProps {
  children?: React.ReactNode;
  value: number;
  current: number;
}

// IMPORTANT: value===current && ...render tab content
// để tránh các lỗi về DOM đối với component đó khi tab đó không active
function TabPanel(props: TabPanelProps) {
  const { children, value, current, ...other } = props;
  return (
    <div role="tabpanel" hidden={value !== current} {...other}>
      {value === current && children}
    </div>
  );
}

export const MTabs: React.FC<IMTabsProps> = ({ control }) => {
  //#region Data
  const location = useLocation();
  const { navigateWithNewQuery } = useNavigateQuery();
  const queryParams = queryStringToObject(location.search);

  const [currentTab, setCurrentTab] = useState<number>(
    Number(queryParams?.tab) || 1,
  );

  const displayValue = useWatch({ control, name: 'display' });
  //#endregion

  //#region Event
  const onTabChange = (
    event: React.SyntheticEvent<Element, Event>,
    value: number,
  ) => {
    navigateWithNewQuery({ tab: value });
    setCurrentTab(value);
  };
  //#endregion

  //#region Render
  return displayValue?.toString() !== '1' ? null : (
    <>
      <Tabs
        value={currentTab}
        onChange={onTabChange}
        sx={{
          '.MuiTabs-flexContainer': {
            flexWrap: 'wrap',
            justifyContent: 'space-between',
          },
          mb: 3,
        }}
        TabIndicatorProps={{ sx: { display: 'none' } }}
      >
        {TABS.map((e, i) => (
          <Tab
            key={e.id}
            value={e.value}
            label={e.label}
            sx={{
              fontSize: '16px',
              '&.Mui-selected': {
                borderBottom: '2px solid #124874',
                fontWeight: 600,
              },
            }}
          />
        ))}
      </Tabs>

      <TabPanel value={1} current={currentTab}>
        <MTimeline control={control} />
      </TabPanel>
      <TabPanel value={2} current={currentTab}>
        <MMission control={control} />
      </TabPanel>
      <TabPanel value={3} current={currentTab}>
        <MOrgStructure control={control} />
      </TabPanel>
      <TabPanel value={4} current={currentTab}>
        <MActivity control={control} />
      </TabPanel>
      <TabPanel value={5} current={currentTab}>
        <MSchoolMaster control={control} />
      </TabPanel>
      <TabPanel value={6} current={currentTab}>
        <MContact control={control} />
      </TabPanel>
    </>
  );
  //#endregion
};
