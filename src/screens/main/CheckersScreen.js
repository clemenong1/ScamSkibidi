import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

export default function CheckersScreen({ navigation }) {
  const checkerOptions = [
    {
      title: 'Check general facts!',
      icon: 'checkmark-circle-outline',
      color: '#4CAF50',
      category: 'Misinformation',
    },
    {
      title: 'Does this website contain misinformation?',
      icon: 'globe-outline',
      color: '#FF5252',
      category: 'Misinformation',
    },
    {
      title: 'Unknown phone number called you?',
      icon: 'call-outline',
      color: '#FF5252',
      category: 'Scams',
    },
    {
      title: 'Suspicious text from an unknown number?',
      icon: 'chatbox-outline',
      color: '#FF5252',
      category: 'Scams',
    },
    {
      title: 'Suspicious Link?',
      icon: 'link-outline',
      color: '#FF5252',
      category: 'Scams',
    },
  ];

  const renderCheckerOption = (option) => (
    <TouchableOpacity
      key={option.title}
      style={styles.checkerOption}
      onPress={() => {
        // Handle checker option press
      }}
    >
      <View style={styles.optionContent}>
        <Ionicons name={option.icon} size={24} color={option.color} />
        <Text style={styles.optionText}>{option.title}</Text>
      </View>
      <Ionicons name="chevron-forward" size={24} color="#666" />
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>What skibidi scam do you want to check?</Text>

      <View style={styles.categorySection}>
        <Text style={styles.categoryTitle}>Misinformation</Text>
        {checkerOptions
          .filter((option) => option.category === 'Misinformation')
          .map(renderCheckerOption)}
      </View>

      <View style={styles.categorySection}>
        <Text style={styles.categoryTitle}>Scams</Text>
        {checkerOptions
          .filter((option) => option.category === 'Scams')
          .map(renderCheckerOption)}
      </View>
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
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 30,
  },
  categorySection: {
    marginBottom: 30,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 15,
    textDecorationLine: 'underline',
  },
  checkerOption: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#2A2A2A',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  optionContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  optionText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 15,
    flex: 1,
  },
}); 