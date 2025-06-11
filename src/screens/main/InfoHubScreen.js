import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import {
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function InfoHubScreen() {
  const resources = [
    {
      id: 'pofma',
      name: 'POFMA OFFICE',
      url: 'https://www.pofmaoffice.gov.sg/',
    },
    {
      id: 'im',
      name: 'IMDA',
      url: 'https://www.imda.gov.sg/business',
    },
    {
      id: 'dsta',
      name: 'DSTA',
      url: 'https://www.dsta.gov.sg/',
    },
  ];

  const articles = [
    {
      id: '1',
      title: "Singapore's fight against Misinformation",
      description: 'With misinformation on the rise, Singapore has been ramping up its efforts to combat its spread...',
    },
    {
      id: '2',
      title: 'Made by Students, for a Smarter Tomorrow',
      description: 'Fun acronym:\nR-Recognise the source\nE-Examine the evidence',
    },
  ];

  const openUrl = async (url) => {
    try {
      await Linking.openURL(url);
    } catch (error) {
      console.error('Error opening URL:', error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Useful Information</Text>

      <View style={styles.resourcesContainer}>
        {resources.map((resource) => (
          <TouchableOpacity
            key={resource.id}
            style={styles.resourceButton}
            onPress={() => openUrl(resource.url)}
          >
            {resource.id === 'pofma' ? (
              <Image
                source={require('../../assets/pofma_logo.png')}
                style={styles.pofmaLogo}
                resizeMode="contain"
              />
            ) : resource.id === 'im' ? (
              <Image
                source={require('../../assets/imda_logo.png')}
                style={styles.pofmaLogo}
                resizeMode="contain"
              />
            ) : resource.id === 'dsta' ? (
              <Image
                source={require('../../assets/dsta_logo.jpg')}
                style={styles.pofmaLogo}
                resizeMode="contain"
              />
            ) : (
              <Text style={styles.resourceText}>{resource.name}</Text>
            )}
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.reelsButton}>
        <View style={styles.reelsButtonContent}>
          <Ionicons name="flame" size={24} color="#FFD700" />
          <Text style={styles.reelsButtonText}>
            Check out our{' '}
            <Text style={styles.highlightText}>SKibidi-REELS!</Text>
          </Text>
        </View>
        <Ionicons name="chevron-forward" size={24} color="#fff" />
      </TouchableOpacity>

      <Text style={styles.sectionTitle}>Articles</Text>

      {articles.map((article) => (
        <TouchableOpacity key={article.id} style={styles.articleCard}>
          <View style={styles.articleContent}>
            <Text style={styles.articleTitle}>{article.title}</Text>
            <Text style={styles.articleDescription}>{article.description}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  resourcesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  resourceButton: {
    backgroundColor: '#2A2A2A',
    borderRadius: 10,
    padding: 15,
    width: '30%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resourceText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  reelsButton: {
    backgroundColor: '#2A2A2A',
    borderRadius: 10,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  reelsButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  reelsButtonText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 10,
  },
  highlightText: {
    color: '#FFD700',
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 15,
  },
  articleCard: {
    backgroundColor: '#2A2A2A',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 15,
  },
  articleContent: {
    padding: 15,
  },
  articleTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  articleDescription: {
    fontSize: 14,
    color: '#999',
    lineHeight: 20,
  },
  pofmaLogo: {
    width: '110%',
    height: '100%',
    alignSelf: 'center',
  },
}); 