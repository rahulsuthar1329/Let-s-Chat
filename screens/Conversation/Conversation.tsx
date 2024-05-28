import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import styles from './Conversation.styled';
import BackBtn from '../../assets/back.png';
import Camera from '../../assets/camera.png';
import More from '../../assets/more.png';
import Send from '../../assets/send.png';
import Messages from '../../api/Messages';
import EmojiModal from 'react-native-emoji-modal';
import Octicons from 'react-native-vector-icons/Octicons';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {updateChat} from '../../features/ChatSlice';

const Conversation: React.FC = ({navigation, route}: any) => {
  const {chatDetails} = route.params;
  const [message, setMessage] = useState('');
  const [emojiModal, setEmojiModal] = useState(false);

  const dispatch = useAppDispatch();
  const chats = useAppSelector(state => state.chatReducer);

  useEffect(() => {
    dispatch(updateChat({chatId: '12345', users: ['12345-Rahul Suthar']}));
  }, []);

  useEffect(() => {
    console.log(chats.chats[0].users);
  }, [chats]);

  const getMessageStyle = (sent: boolean, status: string | null) => {
    if (sent) {
      if (status === 'pending') {
        return [styles.msgSent, styles.pending];
      }
      if (status === 'seen') return [styles.msgSent, styles.seen];
      if (status === 'received') return [styles.msgSent, styles.received];
    }
    return styles.msgReceive;
  };
  const showProfile = async () => {};
  const goBack = () => navigation.goBack();
  const toggleEmojiModal = () => setEmojiModal(!emojiModal);
  const sendMessage = () => {
    /* encryption */
  };

  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.header}>
        <View style={styles.leftPortion}>
          <TouchableOpacity onPress={goBack} activeOpacity={0.8}>
            <Image source={BackBtn} style={styles.back} />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.headerContainer}
            onPress={showProfile}>
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
              <Text style={styles.message}>Last seen at 12:35 PM</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.rightPortion}>
          <TouchableOpacity activeOpacity={0.8}>
            <Image source={Camera} style={styles.camera} />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8}>
            <Image source={More} style={styles.more} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Chat Area */}
      <View style={styles.chatArea}>
        <ScrollView>
          <Text style={styles.tooltip}>13 April 2023</Text>
          {Messages.map((msg, index) => (
            <View
              key={index}
              style={msg.sent ? styles.sentMessage : styles.receiveMessage}>
              <Text style={getMessageStyle(msg.sent, msg.status)}>
                {msg.message}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Input Area */}
      <View style={styles.inputArea}>
        <View style={styles.inputMessage}>
          <TouchableWithoutFeedback onPress={toggleEmojiModal}>
            <Octicons name="smiley" size={23} color="#666" />
          </TouchableWithoutFeedback>
          <TextInput
            placeholder="Write a message..."
            value={message}
            onChangeText={e => setMessage(e)}
            style={styles.msgBar}
          />
        </View>
        <TouchableOpacity activeOpacity={0.8} onPress={sendMessage}>
          <Image source={Send} style={styles.send} />
        </TouchableOpacity>
      </View>
      {emojiModal && (
        <EmojiModal
          onEmojiSelected={emoji => setMessage(message + emoji)}
          columns={9}
          containerStyle={styles.containerStyle}
          searchStyle={styles.emojiSearchBar}
        />
      )}
    </View>
  );
};

export default Conversation;
