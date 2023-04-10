import { List } from '@mui/material';

import { NAVIGATIONS } from '@/constants/navigations';

import { CCollapse } from './CCollapse';
import { CNavItem } from './CNavItem';

export const CNavigations = () => {
  return (
    <List sx={{ padding: '10px 15px' }}>
      {NAVIGATIONS.map((nav, i) =>
        nav?.isChildren && nav?.children ? (
          <CCollapse
            key={nav.title}
            data={nav}
            index={i}
            dropdownList={nav.children}
          />
        ) : (
          <CNavItem key={nav.title} data={nav} index={i} />
        ),
      )}
    </List>
  );
};
