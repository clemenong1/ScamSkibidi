import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Text } from 'react-native-elements';

interface Reel {
  id: string;
  title: string;
  description: string;
  url: string;
}

const ReelsScreen = () => {
  // Placeholder data - replace with actual reels data
  const reels: Reel[] = [
    {
      id: '1',
      title: 'How to Spot Fake News',
      description: 'Learn the key indicators of misinformation in social media',
      url: 'https://example.com/reel1',
    },
    {
      id: '2',
      title: 'Common Scam Patterns',
      description: 'Understanding recurring patterns in online scams',
      url: 'https://example.com/reel2',
    },
  ];

  const renderReel = ({ item }: { item: Reel }) => (
    <View style={styles.reelCard}>
      <Text style={styles.reelTitle}>{item.title}</Text>
      <Text style={styles.reelDescription}>{item.description}</Text>
      {/* Add video player component here */}
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={reels}
        renderItem={renderReel}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  listContainer: {
    padding: 16,
  },
  reelCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  reelTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  reelDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
  },
});

export default ReelsScreen; 