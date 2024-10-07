import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {useNavigation} from '@react-navigation/native'; 
import {postsData,eventsData} from '../Styles/Utils';


const NewsFeedScreen = () => {
  const [activeTab, setActiveTab] = useState('Post');
  const [expandedItemId, setExpandedItemId] = useState(null);
  const navigation = useNavigation(); 

  const renderPostItem = ({item}) => (
    <TouchableOpacity
      onPress={() =>
        setExpandedItemId(item.id === expandedItemId ? null : item.id)
      }>
      <View style={styles.postCard}>
        <Text style={styles.type}>{item.type}</Text>
        {item.type === 'Birthday' && (
          <Image
            source={require('../assests/birthday.png')}
            style={styles.birthdayImage}
          />
        )}
        {item.type === 'Anniversary' && (
          <Image
            source={require('../assests/anniversary.png')}
            style={styles.anniversaryImages}
          />
        )}
        
        <Text style={styles.comment}>
          {expandedItemId === item.id
            ? item.comment
            : `${item.comment.substring(0, 150)}${
                item.comment.length > 150 ? '...' : ''
              }`}
        </Text>
        <Text style={styles.commentedName}>By: {item.commentedName}</Text>
        <Text style={styles.commentedDate}>Date: {item.commentedDate}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderEventItem = ({item}) => (
    <View style={styles.postCard}>
      {item.eventType === 'Team Building' && (
        <Image
          source={require('../assests/teambuild.png')}
          style={styles.eventImage}
        />
      )}
      {item.eventType === 'Annual Conference' && (
        <Image
          source={require('../assests/annual.png')}
          style={styles.annualImage}
        />
      )}
      <Text style={styles.eventType}>{item.eventType}</Text>
      <Text style={styles.eventDescription}>{item.eventDescription}</Text>
      <Text style={styles.eventDetail}>Duration: {item.eventDuration}</Text>
      <Text style={styles.eventDetail}>Created By: {item.createdBy}</Text>
      <Text style={styles.eventDetail}>Date/Time: {item.eventDateTime}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity
          onPress={() => setActiveTab('Post')}
          style={[styles.tab, activeTab === 'Post' && styles.activeTab]}>
          <Text style={styles.tabText}>Posts</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setActiveTab('Events')}
          style={[styles.tab, activeTab === 'Events' && styles.activeTab]}>
          <Text style={styles.tabText}>Events</Text>
        </TouchableOpacity>
      </View>

      {activeTab === 'Post' ? (
        <FlatList
          data={postsData}
          renderItem={renderPostItem}
          keyExtractor={item => item.id}
        />
      ) : (
        <FlatList
          data={eventsData}
          renderItem={renderEventItem}
          keyExtractor={item => item.id}
        />
      )}

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('PostScreen')}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  activeTab: {
    backgroundColor: '#007bff',
  },
  tabText: {
    color: 'black',
    fontWeight: 'bold',
  },
  postCard: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    marginVertical: 5,
    borderRadius: 5,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  type: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
    color: 'black',
  },
  comment: {
    fontSize: 14,
    marginBottom: 5,
    color: 'black',
  },
  commentedName: {
    fontStyle: 'italic',
    color: 'black',
  },
  commentedDate: {
    color: 'grey',
  },
  eventType: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
    marginBottom: 5,
  },
  eventDescription: {
    fontSize: 14,
    marginBottom: 5,
    color: 'black',
  },
  eventDetail: {
    fontSize: 14,
    color: 'grey',
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#007bff',
    borderRadius: 50,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  birthdayImage: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  anniversaryImages: {
    width: 100,
    height: 40,
  },
  addButtonText: {
    color: 'white',
    fontSize: 24,
  },
  eventImage: {
    width: 50,
    height: 40,
    marginBottom: 10,
  },
  annualImage:{
    width:80,
    height:70
  }
});

export default NewsFeedScreen;
