import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const usersRoomsApi = createApi({
    reducerPath: 'usersRoomsApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3030'}),
    endpoints: (builder)=>({
        getUsersRooms: builder.query({
            query:()=> 'usersRooms',
            providesTags: ['usersRooms']
        }),


        createUsersRooms: builder.mutation({
            query:({name, family, mobile, nationalCode, email, stayingTimeHotel, entryDate, exitDate, roomsSelected})=>({
                url: 'usersRooms',
                method: 'POST',
                body: {name, family, mobile, nationalCode, email, stayingTimeHotel, entryDate, exitDate, roomsSelected}
            }),
            invalidatesTags: ['usersRooms']
        }),

        updateUsersRooms: builder.mutation({
            query:({id, name, family, mobile, nationalCode, email, stayingTimeHotel, entryDate, exitDate, roomsSelected})=>({
                url: `usersRooms/${id}`,
                method: 'PUT',
                body: {name, family, mobile, nationalCode, email, stayingTimeHotel, entryDate, exitDate, roomsSelected}
            }),
            invalidatesTags: ['usersRooms']
        }),

        removeUsersRooms: builder.mutation({
            query:(id)=>({
                url: `usersRooms/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['usersRooms']
        })
    })
})

export const {useGetUsersRoomsQuery,  useCreateUsersRoomsMutation, useUpdateUsersRoomsMutation, useRemoveUsersRoomsMutation} = usersRoomsApi;