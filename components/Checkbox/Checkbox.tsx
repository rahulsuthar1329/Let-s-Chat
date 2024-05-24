import {
  Text,
  TouchableOpacity,
  Image,
  GestureResponderEvent,
} from 'react-native';
import React from 'react';
import styles from './Checkbox.styled';
import Selected from './icons/Selected_Checkbox.png';
import Unselected from './icons/Unselected_Checkbox.png';

interface CheckboxTypes {
  title: string;
  isSelected: boolean;
  onPress: (event: GestureResponderEvent) => void;
}

const Checkbox: React.FC<CheckboxTypes> = ({title, isSelected, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={styles.container}>
      <Image
        source={isSelected ? Selected : Unselected}
        style={styles.checkbox}
      />
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Checkbox;
