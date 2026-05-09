import React, {
  useState,
  useContext,
} from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from 'react-native';

import { AuthContext }
from '../context/AuthContext';

const OtpScreen = ({
  navigation,
}) => {

  const [otp, setOtp] =
    useState('');

  const { login } =
    useContext(AuthContext);

  const verifyOtp = () => {

    if (otp === '1234') {

      login();

      navigation.replace('Home');

    } else {

      Alert.alert(
        'Invalid OTP',
        'Use OTP: 1234'
      );
    }
  };

  return (

    <View style={styles.container}>

      <Text style={styles.title}>
        Enter OTP
      </Text>

      <TextInput
        placeholder="Enter OTP"
        keyboardType="numeric"
        value={otp}
        onChangeText={setOtp}
        style={styles.input}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={verifyOtp}
      >

        <Text style={styles.btnText}>
          Verify OTP
        </Text>

      </TouchableOpacity>

    </View>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 20,
  },

  button: {
    backgroundColor: '#0C831F',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
  },

  btnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },

});