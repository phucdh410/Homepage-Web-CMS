import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import { alpha, styled } from '@mui/material/styles';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
import { TransitionProps } from '@mui/material/transitions';
import Typography from '@mui/material/Typography';
import { TreeView } from '@mui/x-tree-view';
import {
  TreeItem,
  treeItemClasses,
  TreeItemContentProps,
  TreeItemProps,
  useTreeItem,
} from '@mui/x-tree-view/TreeItem';
import clsx from 'clsx';

// const data = [
//   {
//     id: 1,
//     title: 'title 1',
//     children: [
//       {
//         id: 11,
//         title: 'title 11',
//         children: [{ id: 111, title: 'title 111' }],
//       },
//     ],
//   },
//   { id: 2, title: 'title 2', children: [{ id: 22, title: 'title 22' }] },
//   { id: 3, title: 'title 3', children: [{ id: 33, title: 'title 33' }] },
// ];

const Tree = ({ data }: any) => (
  <>
    {data &&
      data.map((item: any) => (
        <StyledTreeItem nodeId={item.id} label={item.label}>
          {item.children && <Tree data={item.children} />}
        </StyledTreeItem>
      ))}
  </>
);

const CustomContent = React.forwardRef(function CustomContent(
  props: TreeItemContentProps,
  ref,
) {
  const {
    classes,
    className,
    label,
    nodeId,
    icon: iconProp,
    expansionIcon,
    displayIcon,
  } = props;

  const {
    disabled,
    expanded,
    selected,
    focused,
    handleExpansion,
    handleSelection,
    preventSelection,
  } = useTreeItem(nodeId);

  const icon = iconProp || expansionIcon || displayIcon;

  const handleMouseDown = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    preventSelection(event);
  };

  const handleExpansionClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    handleExpansion(event);
  };

  const handleSelectionClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    handleSelection(event);
  };

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      className={clsx(className, classes.root, {
        [classes.expanded]: expanded,
        [classes.selected]: selected,
        [classes.focused]: focused,
        [classes.disabled]: disabled,
      })}
      onMouseDown={handleMouseDown}
      ref={ref as React.Ref<HTMLDivElement>}
    >
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
      <div onClick={handleExpansionClick} className={classes.iconContainer}>
        {icon}
      </div>
      <Typography
        onClick={handleSelectionClick}
        component="div"
        className={classes.label}
      >
        {label}
      </Typography>
    </div>
  );
});

// const CustomTreeItem = React.forwardRef(function CustomTreeItem(
//   props: TreeItemProps,
//   ref: React.Ref<HTMLLIElement>,
// ) {
//   return <TreeItem ContentComponent={CustomContent} {...props} ref={ref} />;
// });
function MinusSquare(props: SvgIconProps) {
  return (
    <SvgIcon fontSize="inherit" style={{ width: 14, height: 14 }} {...props}>
      {/* tslint:disable-next-line: max-line-length */}
      <path d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 11.023h-11.826q-.375 0-.669.281t-.294.682v0q0 .401.294 .682t.669.281h11.826q.375 0 .669-.281t.294-.682v0q0-.401-.294-.682t-.669-.281z" />
    </SvgIcon>
  );
}

function PlusSquare(props: SvgIconProps) {
  return (
    <SvgIcon fontSize="inherit" style={{ width: 14, height: 14 }} {...props}>
      {/* tslint:disable-next-line: max-line-length */}
      <path d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 12.977h-4.923v4.896q0 .401-.281.682t-.682.281v0q-.375 0-.669-.281t-.294-.682v-4.896h-4.923q-.401 0-.682-.294t-.281-.669v0q0-.401.281-.682t.682-.281h4.923v-4.896q0-.401.294-.682t.669-.281v0q.401 0 .682.281t.281.682v4.896h4.923q.401 0 .682.281t.281.682v0q0 .375-.281.669t-.682.294z" />
    </SvgIcon>
  );
}

function CloseSquare(props: SvgIconProps) {
  return (
    <SvgIcon
      className="close"
      fontSize="inherit"
      style={{ width: 14, height: 14 }}
      {...props}
    >
      {/* tslint:disable-next-line: max-line-length */}
      <path d="M17.485 17.512q-.281.281-.682.281t-.696-.268l-4.12-4.147-4.12 4.147q-.294.268-.696.268t-.682-.281-.281-.682.294-.669l4.12-4.147-4.12-4.147q-.294-.268-.294-.669t.281-.682.682-.281.696 .268l4.12 4.147 4.12-4.147q.294-.268.696-.268t.682.281 .281.669-.294.682l-4.12 4.147 4.12 4.147q.294.268 .294.669t-.281.682zM22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0z" />
    </SvgIcon>
  );
}

function TransitionComponent(props: TransitionProps) {
  return <Collapse {...props} />;
}

const CustomTreeItem = React.forwardRef(
  (props: TreeItemProps, ref: React.Ref<HTMLLIElement>) => (
    <TreeItem
      ContentComponent={CustomContent}
      {...props}
      TransitionComponent={TransitionComponent}
      ref={ref}
    />
  ),
);

const StyledTreeItem = styled(CustomTreeItem)(({ theme }) => ({
  [`& .${treeItemClasses.iconContainer}`]: {
    '& svg:not(.close):hover': {
      color: 'green',
      transition: 'color 0.1s ease-in',
    },
    '& .close': {
      opacity: 0.3,
    },
  },
  [`& .${treeItemClasses.group}`]: {
    marginLeft: 15,
    paddingLeft: 18,
    borderLeft: `1px dashed ${alpha(theme.palette.text.primary, 0.4)}`,
  },
}));

export function CTreeView({ selected, setSelected, data }: any) {
  const handleSelect = (event: React.SyntheticEvent, nodeIds: string[]) => {
    setSelected(nodeIds);
  };
  return (
    <Box sx={{ minHeight: 180, flexGrow: 1, maxWidth: 300 }}>
      <TreeView
        aria-label="icon expansion"
        selected={selected}
        onNodeSelect={handleSelect}
        // defaultCollapseIcon={<ExpandMoreIcon />}
        // defaultExpandIcon={<ChevronRightIcon />}
        defaultCollapseIcon={<MinusSquare />}
        defaultExpandIcon={<PlusSquare />}
        defaultEndIcon={<CloseSquare />}
      >
        <Tree data={data} />
      </TreeView>
    </Box>
  );
}
