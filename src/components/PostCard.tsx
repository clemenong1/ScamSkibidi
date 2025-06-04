import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Text, Button } from 'react-native-elements';
import { Timestamp } from 'firebase/firestore';

interface PostCardProps {
  title: string;
  description: string;
  userName: string;
  timestamp: Timestamp;
  type: string;
  onPress?: () => void;
}

const PostCard: React.FC<PostCardProps> = ({
  title,
  description,
  userName,
  timestamp,
  type,
  onPress,
}) => {
  return (
    <View style={styles.container}>
      <Card containerStyle={styles.card}>
        <View style={styles.header}>
          <Card.Title>{title}</Card.Title>
          <Text style={styles.type}>{type}</Text>
        </View>
        <Card.Divider />
        <Text style={styles.description}>{description}</Text>
        <View style={styles.footer}>
          <Text style={styles.userName}>Posted by: {userName}</Text>
          <Text style={styles.timestamp}>
            {timestamp?.toDate().toLocaleDateString()}
          </Text>
        </View>
        {onPress && (
          <Button
            title="View Details"
            onPress={onPress}
            buttonStyle={styles.button}
          />
        )}
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  card: {
    borderRadius: 10,
    marginBottom: 15,
    padding: 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  type: {
    color: '#007AFF',
    fontSize: 14,
  },
  description: {
    fontSize: 16,
    color: '#333',
    marginVertical: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  userName: {
    fontSize: 12,
    color: '#666',
  },
  timestamp: {
    fontSize: 12,
    color: '#666',
  },
  button: {
    marginTop: 10,
    backgroundColor: '#007AFF',
    borderRadius: 8,
  },
});

export default PostCard; 