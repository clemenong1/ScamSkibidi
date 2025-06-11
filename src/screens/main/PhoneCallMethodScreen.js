import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function PhoneCallMethodScreen({ navigation }) {
  const handleSelect = (method) => {
    if (method === 'Others') {
      navigation.navigate('PhoneCallOtherApp');
    } else {
      navigation.navigate('PhoneCallEnterNumber', { method });
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={28} color="#fff" />
      </TouchableOpacity>
      <Text style={styles.title}>ScamSkibidi</Text>
      <Text style={styles.subtitle}>What did they use to call you with?</Text>
      <TouchableOpacity style={styles.button} onPress={() => handleSelect('Phone call')}>
        <Text style={styles.buttonText}>Phone call</Text>
        <Ionicons name="arrow-forward" size={20} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => handleSelect('Whatsapp call')}>
        <Text style={styles.buttonText}>Whatsapp call</Text>
        <Ionicons name="arrow-forward" size={20} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => handleSelect('Others')}>
        <Text style={styles.buttonText}>Others</Text>
        <Ionicons name="arrow-forward" size={20} color="#fff" />
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
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 10,
    backgroundColor: 'transparent',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 20,
  },
  subtitle: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 30,
    fontWeight: 'bold',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#2A2A2A',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
}); 