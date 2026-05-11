import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
} from 'react-native';

import { CartContext } from '../context/CartContext';

const CheckoutScreen = ({ navigation, route }) => {

  const total = route?.params?.total || 0;

  const { cart, clearCart } =
    useContext(CartContext);
  const [address, setAddress] =
    useState('');
  const [paymentMethod, setPaymentMethod] =
    useState('COD');
  const placeOrder = () => {

    if (address.trim() === '') {

      Alert.alert(
        'Address Required',
        'Please enter delivery address'
      );

      return;
    }
    const orderId =
      'BLK' +
      Math.floor(
        Math.random() * 100000
      );
    navigation.replace('Success', {
  orderId,
  total,
  address,
  paymentMethod,
  cart,
});

setTimeout(() => {
  clearCart();
}, 500);
  };
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>
        Checkout
      </Text>
      <Text style={styles.label}>
        Delivery Address
      </Text>
      <TextInput
        placeholder="Enter full address"
        multiline
        numberOfLines={4}
        value={address}
        onChangeText={setAddress}
        style={styles.input}
      />
      <Text style={styles.label}>
        Payment Method
      </Text>
      <TouchableOpacity
        style={[
          styles.paymentOption,

          paymentMethod === 'COD' &&
            styles.selectedOption,
        ]}
        onPress={() =>
          setPaymentMethod('COD')
        }
      >
        <Text style={styles.paymentText}>
          Cash on Delivery (COD)
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.paymentOption,
          paymentMethod === 'Online' &&
            styles.selectedOption,
        ]}
        onPress={() =>
          setPaymentMethod('Online')
        }
      >
        <Text style={styles.paymentText}>
          Online Payment
        </Text>
      </TouchableOpacity>
      <View style={styles.summary}>
        <Text style={styles.summaryTitle}>
          Order Summary
        </Text>
        <View style={styles.row}>
          <Text>Total Items</Text>
          <Text>
            {cart?.length || 0}
          </Text>
        </View>
        <View style={styles.row}>
          <Text>Total Amount</Text>
          <Text>
            ₹ {total.toFixed(2)}
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.orderBtn}
        onPress={placeOrder}
      >
        <Text style={styles.orderText}>
          Place Order
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};
export default CheckoutScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 15,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#0C831F',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    marginTop: 10,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    textAlignVertical: 'top',
  },
  paymentOption: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  selectedOption: {
    borderColor: '#0C831F',
    backgroundColor: '#E8F5E9',
  },
  paymentText: {
    fontSize: 15,
    fontWeight: '500',
  },
  summary: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  orderBtn: {
    backgroundColor: '#0C831F',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 40,
  },
  orderText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});