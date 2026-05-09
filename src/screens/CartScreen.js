import React, { useContext } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import { CartContext } from '../context/CartContext';
const CartScreen = ({ navigation }) => {
  const {
    cart,
    increaseQty,
    decreaseQty,
  } = useContext(CartContext);
  const total = cart.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );
  if (cart.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>
          Your Cart is Empty 🛒
        </Text>

      </View>
    );
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        keyExtractor={(item) =>
          item.id.toString()
        }
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 150,
        }}
        renderItem={({ item }) => (
          <View style={styles.card}>         
            <Image
              source={{ uri: item.image }}
              style={styles.image}
            />
            <View style={styles.info}>
              <Text
                numberOfLines={1}
                style={styles.title}
              >
                {item.name}
              </Text>
              <Text style={styles.price}>
                ₹ {item.price}
              </Text>
              <View style={styles.qtyContainer}>
                <TouchableOpacity
                  style={styles.qtyBtn}
                  onPress={() =>
                    decreaseQty(item.id)
                  }
                >
                  <Text style={styles.qtyText}>
                    -
                  </Text>
                </TouchableOpacity>

                <Text style={styles.qtyValue}>
                  {item.quantity}
                </Text>

                <TouchableOpacity
                  style={styles.qtyBtn}
                  onPress={() =>
                    increaseQty(item.id)
                  }
                >
                  <Text style={styles.qtyText}>
                    +
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      />
      <View style={styles.footer}>\
        <Text style={styles.billTitle}>
          Bill Summary
        </Text>
        <View style={styles.billRow}>
          <Text>Items Total</Text>
          <Text>
            ₹ {total.toFixed(2)}
          </Text>
        </View>
        <View style={styles.billRow}>
          <Text>Delivery Fee</Text>
          <Text>₹ 40</Text>
        </View>
        <View style={styles.billRow}>
          <Text style={styles.grandTotal}>
            Grand Total
          </Text>
          <Text style={styles.grandTotal}>
            ₹ {(total + 40).toFixed(2)}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.checkoutBtn}
          onPress={() =>
            navigation.navigate(
              'Checkout',
              {
                total:
                  total + 40,
              }
            )
          }
        >
          <Text style={styles.checkoutText}>
            Proceed to Checkout
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default CartScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 10,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#666',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    elevation: 3,
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  info: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
  },
  price: {
    fontSize: 16,
    color: '#0C831F',
    fontWeight: 'bold',
  },
  qtyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  qtyBtn: {
    backgroundColor: '#0C831F',
    paddingHorizontal: 14,
    paddingVertical: 4,
    borderRadius: 5,
  },
  qtyText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  qtyValue: {
    marginHorizontal: 12,
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    padding: 15,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 10,
  },
  billTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  billRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  grandTotal: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  checkoutBtn: {
    backgroundColor: '#0C831F',
    padding: 14,
    borderRadius: 10,
    marginTop: 15,
    alignItems: 'center',
  },
  checkoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});