import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { List } from '@mui/material';

import { NAVIGATIONS } from '@/constants/navigations';

import { CCollapse } from './CCollapse';
import { CNavItem } from './CNavItem';
import { NavigationContext } from './navigation-context';

export const CNavigations = () => {
  const { pathname } = useLocation();

  const [current, setCurrent] = useState<string>(pathname.split('/')[1] || '');

  return (
    <NavigationContext.Provider value={{ current, setCurrent }}>
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
    </NavigationContext.Provider>
  );
};
