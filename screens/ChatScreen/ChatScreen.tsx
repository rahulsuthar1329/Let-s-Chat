import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import styles from './ChatScreen.styled';
import Chat from '../../components/Chat/Chat';
import users from '../../api/ChatCollection';
import Octicons from 'react-native-vector-icons/Octicons';

const ChatScreen = () => {
  const [search, setSearch] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Conversations</Text>
        <View style={styles.searchbar}>
          <Octicons name="search" size={20} color={'#949393'} />
          <TextInput
            value={search}
            onChangeText={e => setSearch(e)}
            placeholder="Search a person or group..."
            style={styles.search}
          />
        </View>
      </View>
      <View style={styles.recentContainer}>
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
      </View>
      <View style={{height: Dimensions.get('window').height - 210}}>
        <Text style={styles.subHeading}>Messages</Text>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={users}
          contentContainerStyle={styles.conversationInnerStyle}
          keyExtractor={(item, index) => item.name + index.toString()}
          renderItem={({item}) => <Chat chatDetails={item} />}
        />
      </View>
    </View>
  );
};

export default ChatScreen;
