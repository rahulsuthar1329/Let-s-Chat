import {ChatDetailsTypes} from './types';

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Chat: undefined;
  Conversation: {chatDetails: ChatDetailsTypes};
};
