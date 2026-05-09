import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
const OrderSuccessScreen = ({
  navigation,
  route,
}) => {

  const {
    orderId,
    total,
    address,
    paymentMethod,
    cart,
  } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.successIcon}>
        ✅
      </Text>
      <Text style={styles.successText}>
        Order Placed Successfully
      </Text>
      <Text style={styles.orderId}>
        Order ID: {orderId}
      </Text>
      <Text style={styles.deliveryTime}>
        Estimated Delivery:
        {' '}
        15 Minutes 🚴
      </Text>
      <Text style={styles.payment}>
        Payment Method:
        {' '}
        {paymentMethod}
      </Text>
      <View style={styles.addressContainer}>

        <Text style={styles.sectionTitle}>
          Delivery Address
        </Text>
        <Text style={styles.address}>
          {address}
        </Text>
      </View>
      <View style={styles.summaryContainer}>
        <Text style={styles.sectionTitle}>
          Order Summary
        </Text>
        <FlatList
          data={cart}
          keyExtractor={(item) =>
            item.id.toString()
          }
          renderItem={({ item }) => (

            <View style={styles.itemRow}>

              <Text style={styles.itemName}>
                {item.name}
                {' '}
                x
                {' '}
                {item.quantity}
              </Text>

              <Text style={styles.itemPrice}>
                ₹
                {' '}
                {item.price * item.quantity}
              </Text>

            </View>

          )}
        />

      </View>
      <View style={styles.totalContainer}>

        <Text style={styles.totalText}>
          Grand Total
        </Text>

        <Text style={styles.totalPrice}>
          ₹ {total.toFixed(2)}
        </Text>
      </View>
      <TouchableOpacity
        style={styles.homeBtn}
        onPress={() =>
          navigation.navigate('Home')
        }
      >
        <Text style={styles.homeBtnText}>
          Back To Home
        </Text>

      </TouchableOpacity>

    </View>
  );
};

export default OrderSuccessScreen;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },

  successIcon: {
    fontSize: 70,
    textAlign: 'center',
    marginTop: 20,
  },

  successText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#0C831F',
    marginTop: 10,
  },

  orderId: {
    textAlign: 'center',
    fontSize: 16,
    marginTop: 10,
    fontWeight: '500',
  },

  deliveryTime: {
    textAlign: 'center',
    fontSize: 16,
    marginTop: 8,
    color: '#444',
  },

  payment: {
    textAlign: 'center',
    fontSize: 16,
    marginTop: 8,
    marginBottom: 20,
    fontWeight: '500',
  },

  addressContainer: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  address: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
  },

  summaryContainer: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
  },

  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },

  itemName: {
    fontSize: 15,
    color: '#333',
  },

  itemPrice: {
    fontSize: 15,
    fontWeight: '600',
  },

  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingHorizontal: 5,
  },

  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  totalPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0C831F',
  },

  homeBtn: {
    backgroundColor: '#0C831F',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 30,
  },

  homeBtnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

});