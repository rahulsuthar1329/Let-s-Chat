import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import styles from './Conversation.styled';
import BackBtn from '../../assets/back.png';
import Camera from '../../assets/camera.png';
import More from '../../assets/more.png';
import Send from '../../assets/send.png';
import InputText from './../../components/InputText/InputText';
import Messages from '../../api/Messages';

const Conversation: React.FC = ({navigation, route}: any) => {
  const {chatDetails} = route.params;

  const [message, setMessage] = useState('');

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
          <TextInput
            placeholder="Write a message..."
            value={message}
            onChangeText={e => setMessage(e)}
            style={styles.msgBar}
          />
        </View>
        <TouchableOpacity activeOpacity={0.8}>
          <Image source={Send} style={styles.send} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Conversation;