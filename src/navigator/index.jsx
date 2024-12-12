import * as React from 'react';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/login';
import RegisterScreen from '../screens/register';
import DashboardScreen from '../screens/dashboard';


const RootStack = createNativeStackNavigator({
  initialRouteName: 'Login',
  screens: {
    Login: {
      screen: LoginScreen,
      options: {
       headerShown: false,
      },
    },
    Register: {
      screen: RegisterScreen,
      options: {
       headerShown: false,
      },
    },
    Dashboard:{
      screen: DashboardScreen,
      options:{
      headerBackVisible: false,
      }
    },
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function AppNavigator() {
  return <Navigation />;
}