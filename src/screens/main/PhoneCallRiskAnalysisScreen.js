import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function PhoneCallRiskAnalysisScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={28} color="#fff" />
      </TouchableOpacity>
      <Text style={styles.title}>ScamSkibidi</Text>
      <View style={styles.card}>
        <Ionicons name="warning-outline" size={64} color="#FFC107" style={styles.icon} />
        <Text style={styles.riskTitle}>Likely A Scam</Text>
        <View style={styles.legend}>
          <View style={styles.legendRow}>
            <View style={[styles.dot, { backgroundColor: '#FF5252' }]} />
            <Text style={styles.legendText}>High Risk</Text>
          </View>
          <View style={styles.legendRow}>
            <View style={[styles.dot, { backgroundColor: '#FFC107' }]} />
            <Text style={styles.legendText}>Medium Risk</Text>
          </View>
          <View style={styles.legendRow}>
            <View style={[styles.dot, { backgroundColor: '#4CAF50' }]} />
            <Text style={styles.legendText}>Low Risk</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.reportButton} onPress={() => navigation.navigate('PhoneCallReported')}>
        <Text style={styles.reportButtonText}>REPORT</Text>
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
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#263238',
    borderRadius: 20,
    padding: 30,
    alignItems: 'center',
    marginBottom: 30,
    width: '100%',
    maxWidth: 350,
  },
  icon: {
    marginBottom: 10,
  },
  riskTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  legend: {
    width: '100%',
  },
  legendRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  dot: {
    width: 14,
    height: 14,
    borderRadius: 7,
    marginRight: 10,
  },
  legendText: {
    color: '#fff',
    fontSize: 16,
  },
  reportButton: {
    backgroundColor: '#FF5252',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 60,
    alignItems: 'center',
  },
  reportButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 10,
    backgroundColor: 'transparent',
  },
}); 