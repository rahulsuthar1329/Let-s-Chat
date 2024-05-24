import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './Chat.styled';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types/StackNavigator';
import {ChatDetailsTypes} from '../../types/types';

interface ChatProps {
  chatDetails: ChatDetailsTypes;
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
            uri: chatDetails.profilePictureUrl,
          }}
          style={styles.image}
        />
      </View>
      <View>
        <Text style={styles.name}>{chatDetails.name}</Text>
        <Text style={styles.message}>
          {chatDetails.lastMessage.length > 38
            ? chatDetails.lastMessage.substring(0, 38) + '...'
            : chatDetails.lastMessage}
        </Text>
      </View>
      <View style={styles.info}>
        <Text style={styles.time}>13:44</Text>
        <View style={styles.countContainer}>
          <Text style={styles.messageCount}>3</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Chat;
