import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from '../store';

interface ChatStateType {
  chatName: string;
  latestMessage: string;
  profileImage: string;
  unseenMessageCount: number;
  users: [];
  isGroupChat: boolean;
  lastSeen: Date;
  isActive: boolean;
  adminUsers: [];
}

const;

const initialState: ChatStateType = [
  {
    chatName: '',
    latestMessage: '',
    profileImage: '',
    unseenMessageCount: 0,
    users: [],
    isGroupChat: false,
    lastSeen: new Date(),
    isActive: true,
    adminUsers: [],
  },
];

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setChats: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const {increment, decrement, incrementByAmount} = chatSlice.actions;

export const selectCount = (state: RootState) => state.counter.value;

export default chatSlice.reducer;
