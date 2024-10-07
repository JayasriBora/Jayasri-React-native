import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ProjectsTab from './ProjectTab';
import EmployeesTab from './EmployeesTab';
import TechStackTab from './TechStackTab';

const Tab = createMaterialTopTabNavigator();

const VerticalDetailsScreen = ({route}) => {
  const {verticalId} = route.params;

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {fontSize: 14, fontWeight: 'bold'},
        tabBarStyle: {paddingTop: 10},
        tabBarIndicatorStyle: {backgroundColor: '#000'}, 
      }}
      initialRouteName="Projects">
      <Tab.Screen
        name="Projects"
        component={ProjectsTab}
        initialParams={{verticalId}}
        options={{tabBarLabel: 'Projects'}}
      />
      <Tab.Screen
        name="Employees"
        component={EmployeesTab}
        initialParams={{verticalId}}
        options={{tabBarLabel: 'Employees'}}
      />
      <Tab.Screen
        name="TechStack"
        component={TechStackTab}
        initialParams={{verticalId}}
        options={{tabBarLabel: 'Tech Stack'}}
      />
    </Tab.Navigator>
  );
};

export default VerticalDetailsScreen;
