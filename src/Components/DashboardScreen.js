import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';

import {verticals} from '../Styles/Utils';
const DashboardScreen = ({navigation}) => {
  const handleVerticalPress = vertical => {
    navigation.navigate('VerticalDetails', {verticalId: vertical.id});
  };

  const renderVerticalItem = ({item}) => (
    <TouchableOpacity
      style={styles.verticalItem}
      onPress={() => handleVerticalPress(item)}>
      <Image source={require('../assests/employee.png')} style={styles.logo} />
      <View style={styles.verticalInfo}>
        <Text style={styles.verticalName}>{item.name}</Text>
        <Text style={styles.verticalCount}>{item.employeeCount} Employees</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <FlatList
        data={verticals}
        renderItem={renderVerticalItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 16,
  },
  verticalItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  verticalInfo: {
    flex: 1,
  },
  verticalName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  verticalCount: {
    fontSize: 14,
    color: 'black',
  },
});

export default DashboardScreen;
