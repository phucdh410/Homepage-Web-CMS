import { Navigate } from 'react-router-dom';
import axios from 'axios';

import { logout, profile } from '@/apis/auth.api';
import { AUTH } from '@/apis/url';
import { store } from '@/redux/';
import { setProfile, setToken } from '@/slices/auth/auth.slice';
import { setPermissions } from '@/slices/permission';

import { PERMISSIONS_MOCK } from '../../PERMISSIONS_MOCK';
import { objectToQueryString } from '../funcs';

import { post } from './request';

const apiInstance = axios.create({
  baseURL: '/v1',
  timeout: import.meta.env.VITE_API_TIMEOUT,
  paramsSerializer: {
    serialize: (params) => objectToQueryString(params),
  },
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
  (config) => {
    config.headers['x-access-token'] =
      '673nXrBKp2cPE4OGBFM_iLCBggCgfDJg_OqginnBF1U.Qf4ITM1AjN3kjNxojIwhXZiwCOyEzMxATN5YTM6ICdhlmIsIibqOcaWBCaul2UiojIl1WYOBXdvJ3ZiwSO5kjOigXYNxWZ2VGbiwiImZjNkJmM0MzMhljZwADZyITMzQmY0MWNiojIklkcvpWYtJCLiIDN2YTY2ATYwQDM1EGNwEGMmZjZ3QzY1IiOiQWS05WZtRnchBXZkJCLiUWOzUGMhhTY5kTNzQzY0gTOkNGN4QzY1IiOiQWSzNXYsNmIsICaulWTggmbhhGVg0moDzkI6ISZtFmbsxWdmJCLigGdshmbp1mI6ISZtFmbyV2c1JCLiMWM2YTY2ATYwQDM1EGNwEGZzQWZ3QzY1IiOiQWafJye.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9';
    return config;
  },
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
    const _permissions = {
      '1': false,
      '2': false,
      '3': false,
      '4': false,
      '5': false,
      '6': false,
      '7': false,
      '8': false,
      '9': false,
      '10': false,
    };

    PERMISSIONS_MOCK.forEach((e) => {
      _permissions[e.permission_code] = e.allowed;
    });

    store.dispatch(setPermissions(_permissions));

    setAuthToken(token);

    const res = await profile();

    store.dispatch(setProfile({ ...res.data }));

    //Open below code for assign permissions
    // const { permissions } = res.data.data;

    // const _permissions = {
    //   '1': false,
    //   '2': false,
    //   '3': false,
    //   '4': false,
    //   '5': false,
    //   '6': false,
    //   '7': false,
    //   '8': false,
    //   '9': false,
    //   '10': false,
    // };

    // permissions.forEach((e) => {
    //   _permissions[e.permission_code] = e.allowed;
    // });

    store.dispatch(setPermissions(_permissions));

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
    //#region Xóa cái này khi ráp Api real
    const _permissions = {
      '1': false,
      '2': false,
      '3': false,
      '4': false,
      '5': false,
      '6': false,
      '7': false,
      '8': false,
      '9': false,
      '10': false,
    };

    PERMISSIONS_MOCK.forEach((e) => {
      _permissions[e.permission_code] = e.allowed;
    });

    store.dispatch(setPermissions(_permissions));
    //#endregion

    await logout();
  } catch (error: any) {
    throw error;
  } finally {
    store.dispatch(setProfile(null));
    store.dispatch(setToken(null));
    // Open below code for clear permissions after logout
    // store.dispatch(setPermissions(null));

    window.localStorage.removeItem('access_token');
    window.localStorage.removeItem('refresh_token');

    return <Navigate to="/login" replace={true} />;
  }
};

export default apiInstance;
