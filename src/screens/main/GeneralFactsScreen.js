import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function GeneralFactsScreen({ navigation }) {
  const [query, setQuery] = useState('');

  const handleAddMedia = () => {
    // Placeholder for add media functionality
    alert('Add media pressed!');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={28} color="#fff" />
      </TouchableOpacity>
      <View style={styles.centerContent}>
        <Text style={styles.appTitle}>ScamSkibidi</Text>
        <Text style={styles.subtitle}>Verify the facts!</Text>
        <View style={styles.searchBarContainer}>
          <View style={styles.searchBarWrapper}>
            <TextInput
              style={styles.searchBar}
              placeholder="Ask something..."
              placeholderTextColor="#888"
              value={query}
              onChangeText={setQuery}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    padding: 20,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 10,
    zIndex: 10,
    padding: 8,
  },
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    fontFamily: 'monospace',
    letterSpacing: 1,
  },
  subtitle: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 30,
    fontWeight: 'bold',
    fontFamily: 'monospace',
  },
  searchBarContainer: {
    width: '100%',
    alignItems: 'center',
  },
  searchBarWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2A2A2A',
    borderRadius: 20,
    width: 300,
    maxWidth: '100%',
    paddingHorizontal: 10,
    paddingVertical: 2,
    marginBottom: 10,
  },
  searchBar: {
    flex: 1,
    color: '#fff',
    fontSize: 16,
    paddingVertical: 10,
    backgroundColor: 'transparent',
  },
}); 