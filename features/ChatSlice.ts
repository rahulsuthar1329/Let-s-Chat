import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {
  ChatStateType,
  ChatType,
  MessageType,
  UpdateChatPayload,
} from '../types/chatTypes';

const initialState: ChatStateType = {
  chats: [
    {
      _id: '',
      chatName: '',
      latestMessage: '',
      profileImage: '',
      unseenMessageCount: 0,
      users: [],
      isGroupChat: false,
      lastSeen: new Date(),
      isActive: true,
      adminUsers: [],
      messages: [],
    },
  ],
};

const GetChat = (state: ChatType[], chatId: string) =>
  state.find(chat => chat._id === chatId);

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setChats: (state, action: PayloadAction<ChatType[]>) => {
      state.chats = action.payload;
    },
    deleteChat: (state, action: PayloadAction<string>) => {
      state.chats = state.chats.filter(chat => chat._id === action.payload);
    },
    addChat: (state, action: PayloadAction<ChatType>) => {
      state.chats.push(action.payload);
    },
    updateChat: (
      state: ChatStateType,
      action: PayloadAction<UpdateChatPayload>,
    ) => {
      const {chatId, ...property} = action.payload;
      const chat = GetChat(state.chats, action.payload.chatId);
      if (chat) Object.assign(chat, property);
    },
    addMessage: (state, action: PayloadAction<MessageType>) => {
      const chat = GetChat(state.chats, action.payload.chatId);
      chat?.messages.push(action.payload);
    },
    // deleteMessage: (state, action: PayloadAction<DeleteMessagePayload>) => {
    //   const chat = GetChat(state.chats, action.payload.chatId);
    //   chat?.messages = chat?.messages.filter()
    // },
  },
});

export const {setChats, deleteChat, addChat, updateChat} = chatSlice.actions;

export default chatSlice.reducer;
