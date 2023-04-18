import { useState } from 'react';
import { ArrowDropDown, ArrowDropUp, ArrowRightAlt } from '@mui/icons-material';
import { TreeItem, TreeView } from '@mui/lab';
import {
  Avatar,
  Box,
  ButtonBase,
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

export const MFeature: React.FC<IMFeatureProps> = ({ control }) => {
  const [dataCheck, setDataCheck] = useState<any[]>(ar);
  const [data, setData] = useState<TreeItems<any>>(arr);

  const onCheckboxChange = (
    event: React.SyntheticEvent<Element, Event>,
    checked: boolean,
    id: string,
  ) => {
    console.log('id :', id, ' checked: ', checked);
  };

  const Tree = ({ obj }: { obj: any }) => {
    return (
      <TreeItem
        nodeId={obj?.id}
        label={
          <FormControlLabel
            control={<Checkbox onClick={(e) => e.stopPropagation()} />}
            label={obj.label}
            onChange={(event, checked) =>
              onCheckboxChange(event, checked, obj.id)
            }
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

  return (
    <>
      <Grid lg={6}>
        <Paper variant="wrapper">
          <CFormLabel label="Thêm vào Menu" required sx={{ mb: 1.5 }} />
          <TreeView
            disableSelection
            defaultCollapseIcon={<ArrowDropUp />}
            defaultExpandIcon={<ArrowDropDown />}
            defaultEndIcon={<div style={{ width: 24 }} />}
          >
            {dataCheck.map((e, i) =>
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
                      onChange={(event, checked) =>
                        onCheckboxChange(event, checked, e.id)
                      }
                      label={e.label}
                    />
                  }
                />
              ),
            )}
          </TreeView>
          <Box textAlign="right" mt={2}>
            <ButtonBase sx={{ borderRadius: '10px' }}>
              <Avatar
                variant="square"
                sx={{
                  backgroundColor: (theme) => theme.palette.primary.main,
                  borderRadius: 'inherit',
                }}
              >
                <ArrowRightAlt
                  sx={{ color: (theme) => theme.palette.primary.contrastText }}
                />
              </Avatar>
            </ButtonBase>
          </Box>
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
