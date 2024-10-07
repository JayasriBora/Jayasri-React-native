// import React, {useState} from 'react';
// import {View, Text, TextInput, Button, StyleSheet, Alert} from 'react-native';

// const OtpScreen = ({route, navigation}) => {
//   const {email} = route.params;
//   const [otp, setOtp] = useState('');

//   const handleVerify = () => {
//     if (!otp) {
//       Alert.alert('Error', 'Please enter the OTP');
//       return;
//     }

//     navigation.navigate('Home');
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Enter OTP</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter OTP"
//         value={otp}
//         onChangeText={setOtp}
//         keyboardType="number-pad"
//         placeholderTextColor="black"
//         color="black"
//       />
//       <Button title="Verify" onPress={handleVerify} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     paddingHorizontal: 20,
//     color: 'black',
//   },
//   title: {
//     fontSize: 24,
//     marginBottom: 20,
//     textAlign: 'center',
//     color: 'black',
//   },
//   subTitle: {
//     fontSize: 16,
//     marginBottom: 20,
//     textAlign: 'center',
//     color: 'black',
//   },
//   input: {
//     height: 40,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     marginBottom: 10,
//     paddingHorizontal: 10,
//   },
// });

// export default OtpScreen;
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ImageBackground,
} from 'react-native';

const backgroundImage = require('../assests/backimage.png'); 

const OtpScreen = ({route, navigation}) => {
  const {email} = route.params; 
  const [otp, setOtp] = useState('');

  const handleOtpSubmit = () => {
    if (!otp) {
      Alert.alert('Error', 'Please enter the OTP');
      return;
    }


    navigation.navigate('Home');
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Enter OTP</Text>
        <Text style={styles.subTitle}>We have sent an OTP to {email}</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter OTP"
          value={otp}
          onChangeText={setOtp}
          keyboardType="numeric"
          maxLength={6} 
          placeholderTextColor="black"
          color="black"
        />
        <TouchableOpacity style={styles.submitButton} onPress={handleOtpSubmit}>
          <Text style={styles.submitButtonText}>Verify</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    width: '80%',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 3, 
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    textAlign: 'center',
    color: 'black',
  },
  subTitle: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
    color: 'black',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
  },
  submitButton: {
    backgroundColor: '#2196F3', 
    paddingVertical: 12,
    borderRadius: 10, 
    alignItems: 'center', 
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default OtpScreen;
