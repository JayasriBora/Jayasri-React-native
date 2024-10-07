import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {techStack,orgStructure} from '../Styles/Utils'
const EmployeeDetailsScreen = ({route}) => {
  const {employeeId} = route.params;
  const [activeTab, setActiveTab] = useState('Projects'); 

 

  const renderContent = () => {
    switch (activeTab) {
      case 'Tech Stack Details':
        return (
          <View>
            <Text style={styles.detailText}>
              Primary Skills: {techStack.primary}
            </Text>
            <Text style={styles.detailText}>
              Secondary Skills: {techStack.secondary}
            </Text>
          </View>
        );
      case 'Projects':
        return (
          <View>
            <Text style={styles.detailText}>Project 1: Unify care</Text>
            <Text style={styles.detailText}>Project 2: Progress Rail</Text>
            <Text style={styles.detailText}>Project 3: Search AI</Text>
            <Text style={styles.detailText}>Project 2: PreOnboarding</Text>
          </View>
        );
      case 'Org Structure':
        return (
          <View>
            <Text style={styles.detailText}>L1: {orgStructure.L1}</Text>
            <Text style={styles.detailText}>L2: {orgStructure.L2}</Text>
            <Text style={styles.detailText}>Jr: {orgStructure.Jr}</Text>
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Employee Details</Text>
      <Text style={styles.detailText}>Employee ID: {employeeId}</Text>

      <View style={styles.tabContainer}>
        {['Projects', 'Tech Stack Details', 'Org Structure'].map(tab => (
          <TouchableOpacity
            key={tab}
            onPress={() => setActiveTab(tab)}
            style={[styles.tab, activeTab === tab && styles.activeTab]}>
            <Text
              style={[
                styles.tabText,
                activeTab === tab && styles.activeTabText,
              ]}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.contentContainer}>{renderContent()}</View>
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
  },
  detailText: {
    fontSize: 16,
    color: 'black',
    marginBottom: 8,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 16,
  },
  tab: {
    padding: 10,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: 'blue', 
  },
  tabText: {
    fontSize: 16,
    color: 'black',
  },
  activeTabText: {
    fontWeight: 'bold',
    color: 'blue', 
  },
  contentContainer: {
    marginTop: 16,
  },
});

export default EmployeeDetailsScreen;
