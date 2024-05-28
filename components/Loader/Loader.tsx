import {View, Text, ActivityIndicator} from 'react-native';
import React from 'react';
import styles from './Loader.styled';
const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={40} color="#08F" />
      <Text style={styles.text}>Loading...</Text>
    </View>
  );
};

export default Loader;
