import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ENV } from 'common/enums/enums.js';
import { storage } from 'services/services';

const baseQuery = fetchBaseQuery({
  baseUrl: ENV.API_PATH,
  prepareHeaders: headers => {
    const token = storage.getItem('token');
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  }
});

const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery,
  endpoints: () => ({}),
  tagTypes: ['Sign']
});

export { baseApi };
