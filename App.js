import Ionicons from '@expo/vector-icons/Ionicons';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { initializeApp } from 'firebase/app';
import { getReactNativePersistence, initializeAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';

// Import screens
import LoginScreen from './src/screens/auth/LoginScreen';
import SignupScreen from './src/screens/auth/SignupScreen';
import CheckersScreen from './src/screens/main/CheckersScreen';
import CreatePostScreen from './src/screens/main/CreatePostScreen';
import FeedScreen from './src/screens/main/FeedScreen';
import GeneralFactsScreen from './src/screens/main/GeneralFactsScreen';
import InfoHubScreen from './src/screens/main/InfoHubScreen';
import ProfileScreen from './src/screens/main/ProfileScreen';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDinWFYppTfTbqorhQnJ95Wn2eBCELYOas",
  authDomain: "scamskibidi.firebaseapp.com",
  projectId: "scamskibidi",
  storageBucket: "scamskibidi.appspot.com",
  messagingSenderId: "722508386345",
  appId: "1:722508386345:web:a6b625e513529a4b84cc38"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth with AsyncStorage persistence
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export { auth };
export const db = getFirestore(app);

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const CheckersStack = createNativeStackNavigator();

function CheckersStackScreen() {
  return (
    <CheckersStack.Navigator screenOptions={{ headerShown: false }}>
      <CheckersStack.Screen name="CheckersMain" component={CheckersScreen} />
      <CheckersStack.Screen name="GeneralFacts" component={GeneralFactsScreen} />
    </CheckersStack.Navigator>
  );
}

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case 'Feed':
              iconName = focused ? 'home' : 'home-outline';
              break;
            case 'Checkers':
              iconName = focused ? 'shield-checkmark' : 'shield-checkmark-outline';
              break;
            case 'Create':
              iconName = focused ? 'add-circle' : 'add-circle-outline';
              break;
            case 'InfoHub':
              iconName = focused ? 'information-circle' : 'information-circle-outline';
              break;
            case 'Profile':
              iconName = focused ? 'person' : 'person-outline';
              break;
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#4CAF50',
        tabBarInactiveTintColor: 'gray',
        headerStyle: {
          backgroundColor: '#1E1E1E',
        },
        headerTintColor: '#fff',
      })}
    >
      <Tab.Screen name="Feed" component={FeedScreen} />
      <Tab.Screen name="Checkers" component={CheckersStackScreen} />
      <Tab.Screen name="Create" component={CreatePostScreen} />
      <Tab.Screen name="InfoHub" component={InfoHubScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // This ensures Firebase is fully initialized before rendering
    setIsInitialized(true);
  }, []);

  if (!isInitialized) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="MainApp" component={MainTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
} 