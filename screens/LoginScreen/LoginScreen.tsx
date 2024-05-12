import {View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import InputText from './../../components/InputText/InputText';
import styles from './LoginScreen.styled';
import Button from '../../components/Button/Button';
import Img from '../../assets/login.jpg';
import Animated, {FadeIn, FadeInUp, FadeOut} from 'react-native-reanimated';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Animated.Text
        entering={FadeInUp.duration(200).springify()}
        style={styles.headerText}>
        Login
      </Animated.Text>
      <Animated.Image
        entering={FadeInUp.delay(300).duration(500).springify()}
        source={Img}
        style={styles.img}
      />
      <View style={styles.inputs}>
        <InputText
          placeholder="Enter Username"
          state={username}
          setState={setUsername}
        />
        <InputText
          type="password"
          placeholder="Enter Password"
          state={password}
          setState={setPassword}
        />
        <Animated.View entering={FadeInUp.delay(400).duration(200).springify()}>
          <Button title="Submit" />
        </Animated.View>
      </View>
    </View>
  );
};

export default LoginScreen;
