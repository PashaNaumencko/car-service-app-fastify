import { HttpMethod, ApiPath, AuthApiPath } from 'common/enums/enums';
import { baseApi } from '../base-api';

export const authApi = baseApi.injectEndpoints({
  endpoints: build => ({
    login: build.mutation({
      query: payload => ({
        method: HttpMethod.POST,
        url: `${ApiPath.AUTH}/${AuthApiPath.LOGIN}`,
        body: payload
      })
    })
  })
});

export const { useLoginMutation } = authApi;
