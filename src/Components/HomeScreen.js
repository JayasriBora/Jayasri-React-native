import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  TouchableOpacity,
  Image,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import EmployeeListScreen from './EmployeeListScreen';
import DashboardScreen from './DashboardScreen';
import NewsFeedScreen from './NewFeedScreen';
import {user} from '../Styles/Utils';
const Tab = createBottomTabNavigator();

const HomeScreen = ({navigation}) => {


  const handleLogout = () => {
    Alert.alert('Logout', 'Are you sure you want to logout?', [
      {text: 'Cancel', style: 'cancel'},
      {text: 'OK', onPress: () => navigation.navigate('Login')},
    ]);
  };

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Profile"
        options={{
          tabBarIcon: () => (
            <Image
              source={require('../assests/Profile.png')}
              style={styles.icon}
            />
          ),
        }}>
        {() => (
          <View style={styles.container}>
          

            <Text style={styles.title}>User Profile</Text>
            <Text style={styles.detail}>Username: {user.username}</Text>
            <Text style={styles.detail}>Login Time: {user.loginTime}</Text>
            <Text style={styles.detail}>Active Hours: {user.activeHours}</Text>
            <Text style={styles.detail}>Logout Time: {user.logoutTime}</Text>
            <TouchableOpacity
              style={styles.logoutButton}
              onPress={handleLogout}>
              <Text style={styles.logoutButtonText}>Logout</Text>
            </TouchableOpacity>
          </View>
        )}
      </Tab.Screen>
      <Tab.Screen
        name="Employee List"
        component={EmployeeListScreen}
        options={{
          tabBarIcon: () => (
            <Image
              source={require('../assests/Employeelist.png')}
              style={styles.icon}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          tabBarIcon: () => (
            <Image
              source={require('../assests/Dashboard.png')}
              style={styles.icon}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Newfeed"
        component={NewsFeedScreen}
        options={{
          tabBarIcon: () => (
            <Image
              source={require('../assests/Newfeed.png')}
              style={styles.icon}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 16,
  },
  logoutButton: {
    backgroundColor: '#2196F3', 
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 8, 
    marginTop: 20,
  },
  logoutButtonText: {
    color: '#FFFFFF', 
    fontSize: 18,
    fontWeight: 'bold',
  },
  detail: {
    fontSize: 18,
    color: 'black',
    marginVertical: 5,
  },
});

export default HomeScreen;
