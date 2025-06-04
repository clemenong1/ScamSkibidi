import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Alert } from 'react-native';
import { Input, Button, Text, Card } from 'react-native-elements';

interface FactCheckResult {
  isFactual: boolean;
  confidence: number;
  explanation: string;
  sources?: string[];
}

const AIFactCheckerScreen = () => {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<FactCheckResult | null>(null);

  const handleFactCheck = async () => {
    if (!query.trim()) {
      Alert.alert('Error', 'Please enter a statement to fact check');
      return;
    }

    setIsLoading(true);

    try {
      // TODO: Implement AI fact-checking API integration
      // This is a mock response for demonstration
      const mockResult: FactCheckResult = {
        isFactual: Math.random() > 0.5,
        confidence: Math.random() * 100,
        explanation: 'This is a mock explanation of the fact-checking result.',
        sources: [
          'https://example.com/source1',
          'https://example.com/source2',
        ],
      };

      setResult(mockResult);
    } catch (error) {
      Alert.alert('Error', 'Failed to check facts. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text h4>AI Fact Checker</Text>
        <Text style={styles.subtitle}>
          Enter a statement to verify its authenticity
        </Text>
      </View>

      <View style={styles.inputContainer}>
        <Input
          placeholder="Enter a statement to fact check"
          value={query}
          onChangeText={setQuery}
          multiline
          numberOfLines={3}
          inputStyle={styles.input}
        />

        <Button
          title="Check Facts"
          onPress={handleFactCheck}
          loading={isLoading}
          buttonStyle={styles.button}
          containerStyle={styles.buttonContainer}
        />
      </View>

      {result && (
        <Card containerStyle={styles.resultCard}>
          <View style={styles.resultHeader}>
            <Text h4 style={styles.resultTitle}>
              Result
            </Text>
            <View
              style={[
                styles.factualityIndicator,
                {
                  backgroundColor: result.isFactual ? '#4CAF50' : '#FF3B30',
                },
              ]}
            >
              <Text style={styles.factualityText}>
                {result.isFactual ? 'FACTUAL' : 'QUESTIONABLE'}
              </Text>
            </View>
          </View>

          <Text style={styles.confidenceText}>
            Confidence: {result.confidence.toFixed(1)}%
          </Text>

          <Text style={styles.explanation}>{result.explanation}</Text>

          {result.sources && result.sources.length > 0 && (
            <View style={styles.sourcesContainer}>
              <Text style={styles.sourcesTitle}>Sources:</Text>
              {result.sources.map((source, index) => (
                <Text key={index} style={styles.source}>
                  • {source}
                </Text>
              ))}
            </View>
          )}
        </Card>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 20,
    alignItems: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 10,
    textAlign: 'center',
  },
  inputContainer: {
    padding: 20,
  },
  input: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    padding: 15,
  },
  buttonContainer: {
    marginTop: 20,
  },
  resultCard: {
    borderRadius: 10,
    marginHorizontal: 20,
    marginBottom: 20,
    padding: 15,
  },
  resultHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  resultTitle: {
    margin: 0,
  },
  factualityIndicator: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  factualityText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
  },
  confidenceText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 15,
  },
  explanation: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
  },
  sourcesContainer: {
    marginTop: 10,
  },
  sourcesTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  source: {
    fontSize: 14,
    color: '#007AFF',
    marginBottom: 5,
  },
});

export default AIFactCheckerScreen; 