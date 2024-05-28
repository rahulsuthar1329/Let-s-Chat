export interface MessageType {
  chatId: string;
  content: string;
  seenBy: string[];
  receivedBy: string[];
  sender: string;
  taggedUsers: string[];
  category: string;
  uri: string;
}

export interface ChatType {
  _id: string;
  chatName: string;
  latestMessage: string;
  profileImage: string;
  unseenMessageCount: number;
  users: string[];
  isGroupChat: boolean;
  lastSeen: Date;
  isActive: boolean;
  adminUsers: string[];
  messages: MessageType[];
}

export interface ChatStateType {
  chats: ChatType[];
}

export type UpdateChatPayload = {
  chatId: string;
} & Partial<Omit<ChatType, '_id'>>;

export type DeleteMessagePayload = {
  chatId: string;
  messageId: string;
};
