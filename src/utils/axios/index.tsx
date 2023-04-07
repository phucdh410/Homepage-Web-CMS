import { Navigate } from 'react-router-dom';
// import { updateAbility } from '_func/permissions';
import axios from 'axios';

import { logout, profile } from '@/apis/auth.api';
import { AUTH } from '@/apis/url';
import { store } from '@/redux/';
import { setProfile, setToken } from '@/slices/auth/auth.slice';

import { post } from './request';

const apiInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: import.meta.env.VITE_API_TIMEOUT,
});

let isRefetching = false;

const _queue: any[] = [];

const handleRefetch = async (response: any) => {
  if (!isRefetching) {
    isRefetching = true;

    try {
      const res = await refresh();

      const { data } = res;

      isRefetching = false;

      const { refresh_token, access_token } = data;

      store.dispatch(setToken({ refresh_token, access_token }));

      setAuthToken(access_token);

      _queue.forEach(({ resolve }) => resolve());

      return apiInstance({
        ...response.config,
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
    } catch (error: any) {
      _queue.forEach(({ reject }) => reject(error));

      return Promise.reject(error);
    }
  } else {
    // save to use later when refetching done
    return new Promise((resolve, reject) => _queue.push({ resolve, reject }))
      .then(() => Promise.reject('false'))
      .catch((error) => Promise.reject(error));
  }
};

apiInstance.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error),
);

apiInstance.interceptors.response.use(
  (response) => {
    if (response.status === 205) return handleRefetch(response);

    return response;
  },
  (error) => {
    if (error?.constructor?.name === 'Cancel') {
      return error?.message ?? 'Cancel';
    }
    // if (error?.message === 'canceled') return;

    if (error?.response?.status === 401) return handleRefetch(error);

    if (error?.response?.status === 403) {
      console.log('Thiếu quyền truy cập');

      return Promise.reject(error);
    }

    return Promise.reject(error);
  },
);

export const setAuthToken = (token: string) => {
  if (token) apiInstance.defaults.headers['Authorization'] = `Bearer ${token}`;
  else delete apiInstance.defaults.headers.common['Authorization'];
};

export const getProfile = async (token: string) => {
  try {
    setAuthToken(token);

    const res = await profile();

    // updateAbility(role_id);

    store.dispatch(setProfile({ ...res.data }));

    return res;
  } catch (error: any) {
    tryLogout();
  }
};

const refresh = () => {
  const refresh_token = window.localStorage.getItem('refresh_token');

  return post(AUTH.REFETCH_TOKEN, { refresh_token });
};

export const tryLogout = async () => {
  try {
    await logout();
  } catch (error: any) {
    throw error;
  } finally {
    store.dispatch(setProfile(null));
    store.dispatch(setToken(null));

    window.localStorage.removeItem('access_token');
    window.localStorage.removeItem('refresh_token');

    return <Navigate to="/login" replace={true} />;
  }
};

export default apiInstance;
