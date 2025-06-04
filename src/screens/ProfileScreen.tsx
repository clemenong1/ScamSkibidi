import React, { useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet, Alert } from 'react-native';
import { Text, Avatar, Button, Card } from 'react-native-elements';
import { getAuth, signOut } from 'firebase/auth';
import { collection, query, where, orderBy, getDocs } from 'firebase/firestore';
import * as ImagePicker from 'expo-image-picker';
import { db } from '../config/firebase';

interface UserPost {
  id: string;
  title: string;
  description: string;
  timestamp: any;
  type: string;
}

const ProfileScreen = () => {
  const [userPosts, setUserPosts] = useState<UserPost[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const auth = getAuth();
  const currentUser = auth.currentUser;

  useEffect(() => {
    if (currentUser) {
      fetchUserPosts();
    }
  }, [currentUser]);

  const fetchUserPosts = async () => {
    try {
      const postsQuery = query(
        collection(db, 'posts'),
        where('userId', '==', currentUser?.uid),
        orderBy('timestamp', 'desc')
      );
      
      const postsSnapshot = await getDocs(postsQuery);
      const posts = postsSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      })) as UserPost[];

      setUserPosts(posts);
    } catch (error) {
      console.error('Error fetching user posts:', error);
    }
  };

  const handleEditProfile = async () => {
    try {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission needed', 'Please grant permission to access your photos');
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });

      if (!result.canceled) {
        // Handle profile picture update
        // You would typically upload this to Firebase Storage
        Alert.alert('Success', 'Profile picture updated successfully');
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to update profile picture');
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      Alert.alert('Error', 'Failed to sign out');
    }
  };

  if (!currentUser) {
    return (
      <View style={styles.container}>
        <Text>Please log in to view your profile</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileHeader}>
        <Avatar
          size="xlarge"
          rounded
          source={{ uri: currentUser.photoURL || undefined }}
          title={currentUser.displayName?.[0] || 'U'}
          containerStyle={styles.avatar}
        />
        <Text h4>{currentUser.displayName || 'Anonymous User'}</Text>
        <Text style={styles.email}>{currentUser.email}</Text>

        <View style={styles.buttonContainer}>
          <Button
            title="Edit Profile"
            onPress={handleEditProfile}
            buttonStyle={styles.editButton}
          />
          <Button
            title="Sign Out"
            onPress={handleSignOut}
            buttonStyle={styles.signOutButton}
          />
        </View>
      </View>

      <Text h4 style={styles.sectionTitle}>Your Posts</Text>
      {userPosts.map((post) => (
        <View key={post.id} style={styles.card}>
          <Text style={styles.cardTitle}>{post.title}</Text>
          <Text style={styles.postType}>{post.type}</Text>
          <Text style={styles.postDescription}>{post.description}</Text>
          <Text style={styles.timestamp}>
            {post.timestamp?.toDate().toLocaleDateString()}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  profileHeader: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  avatar: {
    backgroundColor: '#007AFF',
    marginBottom: 15,
  },
  email: {
    color: '#666',
    marginTop: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
    width: '100%',
    justifyContent: 'space-around',
  },
  editButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  signOutButton: {
    backgroundColor: '#FF3B30',
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  sectionTitle: {
    margin: 20,
    color: '#333',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginHorizontal: 15,
    marginBottom: 15,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  postType: {
    color: '#007AFF',
    fontSize: 14,
    marginBottom: 10,
  },
  postDescription: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
  timestamp: {
    fontSize: 12,
    color: '#666',
    textAlign: 'right',
  },
});

export default ProfileScreen; 