import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Employment = ({route}) => {
  const {employee} = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Employee Details</Text>
      <Text style={styles.detailText}>Name: {employee.name}</Text>
      <Text style={styles.detailText}>Experience: {employee.experience}</Text>
      <Text style={styles.detailText}>Employee ID: {employee.empId}</Text>
      <Text style={styles.detailText}>Office Email: {employee.email}</Text>

      <Text style={styles.subTitle}>Project / Bench Details</Text>
      <Text style={styles.detailText}>
        Project: {employee.project || 'Pre-Onboarding'}
      </Text>
      <Text style={styles.detailText}>
        Bench Status: {employee.benchStatus || 'N/A'}
      </Text>

      <Text style={styles.subTitle}>Tech Stack</Text>
      <Text style={styles.detailText}>
        Primary Skills:{' '}
        {employee.primarySkills ? employee.primarySkills.join(', ') : 'reactjs'}
      </Text>
      <Text style={styles.detailText}>
        Secondary Skills:{' '}
        {employee.secondarySkills ? employee.secondarySkills.join(', ') : 'java'}
      </Text>

      <Text style={styles.subTitle}>Reporting Team</Text>
      <Text style={styles.detailText}>
        L1 Manager: {employee.l1Manager || 'Nishanth'}
      </Text>
      <Text style={styles.detailText}>
        L2 Manager: {employee.l2Manager || 'Jani'}
      </Text>
      <Text style={styles.detailText}>
        Reporting Team: {employee.reportingTeam || 'Java'}
      </Text>
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
  subTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: 'black',
    marginTop: 12,
    marginBottom: 8,
  },
  detailText: {
    fontSize: 16,
    color: 'black',
    marginBottom: 8,
  },
});

export default Employment;
