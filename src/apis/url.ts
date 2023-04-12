export const FILES = {
  UPLOAD: '/files/upload',
};

export const PERMISSIONS = {
  GET_PERMISSIONS: '/permissions',
};

export const AUTH = {
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',
  GET_PROFILE: '/auth/get-profile',
  LOGOUT: '/auth/logout',
  REFETCH_TOKEN: '/auth/refetch',
};

export const USERS = {
  GET_USERS: '/users/all',
  GET_USER_BY_ID: '/users', // :id
  UPDATE_USER: '/users', // :id
  DELETE_USER: '/users', // :id
  UPDATE_USER_STATUS: '/users/active', // :id
};

export const BANNERS = {
  CREATE_BANNER: '/banners',
  GET_BANNERS: '/banners/all',
  GET_BANNER_BY_ID: '/banners', // :id
  UPDATE_BANNER: '/banners', // :id
  DELETE_BANNER: '/banners', // :id
};

export const NOTIFICATIONS = {
  CREATE_NOTIFICATION: '/notifications',
  GET_NOTIFICATIONS: '/notifications/all',
  GET_NOTIFICATION_BY_ID: '/notifications', // :id
  UPDATE_NOTIFICATION: '/notifications', // :id
  DELETE_NOTIFICATION: '/notifications', // :id
  UPDATE_STATUS: '/notifications/status',
};

export const EVENTS = {
  CREATE_EVENT: '/events',
  GET_EVENTS: '/events/all',
  GET_EVENT_BY_ID: '/events', // :id
  UPDATE_EVENT: '/events', // :id
  DELETE_EVENT: '/events', // :id
};
export const EMPLOYEES = {
  GET_EMPLOYEES: '/employees/all',
  CREATE_EMPLOYEE: '/employees',
  GET_EMPLOYEE_BY_ID: '/employees', // :id
  UPDATE_EMPLOYEE: '/employees', // :id
  DELETE_EMPLOYEE: '/employees', // :id
};

export const POSITIONS = {
  CREATE_POSITION: '/positions',
  GET_POSITIONS: '/positions/all',
  UPDATE_POSITION: '/positions', // :id
  DELETE_POSITION: '/positions', // :id
};

export const FOOTER = {
  CREATE_FOOTER: '/footer',
  GET_FOOTER: '/footer',
  UPDATE_FOOTER: '/footer',
};

export const LANGUAGES = {
  CREATE_LANGUAGE: '/notifications',
  GET_LANGUAGES: '/notifications/all',
  UPDATE_LANGUAGE: '/notifications', // :id
  DELETE_LANGUAGE: '/notifications', // :id
};
