import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Button, Card, Text } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const CheckerOption = ({ title, description, onPress }) => (
  <Card containerStyle={styles.card}>
    <Card.Title>{title}</Card.Title>
    <Text style={styles.description}>{description}</Text>
    <Button
      title="Check Now"
      onPress={onPress}
      buttonStyle={styles.button}
    />
  </Card>
);

const CheckersScreen = () => {
  const navigation = useNavigation();

  const checkers = [
    {
      title: 'AI Fact Checker',
      description: 'Verify general facts using our AI-powered fact-checking system',
      screen: 'AIFactChecker'
    },
    {
      title: 'Website Checker',
      description: 'Analyze websites for potential misinformation and credibility',
      screen: 'WebsiteChecker'
    },
    {
      title: 'Call Authenticity',
      description: 'Verify the authenticity of unknown phone numbers',
      screen: 'CallChecker'
    },
    {
      title: 'Text Message Checker',
      description: 'Analyze text messages for potential scams',
      screen: 'TextChecker'
    },
    {
      title: 'Link Scanner',
      description: 'Check if a link is safe before clicking',
      screen: 'LinkScanner'
    }
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Misinformation Defense Tools</Text>
      {checkers.map((checker, index) => (
        <CheckerOption
          key={index}
          title={checker.title}
          description={checker.description}
          onPress={() => navigation.navigate(checker.screen)}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#333',
  },
  card: {
    borderRadius: 10,
    marginBottom: 15,
    padding: 15,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    marginTop: 10,
  },
});

export default CheckersScreen; 