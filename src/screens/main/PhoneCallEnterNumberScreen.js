import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function PhoneCallEnterNumberScreen({ navigation, route }) {
  const [phone, setPhone] = useState('');
  const method = route?.params?.method || '';

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={28} color="#fff" />
      </TouchableOpacity>
      <Text style={styles.title}>ScamSkibidi</Text>
      <Text style={styles.subtitle}>Enter the full number!</Text>
      <Text style={styles.example}>Eg. +65 9123 4567</Text>
      <TextInput
        style={styles.input}
        placeholder="Phone number..."
        placeholderTextColor="#aaa"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />
      <TouchableOpacity style={styles.checkButton} onPress={() => navigation.navigate('PhoneCallRiskAnalysis')}>
        <Text style={styles.checkButtonText}>Check</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  example: {
    color: '#4FC3F7',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#2A2A2A',
    color: '#fff',
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    marginBottom: 20,
  },
  checkButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
  },
  checkButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 10,
    backgroundColor: 'transparent',
  },
}); 