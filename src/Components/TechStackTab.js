import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {sampleTechStacks} from '../Styles/Utils';


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
