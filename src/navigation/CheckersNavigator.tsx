import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CheckersScreen from '../screens/CheckersScreen';
import AIFactCheckerScreen from '../screens/checkers/AIFactCheckerScreen';
import WebsiteCheckerScreen from '../screens/checkers/WebsiteCheckerScreen';

export type CheckersStackParamList = {
  CheckersList: undefined;
  AIFactChecker: undefined;
  WebsiteChecker: undefined;
  CallChecker: undefined;
  TextChecker: undefined;
  LinkScanner: undefined;
};

const Stack = createNativeStackNavigator<CheckersStackParamList>();

const CheckersNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CheckersList"
        component={CheckersScreen}
        options={{ title: 'Checkers' }}
      />
      <Stack.Screen
        name="AIFactChecker"
        component={AIFactCheckerScreen}
        options={{ title: 'AI Fact Checker' }}
      />
      <Stack.Screen
        name="WebsiteChecker"
        component={WebsiteCheckerScreen}
        options={{ title: 'Website Checker' }}
      />
      {/* TODO: Add other checker screens */}
    </Stack.Navigator>
  );
};

export default CheckersNavigator; 