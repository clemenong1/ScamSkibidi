import React from 'react';
import { View, ScrollView, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { Text, Button, Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { InfoHubStackParamList } from '../navigation/InfoHubNavigator';

type InfoHubScreenNavigationProp = NativeStackNavigationProp<InfoHubStackParamList, 'InfoHubHome'>;

interface ResourceItem {
  title: string;
  description: string;
  url: string;
}

interface TipItem {
  title: string;
  content: string;
}

const InfoHubScreen = () => {
  const navigation = useNavigation<InfoHubScreenNavigationProp>();

  const resources: ResourceItem[] = [
    {
      title: 'ScamWatch',
      description: 'Official government website for scam reporting and awareness',
      url: 'https://www.scamwatch.gov.au',
    },
    {
      title: 'Cyber Security Hub',
      description: 'Learn about latest cyber threats and how to stay safe online',
      url: 'https://www.cyber.gov.au',
    },
  ];

  const tips: TipItem[] = [
    {
      title: 'Verify the Source',
      content: 'Always check if information comes from reliable and verified sources.',
    },
    {
      title: 'Check Multiple Sources',
      content: 'Cross-reference information across different reputable sources.',
    },
    {
      title: 'Be Skeptical of Urgency',
      content: 'Scammers often create false urgency to pressure you into quick decisions.',
    },
  ];

  const handleOpenURL = async (url: string) => {
    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        console.log("Don't know how to open URI: " + url);
      }
    } catch (error) {
      console.error('Error opening URL:', error);
    }
  };

  return (
    <ScrollView 
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      <Text h4 style={styles.sectionTitle}>Quick Tips</Text>
      {tips.map((tip, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.cardTitle}>{tip.title}</Text>
          <Text style={styles.tipContent}>{tip.content}</Text>
        </View>
      ))}

      <Text h4 style={styles.sectionTitle}>Useful Resources</Text>
      {resources.map((resource, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.cardTitle}>{resource.title}</Text>
          <Text style={styles.resourceDescription}>{resource.description}</Text>
          <Button
            title="Visit Website"
            onPress={() => handleOpenURL(resource.url)}
            buttonStyle={styles.button}
            icon={
              <Icon
                name="external-link"
                type="feather"
                color="white"
                size={20}
                style={styles.buttonIcon}
              />
            }
          />
        </View>
      ))}

      <Button
        title="Watch Educational Reels"
        onPress={() => navigation.navigate('Reels')}
        containerStyle={styles.reelsButtonContainer}
        buttonStyle={styles.reelsButton}
        icon={
          <Icon
            name="play-circle"
            type="feather"
            color="white"
            size={20}
            style={styles.buttonIcon}
          />
        }
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  contentContainer: {
    padding: 16,
    paddingBottom: 30,
  },
  sectionTitle: {
    marginVertical: 20,
    color: '#333',
    fontSize: 24,
    fontWeight: 'bold',
  },
  card: {
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
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  tipContent: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
  resourceDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 15,
    lineHeight: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  buttonIcon: {
    marginRight: 10,
  },
  reelsButtonContainer: {
    marginVertical: 20,
  },
  reelsButton: {
    backgroundColor: '#FF4470',
    borderRadius: 12,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default InfoHubScreen; 