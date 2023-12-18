import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const roomsApi = createApi({
    reducerPath: 'roomsApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3030'}),
    endpoints: (builder)=>({
        getRooms: builder.query({
            query:()=> 'rooms',
            providesTags: ['rooms']
        }),

        getSampleRooms: builder.query({
            query:()=> `rooms?_limit=3`,
            providesTags: ['rooms']
        }),

        createRoom: builder.mutation({
            query:({image, name, link, bed, people, extera_person, capacity, oldEntryDate, oldExitDate, additional_service, breakfast, price, description, possibilities})=>({
                url: 'rooms',
                method: 'POST',
                body: {image, name, link, bed, people, extera_person, capacity, oldEntryDate, oldExitDate, additional_service, breakfast, price, description, possibilities}
            }),
            invalidatesTags: ['rooms']
        }),

        updateRoom: builder.mutation({
            query:({id, qty, image, name, link, bed, people, extera_person, capacity, oldEntryDate, oldExitDate, additional_service, breakfast, price, description, possibilities})=>({
                url: `rooms/${id}`,
                method: 'PUT',
                body: {qty, image, name, link, bed, people, extera_person, capacity, oldEntryDate, oldExitDate, additional_service, breakfast, price, description, possibilities}
            }),
            invalidatesTags: ['rooms']
        }),

        removeRoom: builder.mutation({
            query:(id)=>({
                url: `rooms/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['rooms']
        })
    })
})

export const {useGetRoomsQuery, useGetSampleRoomsQuery, useCreateRoomMutation, useUpdateRoomMutation, useRemoveRoomMutation} = roomsApi;