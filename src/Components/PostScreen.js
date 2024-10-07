import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/Ionicons'; 

const PostScreen = ({navigation}) => {
  const [comment, setComment] = useState('');
  const [type, setType] = useState('Anniversary');
  const [years, setYears] = useState('');
  const [eventType, setEventType] = useState('Open House');
  const [eventDuration, setEventDuration] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [otherEventType, setOtherEventType] = useState('');
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showOtherEventType, setShowOtherEventType] = useState(false);

  const handleSubmit = () => {
    if (type === 'Anniversary') {
      console.log('Anniversary Submitted:', {comment, type, years, date});
    } else {
      if (validateEventFields()) {
        const finalEventType =
          eventType === 'Other' ? `Other: ${otherEventType}` : eventType;
        console.log('Event Submitted:', {
          comment,
          type,
          eventDuration,
          finalEventType,
          eventDescription,
          date,
        });
      }
    }
    navigation.goBack(); 
  };

  const handleReset = () => {
    setComment('');
    setType('Anniversary');
    setYears('');
    setDate(new Date());
    setEventType('Open House');
    setEventDuration('');
    setEventDescription('');
    setOtherEventType('');
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  const validateEventFields = () => {
    if (!eventType || !eventDuration || !eventDescription) {
      alert('All fields are mandatory!');
      return false;
    }
    if (eventType === 'Other' && !otherEventType) {
      alert("Please provide a description for 'Other' event type!");
      return false;
    }
    return true;
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity
          style={[styles.tab, type === 'Post' && styles.activeTab]}
          onPress={() => setType('Post')}>
          <Text style={styles.tabText}>Post</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, type === 'Events' && styles.activeTab]}
          onPress={() => setType('Events')}>
          <Text style={styles.tabText}>Events</Text>
        </TouchableOpacity>
      </View>

      {type === 'Post' ? (
        <>
          <TextInput
            style={styles.input}
            placeholder="Comment (100-1000 characters)"
            placeholderTextColor="black"
            maxLength={1000}
            minLength={100}
            value={comment}
            onChangeText={setComment}
          />
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={type}
              style={styles.picker}
              onValueChange={itemValue => setType(itemValue)}>
              <Picker.Item label="Anniversary" value="Anniversary" />
              <Picker.Item label="Birthday" value="Birthday" />
            </Picker>
            <Icon
              name="chevron-down"
              size={20}
              color="black"
              style={styles.icon}
            />
          </View>

          {type === 'Anniversary' && (
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={years}
                style={styles.picker}
                onValueChange={itemValue => setYears(itemValue)}>
                {[...Array(10).keys()].map(year => (
                  <Picker.Item
                    key={year}
                    label={`${year + 1} Year`} 
                    value={`${year + 1}`} 
                  />
                ))}
              </Picker>
              <Icon
                name="chevron-down"
                size={20}
                color="black"
                style={styles.icon}
              />
            </View>
          )}

          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={years}
              style={styles.picker}
              onValueChange={itemValue => setYears(itemValue)}>
              {[...Array(10).keys()].map(year => (
                <Picker.Item
                  key={year}
                  label={`${year + 1} Year`}
                  value={`${year + 1}`}
                />
              ))}
            </Picker>
            <Icon
              name="chevron-down"
              size={20}
              color="black"
              style={styles.icon}
            />
          </View>

          <View>
            <Button
              title="Select Date"
              onPress={() => setShowDatePicker(true)}
            />
            {showDatePicker && (
              <DateTimePicker
                value={date}
                mode="date"
                display="default"
                onChange={onChange}
              />
            )}
            <Text style={styles.dateText}>
              Selected Date: {date.toLocaleDateString()}
            </Text>
          </View>
        </>
      ) : (
        <>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={eventType}
              style={styles.picker}
              onValueChange={itemValue => {
                setEventType(itemValue);
                setShowOtherEventType(itemValue === 'Other');
              }}>
              <Picker.Item label="Open House" value="Open House" />
              <Picker.Item label="One DE Meeting" value="One DE Meeting" />
              <Picker.Item
                label="Internal Team Meeting"
                value="Internal Team Meeting"
              />
              <Picker.Item label="Other" value="Other" />
            </Picker>
            <Icon
              name="chevron-down"
              size={20}
              color="black"
              style={styles.icon}
            />
          </View>

          {showOtherEventType && (
            <TextInput
              style={styles.input}
              placeholder="Other Event Type"
              value={otherEventType}
              onChangeText={setOtherEventType}
              required
            />
          )}

          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={eventDuration}
              style={styles.picker}
              onValueChange={itemValue => setEventDuration(itemValue)}>
              <Picker.Item label="10 Min" value="10 Min" />
              <Picker.Item label="15 Min" value="15 Min" />
              <Picker.Item label="20 Min" value="20 Min" />
              <Picker.Item label="25 Min" value="25 Min" />
              <Picker.Item label="30 Min" value="30 Min" />
              <Picker.Item label="35 Min" value="35 Min" />
              <Picker.Item label="40 Min" value="40 Min" />
              <Picker.Item label="45 Min" value="45 Min" />
              <Picker.Item label="50 Min" value="50 Min" />
              <Picker.Item label="60 Min" value="60 Min" />
            </Picker>
            <Icon
              name="chevron-down"
              size={20}
              color="black"
              style={styles.icon}
            />
          </View>

          <TextInput
            style={styles.input}
            placeholder="Event Description (200-1000 characters)"
            placeholderTextColor="black"
            value={eventDescription}
            onChangeText={setEventDescription}
            minLength={200}
            maxLength={1000}
            required
          />

         <View >
            <Button
              title="Select Date/Time"
              
              onPress={() => setShowDatePicker(true)}
            />
            {showDatePicker && (
              <DateTimePicker
                value={date}
                mode="datetime"
                display="default"
                onChange={onChange}
                minimumDate={new Date()} 
                maximumDate={
                  new Date(new Date().setMonth(new Date().getMonth() + 6))
                } 
              />
            )}
            <Text style={styles.dateText}>
              Selected Date/Time: {date.toLocaleString()}
            </Text>
          </View>
        </>
      )}

      <View style={styles.buttonContainer}>
        <Button title="Submit" onPress={handleSubmit} />
        <Button title="Reset" onPress={handleReset} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 7,
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
  input: {
    height: 100,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    color: 'black',
  },
  pickerContainer: {
    position: 'relative',
    marginBottom: 10,
    borderRadius: 10,
  },
  picker: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    color: 'black',
  },
  icon: {
    position: 'absolute',
    right: 10,
    top: 15,
  },
  dateText: {
    color: 'black',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    
    
  },
});

export default PostScreen;
