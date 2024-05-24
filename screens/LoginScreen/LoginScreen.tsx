import {View} from 'react-native';
import React, {useState} from 'react';
import InputText from './../../components/InputText/InputText';
import styles from './LoginScreen.styled';
import Button from '../../components/Button/Button';
import Img from '../../assets/login.jpg';
import * as Screen from '../index';
import Animated, {FadeInUp} from 'react-native-reanimated';
import LinkText from '../../components/LinkText/LinkText';
import Checkbox from '../../components/Checkbox/Checkbox';

const LoginScreen = ({navigation}: any) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => navigation.navigate(Screen.chat);
  const toggleRememberMe = () => setRememberMe(!rememberMe);
  const goToForgetPassword = () => navigation.navigate(Screen.forgot_password);

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
        <View style={styles.links}>
          <Checkbox
            title="Remember Me"
            isSelected={rememberMe}
            onPress={toggleRememberMe}
          />
          <LinkText title="Forgot Password ?" onPress={goToForgetPassword} />
        </View>
        <Animated.View entering={FadeInUp.delay(400).duration(200).springify()}>
          <Button title="Submit" onPress={handleLogin} />
        </Animated.View>
      </View>
    </View>
  );
};

export default LoginScreen;
