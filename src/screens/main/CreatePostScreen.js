import React from 'react';
import { StyleSheet, View } from 'react-native';
import CreatePost from '../../components/CreatePost';

const CreatePostScreen = ({ navigation }) => {
  const handlePostCreated = () => {
    // Navigate back to feed after post creation
    navigation.navigate('Feed');
  };

  return (
    <View style={styles.container}>
      <CreatePost onPostCreated={handlePostCreated} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});

export default CreatePostScreen; 