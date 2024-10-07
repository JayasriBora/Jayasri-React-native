import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';

const employees = [
  {id: '1', name: 'jayasri', designation: 'Senior programer'},
  {id: '2', name: 'prathyusha', designation: 'junior programmer'},
  {id: '3', name: 'poojitha', designation: 'manager'},
  {id: '4', name: 'nishanth', designation: 'accountant'},
  {id: '5', name: 'vivek', designation: 'assistance'},
  {id: '6', name: 'sharief', designation: 'dataengineer '},
  {id: '7', name: 'dijisha', designation: 'java developer'},
  {id: '8', name: 'divya', designation: 'sq1 seveloper'},
  {id: '9', name: 'jani', designation: 'tech lead '},
  {id: '10', name: 'narashima', designation: 'ceo'},

];

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
