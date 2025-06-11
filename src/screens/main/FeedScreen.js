import Ionicons from '@expo/vector-icons/Ionicons';
import { collection, getDocs, getFirestore, orderBy, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import {
    FlatList,
    Image,
    RefreshControl,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

export default function FeedScreen() {
  const [posts, setPosts] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const fetchPosts = async () => {
    try {
      const db = getFirestore();
      const postsRef = collection(db, 'posts');
      const q = query(postsRef, orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      
      const fetchedPosts = [];
      querySnapshot.forEach((doc) => {
        fetchedPosts.push({ id: doc.id, ...doc.data() });
      });
      
      setPosts(fetchedPosts);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchPosts();
    setRefreshing(false);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const renderPost = ({ item }) => (
    <View style={styles.postContainer}>
      <View style={styles.postHeader}>
        <View style={styles.userInfo}>
          <Image
            source={{ uri: item.userAvatar || 'https://via.placeholder.com/40' }}
            style={styles.avatar}
          />
          <View>
            <Text style={styles.username}>{item.username}</Text>
            <Text style={styles.timestamp}>{item.createdAt?.toDate().toLocaleDateString()}</Text>
          </View>
        </View>
      </View>

      <Text style={styles.postContent}>{item.content}</Text>
      
      {item.imageUrl && (
        <Image
          source={{ uri: item.imageUrl }}
          style={styles.postImage}
          resizeMode="cover"
        />
      )}

      <View style={styles.postFooter}>
        <TouchableOpacity style={styles.footerButton}>
          <Ionicons name="chatbubble-outline" size={20} color="#999" />
          <Text style={styles.footerText}>{item.comments || 0} Comments</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerButton}>
          <Ionicons name="heart-outline" size={20} color="#999" />
          <Text style={styles.footerText}>{item.likes || 0} Likes</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerButton}>
          <Ionicons name="share-social-outline" size={20} color="#999" />
          <Text style={styles.footerText}>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        renderItem={renderPost}
        keyExtractor={(item) => item.id}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor="#fff"
          />
        }
        contentContainerStyle={styles.feedContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
  },
  feedContainer: {
    padding: 10,
  },
  postContainer: {
    backgroundColor: '#2A2A2A',
    borderRadius: 15,
    marginBottom: 15,
    overflow: 'hidden',
  },
  postHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  username: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  timestamp: {
    color: '#999',
    fontSize: 12,
  },
  postContent: {
    color: '#fff',
    fontSize: 16,
    lineHeight: 24,
    padding: 15,
    paddingTop: 0,
  },
  postImage: {
    width: '100%',
    height: 200,
  },
  postFooter: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: '#3A3A3A',
  },
  footerButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerText: {
    color: '#999',
    marginLeft: 5,
  },
}); 