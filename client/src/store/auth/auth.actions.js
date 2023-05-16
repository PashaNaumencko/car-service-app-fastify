import { createAsyncThunk } from '@reduxjs/toolkit';
import { ExceptionMessage, StorageKey } from 'common/enums/enums.js';
import { authApi } from './auth.api';
import { ActionType } from './auth.common';

const login = createAsyncThunk(
  ActionType.LOG_IN,
  async (payload, { extra: { services }, dispatch, rejectWithValue }) => {
    try {
      const { data } = await dispatch(
        authApi.endpoints.login.initiate(payload)
      ).unwrap();

      services.storage.setItem(StorageKey.TOKEN, data.token);

      return data.user;
    } catch (err) {
      return rejectWithValue(
        err?.data.message ?? ExceptionMessage.UNKNOWN_ERROR
      );
    }
  }
);

const register = createAsyncThunk(
  ActionType.REGISTER,
  async (payload, { extra: { services }, dispatch, rejectWithValue }) => {
    try {
      const { data } = await dispatch(
        authApi.endpoints.register.initiate(payload)
      ).unwrap();

      services.storage.setItem(StorageKey.TOKEN, data.token);

      return data.user;
    } catch (err) {
      return rejectWithValue(
        err?.data.message ?? ExceptionMessage.UNKNOWN_ERROR
      );
    }
  }
);

export { login, register };
