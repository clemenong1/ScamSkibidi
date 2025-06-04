import { NavigatorScreenParams } from '@react-navigation/native';
import { CheckersStackParamList } from '../navigation/CheckersNavigator';
import { InfoHubStackParamList } from '../navigation/InfoHubNavigator';

export type AuthStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
};

export type RootStackParamList = {
  Auth: NavigatorScreenParams<AuthStackParamList>;
  Main: NavigatorScreenParams<MainTabParamList>;
};

export type MainTabParamList = {
  Community: undefined;
  Checkers: NavigatorScreenParams<CheckersStackParamList>;
  'Create Post': undefined;
  'Info Hub': NavigatorScreenParams<InfoHubStackParamList>;
  Profile: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
} 