import { HttpMethod, ApiPath, WorkshopsApiPath } from 'common/enums/enums';
import { baseApi } from '../base-api';

export const workshopApi = baseApi.injectEndpoints({
  endpoints: build => ({
    getWorkshops: build.query({
      query: () => ({
        method: HttpMethod.GET,
        url: `${ApiPath.WORKSHOPS}${WorkshopsApiPath.ROOT}`
      })
    }),
    getWorkshopById: build.query({
      query: id => ({
        method: HttpMethod.GET,
        url: `${ApiPath.WORKSHOPS}/${id}`
      })
    })
  })
});

export const { useGetWorkshopByIdQuery, useGetWorkshopsQuery } = workshopApi;
