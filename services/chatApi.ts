import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {baseUrl} from '../path';
import {ChatStateType} from '../types/chatTypes';

export const chatApi = createApi({
  reducerPath: 'chatApi',
  baseQuery: fetchBaseQuery({baseUrl}),
  endpoints: builder => ({
    getChats: builder.query<ChatStateType, void>({
      query: () => 'chat/getChats',
    }),
  }),
});
export const {useGetChatsQuery} = chatApi;
