import {configureStore} from '@reduxjs/toolkit';
import chatReducer from './features/ChatSlice';
import userReducer from './features/UserSlice';
import {setupListeners} from '@reduxjs/toolkit/query';
import {chatApi} from './services/chatApi';

export const store = configureStore({
  reducer: {[chatApi.reducerPath]: chatApi.reducer, chatReducer, userReducer},
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(chatApi.middleware),
});

setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
