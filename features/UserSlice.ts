import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface UserType {
  firstName?: string;
  lastName?: string;
  username: string;
  email: string;
  password: string;
  gender?: string;
  mobile?: string;
  profilePicture?: string;
  dateOfBirth?: string;
  country?: string;
  wishlist?: string[];
  likedProducts?: string[];
  savedAddress?: string;
}

interface UserStateType {
  user: UserType;
}

const initialState: UserStateType = {
  user: {
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    gender: '',
    mobile: '',
    profilePicture: '',
    dateOfBirth: '',
    country: '',
    wishlist: [],
    likedProducts: [],
    savedAddress: '',
  },
};

export const userSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserType>) => {
      state.user = action.payload;
    },
  },
});

export const {setUser} = userSlice.actions;

export default userSlice.reducer;
