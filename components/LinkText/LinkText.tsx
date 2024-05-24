import {Text, TouchableOpacity, GestureResponderEvent} from 'react-native';
import React from 'react';
import styles from './LinkText.styled';

interface LinkTextProps {
  title: string;
  color?: string;
  onPress: (event: GestureResponderEvent) => void;
}

const LinkText: React.FC<LinkTextProps> = ({title, color, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default LinkText;
