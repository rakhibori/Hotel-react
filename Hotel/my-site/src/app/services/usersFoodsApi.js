import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const usersFoodsApi = createApi({
    reducerPath: 'usersFoodsApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3030'}),
    endpoints: (builder)=>({
        getUsersFoods: builder.query({
            query:()=> 'usersFoods',
            providesTags: ['usersFoods']
        }),


        createUsersFoods: builder.mutation({
            query:({name, family, mobile, nationalCode, email, orderDate, roomNumber, foodSelected})=>({
                url: 'usersFoods',
                method: 'POST',
                body: {name, family, mobile, nationalCode, email, orderDate, roomNumber, foodSelected}
            }),
            invalidatesTags: ['usersFoods']
        }),

        updateUsersFoods: builder.mutation({
            query:({id, name, family, mobile, nationalCode, email, orderDate, roomNumber, foodSelected})=>({
                url: `usersFoods/${id}`,
                method: 'PUT',
                body: {name, family, mobile, nationalCode, email, orderDate, roomNumber, foodSelected}
            }),
            invalidatesTags: ['usersFoods']
        }),

        removeUsersFoods: builder.mutation({
            query:(id)=>({
                url: `usersFoods/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['usersFoods']
        })
    })
})

export const {useGetUsersFoodsQuery,  useCreateUsersFoodsMutation, useUpdateUsersFoodsMutation, useRemoveUsersFoodsMutation} = usersFoodsApi;