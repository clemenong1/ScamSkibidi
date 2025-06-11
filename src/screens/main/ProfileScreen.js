import Ionicons from '@expo/vector-icons/Ionicons';
import { getAuth } from 'firebase/auth';
import { collection, getDocs, getFirestore, orderBy, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import {
    FlatList,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

export default function ProfileScreen({ navigation }) {
  const [userPosts, setUserPosts] = useState([]);
  const auth = getAuth();
  const user = auth.currentUser;

  useEffect(() => {
    fetchUserPosts();
  }, []);

  const fetchUserPosts = async () => {
    try {
      const db = getFirestore();
      const postsRef = collection(db, 'posts');
      const q = query(
        postsRef,
        where('userId', '==', user.uid),
        orderBy('createdAt', 'desc')
      );
      
      const querySnapshot = await getDocs(q);
      const posts = [];
      querySnapshot.forEach((doc) => {
        posts.push({ id: doc.id, ...doc.data() });
      });
      
      setUserPosts(posts);
    } catch (error) {
      console.error('Error fetching user posts:', error);
    }
  };

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigation.replace('Login');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const renderPost = ({ item }) => (
    <View style={styles.postContainer}>
      {item.imageUrl && (
        <Image source={{ uri: item.imageUrl }} style={styles.postImage} />
      )}
      <View style={styles.postContent}>
        <Text style={styles.postText}>{item.content}</Text>
        <Text style={styles.timestamp}>
          {item.createdAt?.toDate().toLocaleDateString()}
        </Text>
      </View>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profileInfo}>
          <Image
            source={{ uri: user.photoURL || 'https://via.placeholder.com/100' }}
            style={styles.profileImage}
          />
          <Text style={styles.username}>{user.displayName || 'Anonymous'}</Text>
          <Text style={styles.bio}>I hate scams!</Text>
        </View>

        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{userPosts.length}</Text>
          <Text style={styles.statLabel}>Posts</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Posts</Text>

      <FlatList
        data={userPosts}
        renderItem={renderPost}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
      />

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Ionicons name="log-out-outline" size={24} color="#FF5252" />
        <Text style={styles.logoutButtonText}>Log Out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
  },
  header: {
    padding: 20,
    alignItems: 'center',
  },
  profileInfo: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  bio: {
    fontSize: 16,
    color: '#999',
    marginBottom: 15,
  },
  editButton: {
    backgroundColor: '#2A2A2A',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  editButtonText: {
    color: '#4CAF50',
    fontWeight: 'bold',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#2A2A2A',
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  statLabel: {
    fontSize: 14,
    color: '#999',
    marginTop: 5,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    padding: 20,
  },
  postContainer: {
    backgroundColor: '#2A2A2A',
    marginBottom: 15,
    borderRadius: 10,
    overflow: 'hidden',
  },
  postImage: {
    width: '100%',
    height: 200,
  },
  postContent: {
    padding: 15,
  },
  postText: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 10,
  },
  timestamp: {
    fontSize: 12,
    color: '#999',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    marginVertical: 20,
  },
  logoutButtonText: {
    color: '#FF5252',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
}); 