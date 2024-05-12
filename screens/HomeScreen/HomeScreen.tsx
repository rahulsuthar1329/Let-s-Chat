import {View, Text} from 'react-native';
import styles from './HomeScreen.styled';
import * as ImagePicker from 'react-native-image-picker';
import Button from '../../components/Button/Button';
import * as Screen from '../index';

const HomeScreen = ({navigation}: any) => {
  const openCamera = async () => {
    try {
      const response = await ImagePicker.launchCamera({
        mediaType: 'photo',
        quality: 0.5,
        saveToPhotos: true,
        durationLimit: 10,
      });

      console.log('Response: ', response);
    } catch (error) {
      console.log(error);
    }
  };

  const openGallery = async () => {
    try {
      await ImagePicker.launchImageLibrary({
        mediaType: 'photo',
        quality: 0.5,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const openChats = () => navigation.navigate(Screen.chat);

  return (
    <View style={styles.container}>
      <Text>Welcome to AwesomeProject!</Text>
      <Button title={'Open Camera'} onPress={openCamera} />
      <Button title={'Open Gallery'} onPress={openGallery} />
      <Button title={'Open Chats'} onPress={openChats} />
    </View>
  );
};

export default HomeScreen;
