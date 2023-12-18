import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const foodsApi = createApi({
    reducerPath: 'foodsApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3030'}),
    endpoints: (builder)=>({
        getFoods: builder.query({
            query:()=> 'foods',
            providesTags: ['foods']
        }),


        createFood: builder.mutation({
            query:({image, name, food_contents, price, category, type, resturant})=>({
                url: 'foods',
                method: 'POST',
                body: {image, name, food_contents, price, category, type, resturant}
            }),
            invalidatesTags: ['foods']
        }),

        updateFood: builder.mutation({
            query:({id, qty, image, name, food_contents, price, category, type, resturant})=>({
                url: `foods/${id}`,
                method: 'PUT',
                body: {qty, image, name, food_contents, price, category, type, resturant}
            }),
            invalidatesTags: ['foods']
        }),

        removeFood: builder.mutation({
            query:(id)=>({
                url: `foods/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['foods']
        })
    })
})

export const {useGetFoodsQuery,  useCreateFoodMutation, useUpdateFoodMutation, useRemoveFoodMutation} = foodsApi;