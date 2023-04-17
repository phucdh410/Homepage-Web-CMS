import { useState } from 'react';
import { Tab, Tabs } from '@mui/material';

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

export const MTabs = () => {
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
    <Tabs value={currentTab} onChange={onTabChange}>
      {TABS.map((e) => (
        <Tab key={e.id} value={e.value} label={e.label} />
      ))}
    </Tabs>
  );
  //#endregion
};
