import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const sampleRoomApi = createApi({
    reducerPath: 'sampleRoomApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3030'}),
    endpoints: (builder)=>({
        getSampleRoom: builder.query({
            query:()=> 'sampleRoom',
            providesTags: ['sampleRoom']
        }),

        updateSampleRoom: builder.mutation({
            query:({id, link, qty, image, name, bed, people, extera_person, capacity, additional_service, breakfast, price, description, possibilities})=>({
                url: `sampleRoom/${id}`,
                method: 'PUT',
                body: {link, qty, image, name, bed, people, extera_person, capacity, additional_service, breakfast, price, description, possibilities}
            }),
            invalidatesTags: ['sampleRoom']
        }),
    })
})

export const {useGetSampleRoomQuery, useUpdateSampleRoomMutation} = sampleRoomApi;