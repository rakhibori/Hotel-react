import {configureStore} from '@reduxjs/toolkit';
import { roomsApi } from './services/roomsApi';
import { sampleFoodApi } from './services/sampleFoodApi';
import { sampleRoomApi } from './services/sampleRoomApi';
import { foodsApi } from './services/foodsApi';
import { usersRoomsApi } from './services/usersRoomsApi';
import { usersFoodsApi } from './services/usersFoodsApi';
import counterSlice from './services/counterSlice';

const store = configureStore({
    reducer:{
        [roomsApi.reducerPath]:roomsApi.reducer,
        [sampleFoodApi.reducerPath]:sampleFoodApi.reducer,
        [sampleRoomApi.reducerPath]:sampleRoomApi.reducer,
        [foodsApi.reducerPath]:foodsApi.reducer,
        [usersRoomsApi.reducerPath]:usersRoomsApi.reducer,
        [usersFoodsApi.reducerPath]:usersFoodsApi.reducer,
        counter:counterSlice
    },
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(roomsApi.middleware, sampleFoodApi.middleware, sampleRoomApi.middleware, foodsApi.middleware, usersRoomsApi.middleware, usersFoodsApi.middleware),
})

export default store;


