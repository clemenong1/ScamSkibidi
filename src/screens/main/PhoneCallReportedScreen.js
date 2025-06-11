import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function PhoneCallReportedScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={28} color="#fff" />
      </TouchableOpacity>
      <Text style={styles.title}>ScamSkibidi</Text>
      <View style={styles.reportedBox}>
        <Text style={styles.reportedText}>Reported </Text>
        <Ionicons name="checkmark-done" size={24} color="#fff" style={styles.checkIcon} />
      </View>
      <TouchableOpacity style={styles.linkButton} onPress={() => navigation.replace('PhoneCallMethod')}>
        <Text style={styles.linkText}>Report another</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.linkButton} onPress={() => navigation.navigate('MainApp', { screen: 'Checkers' })}>
        <Text style={styles.linkText}>Return <Ionicons name="arrow-forward" size={16} color="#fff" /></Text>
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
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 40,
  },
  reportedBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2ECC71',
    borderRadius: 10,
    paddingVertical: 16,
    paddingHorizontal: 40,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
  },
  reportedText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginRight: 8,
  },
  checkIcon: {
    marginLeft: 0,
  },
  linkButton: {
    marginTop: 10,
  },
  linkText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    textDecorationLine: 'underline',
    fontWeight: '500',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 10,
    backgroundColor: 'transparent',
  },
}); 