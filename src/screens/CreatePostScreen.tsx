import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Alert } from 'react-native';
import { Input, Button, Text } from 'react-native-elements';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { db } from '../config/firebase';

const CreatePostScreen = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();
  const auth = getAuth();

  const handleSubmit = async () => {
    if (!title || !description || !type) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    const currentUser = auth.currentUser;
    if (!currentUser) {
      Alert.alert('Error', 'You must be logged in to create a post');
      return;
    }

    setIsLoading(true);

    try {
      await addDoc(collection(db, 'posts'), {
        title,
        description,
        type,
        userId: currentUser.uid,
        userName: currentUser.displayName || 'Anonymous',
        timestamp: serverTimestamp(),
      });

      Alert.alert('Success', 'Your post has been created successfully');
      navigation.goBack();
    } catch (error) {
      Alert.alert('Error', 'Failed to create post. Please try again.');
      console.error('Error creating post:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text h4 style={styles.header}>Share Your Experience</Text>
      
      <Input
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
        containerStyle={styles.inputContainer}
      />

      <Input
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        multiline
        numberOfLines={4}
        containerStyle={styles.inputContainer}
      />

      <Input
        placeholder="Type of Scam/Misinformation"
        value={type}
        onChangeText={setType}
        containerStyle={styles.inputContainer}
      />

      <Button
        title="Submit Post"
        onPress={handleSubmit}
        loading={isLoading}
        buttonStyle={styles.button}
        containerStyle={styles.buttonContainer}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  header: {
    textAlign: 'center',
    marginBottom: 30,
    color: '#333',
  },
  inputContainer: {
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    padding: 15,
  },
  buttonContainer: {
    marginTop: 20,
    marginBottom: 40,
  },
});

export default CreatePostScreen; 