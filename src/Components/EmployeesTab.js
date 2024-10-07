import React from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';

const sampleEmployees = [
  {
    id: '1',
    name: 'jayasri',
    experience: '5 years',
    empId: 'BTIN100146',
    email: 'jaya@example.com',
  },
  {
    id: '2',
    name: 'dijisha',
    experience: '3 years',
    empId: 'BTIN100150',
    email: 'diji@example.com',
  },

  {
    id: '3',
    name: 'poojitha',
    experience: '3 years',
    empId: 'BTIN100151',
    email: 'poojitha@example.com',
  },
  {
    id: '4',
    name: 'prathyusha',
    experience: '3 years',
    empId: 'BTIN100152',
    email: 'prathyusha@example.com',
  },
];

const EmployeesTab = ({navigation, route}) => {
  const {verticalId} = route.params;

  const handleEmployeePress = employee => {
    navigation.navigate('Employement', {employee});
  };

  const renderEmployee = ({item}) => (
    <TouchableOpacity
      onPress={() => handleEmployeePress(item)}
      style={styles.card}>
      <Text style={styles.employeeName}>Employee Name: {item.name}</Text>
      <Text style={styles.text}>Experience: {item.experience}</Text>
      <Text style={styles.text}>Employee Id: {item.empId}</Text>
      <Text style={styles.text}>Office Email Id: {item.email}</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={sampleEmployees}
      renderItem={renderEmployee}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  card: {
    backgroundColor: '#f5f5f5',
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
  },
  employeeName: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
    color: 'black',
  },
  text: {
    fontSize: 14,
    color: 'black', 
  },
});

export default EmployeesTab;
