import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {employees} from '../Styles/Utils'


const EmployeeListScreen = ({navigation}) => {
  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('EmployeeDetails', {employeeId: item.id})
      }>
      <Text style={styles.item}>
        {item.name} - {item.designation}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Employee List</Text>
      <FlatList
        data={employees}
        renderItem={renderItem}
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
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    color: 'black',
  },
});

export default EmployeeListScreen;
