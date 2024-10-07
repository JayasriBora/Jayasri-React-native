import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from './src/Components/Login';
import HomeScreen from './src/Components/HomeScreen';
import EmployeeListScreen from './src/Components/EmployeeListScreen';
import EmployeeDetailsScreen from './src/Components/EmployeeDetailsScreen';
import DashboardScreen from './src/Components/DashboardScreen';
import VerticalDetailsScreen from './src/Components/VerticalDetailsScreen';
import Employement from './src/Components/Employement';
import OtpScreen from './src/Components/OtpScreen';
import NewsFeedScreen from './src/Components/NewFeedScreen';
import PostScreen from './src/Components/PostScreen';
// import ProfileScreen from './src/Components/ProfileScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="OtpScreen" component={OtpScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="EmployeeDetails"
          component={EmployeeDetailsScreen}
        />

        <Stack.Screen
          name="EmployeeListScrren"
          component={EmployeeListScreen}
        />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen
          name="VerticalDetails"
          component={VerticalDetailsScreen}
        />
        <Stack.Screen name="Employement" component={Employement} />
        <Stack.Screen name="Newfeed" component={NewsFeedScreen} />
        <Stack.Screen name="PostScreen" component={PostScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
