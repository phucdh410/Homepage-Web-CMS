import { useState } from 'react';
import { ArrowDropDown, ArrowDropUp } from '@mui/icons-material';
import { TreeItem, TreeView } from '@mui/lab';
import {
  Checkbox,
  FormControlLabel,
  Paper,
  Unstable_Grid2 as Grid,
} from '@mui/material';
import { SortableTree, TreeItems } from 'dnd-kit-sortable-tree';

import { CFormLabel } from '@/controls/';

import { MTreeItem } from './MTreeItem';
import { IMFeatureProps } from './types';

const ar = [
  {
    id: '1',
    label: 'Giới thiệu',
    children: [
      { id: '1.1', label: 'Lịch sử hình thành' },
      {
        id: '1.2',
        label: 'Khoa học công nghệ',
        children: [{ id: '1.2.1', label: 'Tạp chí Khoa học công nghệ' }],
      },
      { id: '1.3', label: 'Ban giám hiệu' },
    ],
  },
  {
    id: '2',
    label: 'Đào tạo',
    children: [{ id: '2.1', label: 'Hợp tác quốc tế' }],
  },
  { id: '3', label: 'Ba công khai' },
];

const arr: TreeItems<any> = [
  { id: '1', label: 'Giới thiệu' },
  {
    id: '2',
    label: 'Đào tạo',
    children: [
      { id: '2.1', label: 'Đại học' },
      { id: '2.2', label: 'Sau Đại học' },
    ],
  },
  { id: '3', label: 'Tuyển sinh' },
];

const Tree = ({ obj }: { obj: any }) => {
  return (
    <TreeItem
      nodeId={obj?.id}
      label={
        <FormControlLabel
          control={<Checkbox onClick={(e) => e.stopPropagation()} />}
          label={obj.label}
        />
      }
      sx={{
        '.MuiTreeItem-content': { flexDirection: 'row-reverse' },
      }}
    >
      {obj?.children &&
        obj?.children?.map((e: any, i: number) => <Tree key={i} obj={e} />)}
    </TreeItem>
  );
};

export const MFeature: React.FC<IMFeatureProps> = ({ control }) => {
  const [data, setData] = useState<TreeItems<any>>(arr);

  return (
    <>
      <Grid lg={6}>
        <Paper variant="wrapper">
          <CFormLabel
            label="Thêm vào Menu"
            required
            sx={{ display: 'block', mb: 2.5 }}
          />
          <TreeView
            defaultCollapseIcon={<ArrowDropDown />}
            defaultExpandIcon={<ArrowDropUp />}
            defaultEndIcon={<div style={{ width: 24 }} />}
          >
            {ar.map((e, i) =>
              e?.children ? (
                <Tree key={i} obj={e} />
              ) : (
                <TreeItem
                  sx={{
                    '.MuiTreeItem-content': { flexDirection: 'row-reverse' },
                  }}
                  key={i}
                  nodeId={e.id}
                  label={
                    <FormControlLabel
                      control={
                        <Checkbox onClick={(e) => e.stopPropagation()} />
                      }
                      label={e.label}
                    />
                  }
                />
              ),
            )}
          </TreeView>
        </Paper>
      </Grid>
      <Grid lg={6}>
        <Paper variant="wrapper">
          <CFormLabel
            label="Menu"
            required
            sx={{ display: 'block', mb: 2.5 }}
          />
          <SortableTree
            items={data}
            onItemsChanged={setData}
            TreeItemComponent={MTreeItem}
          />
        </Paper>
      </Grid>
    </>
  );
};
