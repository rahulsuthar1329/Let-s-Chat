import {Text, TouchableOpacity, TouchableOpacityProps} from 'react-native';
import React from 'react';
import styles from './Button.styled';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

const Button: React.FC<ButtonProps> = ({title, ...props}) => {
  return (
    <TouchableOpacity
      testID="button"
      style={styles.button}
      activeOpacity={0.8}
      {...props}>
      <Text style={styles.buttonTitle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
