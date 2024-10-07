import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {sampleProjects} from '../Styles/Utils';


const ProjectsTab = ({route}) => {
  const {verticalId} = route.params;

  const renderProject = ({item}) => (
    <View style={styles.card}>
      <Text style={styles.projectName}>Project Name: {item.name}</Text>
      <Text style={styles.text}>Project Lead/Manager: {item.lead}</Text>
      <Text style={styles.text}>
        Count of Members in the Project: {item.memberCount}
      </Text>
    </View>
  );

  return (
    <FlatList
      data={sampleProjects}
      renderItem={renderProject}
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
  projectName: {
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

export default ProjectsTab;
