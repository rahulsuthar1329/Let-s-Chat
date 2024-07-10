import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './Chat.styled';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types/StackNavigator';
import {ChatType} from '../../types/chatTypes';

interface ChatProps {
  chatDetails: ChatType;
}

const Chat: React.FC<ChatProps> = ({chatDetails}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const openChat = () => navigation.navigate('Conversation', {chatDetails});

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.container}
      onPress={openChat}>
      <View>
        <Image
          source={{
            uri:
              chatDetails.profileImage ||
              'https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg',
          }}
          style={styles.image}
        />
      </View>
      <View>
        <Text style={styles.name}>{chatDetails.chatName}</Text>
        {chatDetails.latestMessage.length > 0 && (
          <Text style={styles.message}>
            {chatDetails.latestMessage.length > 38
              ? chatDetails.latestMessage.substring(0, 38) + '...'
              : chatDetails.latestMessage}
          </Text>
        )}
      </View>
      <View style={styles.info}>
        <Text style={styles.time}>13:44</Text>
        {chatDetails.unseenMessageCount ? (
          <View style={styles.countContainer}>
            <Text style={styles.messageCount}>
              {chatDetails.unseenMessageCount}
            </Text>
          </View>
        ) : null}
      </View>
    </TouchableOpacity>
  );
};

export default Chat;
