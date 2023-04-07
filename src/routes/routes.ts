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
};
