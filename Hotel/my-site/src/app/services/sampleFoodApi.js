import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const sampleFoodApi = createApi({
    reducerPath: 'sampleFoodApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3030'}),
    endpoints: (builder)=>({
        getSampleFood: builder.query({
            query:()=> 'sampleFood',
            providesTags: ['sampleFood']
        }),
    })
})

export const {useGetSampleFoodQuery} = sampleFoodApi;