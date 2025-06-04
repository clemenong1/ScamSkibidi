import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';

interface ScreenHeaderProps {
  title: string;
  subtitle?: string;
}

const ScreenHeader: React.FC<ScreenHeaderProps> = ({ title, subtitle }) => {
  return (
    <View style={styles.container}>
      <Text h4 style={styles.title}>{title}</Text>
      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e1e1e1',
  },
  title: {
    color: '#333',
    textAlign: 'center',
    marginBottom: subtitle => subtitle ? 5 : 0,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
});

export default ScreenHeader; 