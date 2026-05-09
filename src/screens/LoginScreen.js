import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const LoginScreen = ({ navigation }) => {

  const [mobile, setMobile] = useState('');

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Blinkit Clone
      </Text>
<TextInput
        placeholder="Enter Mobile Number"
        keyboardType="numeric"
        value={mobile}
        onChangeText={setMobile}
        style={styles.input}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Otp')}
      >
        <Text style={styles.btnText}>Send OTP</Text>
      </TouchableOpacity>

    </View>
  );
};
export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
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
  },
});