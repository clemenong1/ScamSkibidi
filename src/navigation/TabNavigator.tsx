import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// Import screens and navigators
import CommunityFeedScreen from '../screens/CommunityFeedScreen';
import CheckersNavigator from './CheckersNavigator';
import CreatePostScreen from '../screens/CreatePostScreen';
import InfoHubNavigator from './InfoHubNavigator';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case 'Community':
              iconName = focused ? 'people' : 'people-outline';
              break;
            case 'Checkers':
              iconName = focused ? 'shield-checkmark' : 'shield-checkmark-outline';
              break;
            case 'Create Post':
              iconName = focused ? 'add-circle' : 'add-circle-outline';
              break;
            case 'Info Hub':
              iconName = focused ? 'information-circle' : 'information-circle-outline';
              break;
            case 'Profile':
              iconName = focused ? 'person' : 'person-outline';
              break;
            default:
              iconName = 'alert';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: 'gray',
        headerShown: true,
      })}
    >
      <Tab.Screen name="Community" component={CommunityFeedScreen} />
      <Tab.Screen
        name="Checkers"
        component={CheckersNavigator}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="Create Post" component={CreatePostScreen} />
      <Tab.Screen 
        name="Info Hub" 
        component={InfoHubNavigator}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator; 