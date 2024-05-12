import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import styles from './ChatScreen.styled';
import Chat from '../../components/Chat/Chat';
import users from '../../api/ChatCollection';
import {
  createLog,
  logError,
  logInfo,
  logWarn,
} from '../../context/LoggerContext';

const ChatScreen = () => {
  const [search, setSearch] = useState('');

  logInfo('File created Successfully.');
  logWarn('Warning logged!');
  logError('System got an error!');

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Chats</Text>
      <TextInput
        value={search}
        onChangeText={e => setSearch(e)}
        placeholder="Search Message"
        style={styles.search}
      />

      <Text style={styles.subHeading}>Recent</Text>
      <FlatList
        style={styles.recent}
        horizontal
        data={users}
        keyExtractor={(item, index) => index.toString() + item.name}
        renderItem={({item}) => (
          <TouchableOpacity activeOpacity={0.8} style={styles.recentChat}>
            <Image
              source={{
                uri: item.profilePictureUrl,
              }}
              style={styles.image}
            />
            <Text style={styles.name}>{item.name.split(' ')[0]}</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.recentChatInnerStyles}
        showsHorizontalScrollIndicator={false}
      />

      <View style={styles.filters}>
        <Text style={[styles.tags, styles.selectedTag]}>Individuals</Text>
        <Text style={styles.tags}>Groups</Text>
      </View>

      <Text style={styles.subHeading}>Messages</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={users}
        keyExtractor={(item, index) => item.name + index.toString()}
        renderItem={({item}) => <Chat chatDetails={item} />}
      />
    </View>
  );
};

export default ChatScreen;
