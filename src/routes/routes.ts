export const ROUTES = {
  LOGIN: '/login',

  HOME: '/',

  USERS: {
    LIST: '/users',
    CREATE: '/users/detail',
    UPDATE: '/users/detail/:id',
  },

  HOMEPAGE: {
    BANNERS: {
      LIST: '/homepage/banners',
      CREATE: '/homepage/banners/detail',
      UPDATE: '/homepage/banners/detail/:id', // ?language_id=
    },
    NOTIFICATIONS: {
      LIST: '/homepage/notifications',
    },
    EVENTS: {
      LIST: '/homepage/events',
      CREATE: '/homepage/events/detail',
      UPDATE: '/homepage/events/detail/:id', // ?language_id=
    },
    LINKS: {
      ROOT: '/homepage/links',
    },
  },

  INFORMATION: {
    SECTION_GROUPS: {
      ROOT: '/information/section-groups',
    },
    SECTIONS: {
      LIST: '/information/sections',
      CREATE: '/information/sections/detail',
      UPDATE: '/information/sections/detail/:id',
    },
  },

  MENUS: {
    PAGES: {
      LIST: '/menu/pages',
      CREATE: '/menu/pages/detail',
      UPDATE: '/menu/pages/detail/:id', // ?language_id=
    },
    FOLDERS: {
      LIST: '/menu/folders',
      CREATE: '/menu/folders/detail',
      UPDATE: '/menu/folders/detail/:id', // ?language_id=
    },
    MENUS: {
      LIST: '/menu/menus',
      CREATE: '/menu/menus/detail',
      UPDATE: '/menu/menus/detail/:id', // ?language_id=
    },
  },

  POSTS: {
    LIST: '/posts',
    CREATE: '/posts/detail',
    UPDATE: '/posts/detail/:id',
  },

  SCHEDULES: {
    LIST: '/schedules',
    CREATE: '/schedules/detail',
    UPDATE: '/schedules/detail/:id',
  },

  STAFF: {
    EMPLOYEES: {
      LIST: '/staff/employees',
      CREATE: '/staff/employees/detail',
      UPDATE: '/staff/employees/detail/:id', // ?language_id=
    },
    POSITIONS: {
      LIST: '/staff/positions',
    },
  },

  FOOTER: {
    ROOT: '/footer',
  },
  LANGUAGES: {
    LIST: '/languages',
  },
};
