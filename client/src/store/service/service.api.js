import { HttpMethod, ApiPath, ServicesApiPath } from 'common/enums/enums';
import { baseApi } from '../base-api';

export const serviceApi = baseApi.injectEndpoints({
  endpoints: build => ({
    getServices: build.query({
      query: () => ({
        method: HttpMethod.GET,
        url: `${ApiPath.SERVICES}${ServicesApiPath.ROOT}`
      })
    })
  })
});

export const { useGetServicesQuery } = serviceApi;
