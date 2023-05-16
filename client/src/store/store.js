import { configureStore } from '@reduxjs/toolkit';
import { http, storage, notification } from 'services/services.js';
// import { errorHandlerMiddleware } from './middlewares/middlewares';
import { authReducer } from './auth/auth';
import { baseApi } from './base-api';

const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    auth: authReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          services: {
            http,
            storage,
            notification
          }
        }
      }
    }).concat([baseApi.middleware])
});

export { store };
