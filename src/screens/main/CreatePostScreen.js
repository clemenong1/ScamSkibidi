import Ionicons from '@expo/vector-icons/Ionicons';
import * as ImagePicker from 'expo-image-picker';
import { getAuth } from 'firebase/auth';
import { addDoc, collection, getFirestore, serverTimestamp } from 'firebase/firestore';
import React, { useState } from 'react';
import {
    Image,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

export default function CreatePostScreen({ navigation }) {
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handlePost = async () => {
    if (content.trim() === '') {
      alert('Please write something about your experience');
      return;
    }

    setUploading(true);

    try {
      const auth = getAuth();
      const db = getFirestore();
      
      // Create the post
      const postData = {
        content,
        userId: auth.currentUser.uid,
        username: auth.currentUser.displayName,
        userAvatar: auth.currentUser.photoURL,
        createdAt: serverTimestamp(),
        likes: 0,
        comments: 0,
      };

      if (image) {
        // In a real app, you would upload the image to storage
        // and add the URL to postData
        postData.imageUrl = image;
      }

      await addDoc(collection(db, 'posts'), postData);
      
      // Reset form and navigate back
      setContent('');
      setImage(null);
      navigation.goBack();
    } catch (error) {
      console.error('Error creating post:', error);
      alert('Error creating post. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.header}>
          <Text style={styles.title}>Create Post</Text>
          <TouchableOpacity
            style={[styles.postButton, !content.trim() && styles.postButtonDisabled]}
            onPress={handlePost}
            disabled={!content.trim() || uploading}
          >
            <Text style={styles.postButtonText}>Post</Text>
          </TouchableOpacity>
        </View>

        <TextInput
          style={styles.input}
          placeholder="Share your scam encounter..."
          placeholderTextColor="#666"
          multiline
          value={content}
          onChangeText={setContent}
        />

        {image && (
          <View style={styles.imageContainer}>
            <Image source={{ uri: image }} style={styles.previewImage} />
            <TouchableOpacity
              style={styles.removeImageButton}
              onPress={() => setImage(null)}
            >
              <Ionicons name="close-circle" size={24} color="#fff" />
            </TouchableOpacity>
          </View>
        )}

        <View style={styles.toolbar}>
          <TouchableOpacity style={styles.toolbarButton} onPress={pickImage}>
            <Ionicons name="image-outline" size={24} color="#4CAF50" />
            <Text style={styles.toolbarButtonText}>Add Photo</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
  },
  scrollContainer: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  postButton: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  postButtonDisabled: {
    backgroundColor: '#2A2A2A',
  },
  postButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  input: {
    color: '#fff',
    fontSize: 16,
    minHeight: 100,
    textAlignVertical: 'top',
    marginBottom: 20,
  },
  imageContainer: {
    marginBottom: 20,
    position: 'relative',
  },
  previewImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  removeImageButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 15,
  },
  toolbar: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#2A2A2A',
    paddingTop: 20,
  },
  toolbarButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  toolbarButtonText: {
    color: '#4CAF50',
    marginLeft: 5,
  },
}); 