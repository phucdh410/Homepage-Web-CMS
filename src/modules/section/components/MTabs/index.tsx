import { useState } from 'react';
import { Tab, Tabs } from '@mui/material';

import {
  MContact,
  MEducationAim,
  MEducationQuality,
  MMasterQuality,
} from '../MTabSubComponents';

import { IMTabsProps } from './types';

const TABS = [
  { id: '1', value: 1, label: 'Timeline' },
  { id: '2', value: 2, label: 'Chất lượng đào tạo' },
  { id: '3', value: 3, label: 'Chất lượng giảng viên' },
  { id: '4', value: 4, label: 'Mục tiêu đào tạo' },
  { id: '5', value: 5, label: 'Các ngành đào tạo' },
  { id: '6', value: 6, label: 'Cơ cấu tổ chức' },
  { id: '7', value: 7, label: 'Bộ môn' },
  { id: '8', value: 8, label: 'Hoạt động' },
  { id: '9', value: 9, label: 'Lãnh đạo qua các thời kỳ' },
  { id: '10', value: 10, label: 'Liên hệ' },
];

interface TabPanelProps {
  children?: React.ReactNode;
  value: number;
  current: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, current, ...other } = props;
  return (
    <div role="tabpanel" hidden={value !== current} {...other}>
      {children}
    </div>
  );
}

export const MTabs: React.FC<IMTabsProps> = ({ control }) => {
  //#region Data
  const [currentTab, setCurrentTab] = useState<number>(1);
  //#endregion

  //#region Event
  const onTabChange = (
    event: React.SyntheticEvent<Element, Event>,
    value: number,
  ) => {
    setCurrentTab(value);
  };
  //#endregion

  //#region Render
  return (
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
        Tab Timeline
      </TabPanel>
      <TabPanel value={2} current={currentTab}>
        <MEducationQuality control={control} />
      </TabPanel>
      <TabPanel value={3} current={currentTab}>
        <MMasterQuality control={control} />
      </TabPanel>
      <TabPanel value={4} current={currentTab}>
        <MEducationAim control={control} />
      </TabPanel>
      <TabPanel value={5} current={currentTab}>
        Tab Các ngành đào tạo
      </TabPanel>
      <TabPanel value={6} current={currentTab}>
        Tab Cơ cấu tổ chức
      </TabPanel>
      <TabPanel value={7} current={currentTab}>
        Tab Bộ môn
      </TabPanel>
      <TabPanel value={8} current={currentTab}>
        Tab Hoạt động
      </TabPanel>
      <TabPanel value={9} current={currentTab}>
        Tab Lãnh đạo qua các thời kỳ
      </TabPanel>
      <TabPanel value={10} current={currentTab}>
        <MContact control={control} />
      </TabPanel>
    </>
  );
  //#endregion
};
