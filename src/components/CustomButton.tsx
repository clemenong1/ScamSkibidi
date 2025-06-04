import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, ButtonProps } from 'react-native-elements';

interface CustomButtonProps extends ButtonProps {
  variant?: 'primary' | 'secondary' | 'danger';
}

const CustomButton: React.FC<CustomButtonProps> = ({
  variant = 'primary',
  buttonStyle,
  containerStyle,
  ...props
}) => {
  const getButtonColor = () => {
    switch (variant) {
      case 'secondary':
        return '#6c757d';
      case 'danger':
        return '#FF3B30';
      default:
        return '#007AFF';
    }
  };

  return (
    <Button
      {...props}
      buttonStyle={[styles.button, { backgroundColor: getButtonColor() }, buttonStyle]}
      containerStyle={[styles.container, containerStyle]}
    />
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  container: {
    borderRadius: 8,
  },
});

export default CustomButton; 