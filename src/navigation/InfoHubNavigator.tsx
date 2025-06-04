import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InfoHubScreen from '../screens/InfoHubScreen';
import ReelsScreen from '../screens/ReelsScreen';

export type InfoHubStackParamList = {
  InfoHubHome: undefined;
  Reels: undefined;
};

const Stack = createNativeStackNavigator<InfoHubStackParamList>();

const InfoHubNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="InfoHubHome"
        component={InfoHubScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Reels"
        component={ReelsScreen}
        options={{ title: 'Educational Reels' }}
      />
    </Stack.Navigator>
  );
};

export default InfoHubNavigator; 