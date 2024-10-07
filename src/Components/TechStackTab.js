import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

const sampleTechStacks = [
  {id: '1', techName: 'React JS', contact: 'Vamshi', memberCount: 12},
  {id: '2', techName: 'Java', contact: 'Jani', memberCount: 9},
  {id: '1', techName: 'React-Native', contact: 'Sharief', memberCount: 12},
  {id: '2', techName: 'Angular', contact: 'Nishanth', memberCount: 9},
];

const TechStackTab = ({route}) => {
  const {verticalId} = route.params;

  const renderTechStack = ({item}) => (
    <View style={styles.card}>
      <Text style={styles.techName}>Tech Stack: {item.techName}</Text>
      <Text style={styles.text}>Point of Contact: {item.contact}</Text>
      <Text style={styles.text}>Count of Members: {item.memberCount}</Text>
    </View>
  );

  return (
    <FlatList
      data={sampleTechStacks}
      renderItem={renderTechStack}
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
  techName: {
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

export default TechStackTab;
