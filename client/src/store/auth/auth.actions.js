import { createAsyncThunk } from '@reduxjs/toolkit';
import { ExceptionMessage, HttpCode, StorageKey } from 'common/enums/enums.js';
import { HttpError } from 'exceptions/exceptions';
import { authApi } from './auth.api';
import { ActionType } from './auth.common';

const login = createAsyncThunk(
  ActionType.LOG_IN,
  async (payload, { extra: { services }, dispatch, rejectWithValue }) => {
    // try {
    const { data } = await dispatch(authApi.endpoints.login.initiate(payload));

    services.storage.setItem(StorageKey.TOKEN, data.token);

    return data.user;
    // } catch (err) {
    //   return rejectWithValue(err?.data.message);
    // }
  }
);

const register = createAsyncThunk(
  ActionType.REGISTER,
  async (payload, { extra: { services }, dispatch, rejectWithValue }) => {
    // try {
    const { data } = await dispatch(authApi.endpoints.register.initiate(payload));

    services.storage.setItem(StorageKey.TOKEN, data.token);

    return data.user;
    // } catch (err) {
    //   console.log('err', err);
    //   return rejectWithValue(err?.data.message);
    // }
  }
);

const logout = createAsyncThunk(ActionType.LOG_OUT, (_request, { extra: { services } }) => {
  services.storage.removeItem(StorageKey.TOKEN);

  return null;
});

const loadCurrentUser = createAsyncThunk(
  ActionType.LOAD_CURRENT_USER,
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const { data } = await dispatch(authApi.endpoints.loadCurrentUser.initiate());
      return data;
    } catch (err) {
      const isHttpError = err instanceof HttpError;

      if (isHttpError && err.status === HttpCode.UNAUTHORIZED) {
        dispatch(logout());
      }

      return rejectWithValue(err?.message);
    }
  }
);

export { login, logout, register, loadCurrentUser };
