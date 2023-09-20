import { forwardRef } from 'react';
import { Delete } from '@mui/icons-material';
import { IconButton, Stack } from '@mui/material';
import { SimpleTreeItemWrapper } from 'dnd-kit-sortable-tree';

import { IMTreeItemProps } from './types';

import './index.scss';

export const MTreeItem = forwardRef<HTMLDivElement, IMTreeItemProps>(
  ({ ...props }, ref) => {
    return (
      <SimpleTreeItemWrapper
        {...props}
        ref={ref}
        disableCollapseOnItemClick={true}
        className="menu-tree-item"
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          fontWeight={500}
          fontSize={15}
          width="100%"
        >
          {props.item.label}
          <IconButton onClick={props.onRemove} color="primary">
            <Delete />
          </IconButton>
        </Stack>
      </SimpleTreeItemWrapper>
    );
  },
);
