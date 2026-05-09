import React, { useContext } from 'react';

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import { CartContext } from '../context/CartContext';

const ProductCard = ({
  item,
  navigation,
}) => {

  const {
    cart,
    addToCart,
    increaseQty,
    decreaseQty,
  } = useContext(CartContext);
  const cartItem = cart.find(
    product => product.id === item.id
  );

  return (

    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.card}
    >
      <Image
        source={{ uri: item.image }}
        style={styles.image}
      />
      <Text
        numberOfLines={2}
        style={styles.name}
      >
        {item.name}
      </Text>
      <Text style={styles.price}>
        ₹ {item.price}
      </Text>
      <Text style={styles.delivery}>
        ⚡ 10 mins
      </Text>
      {!cartItem ? (

        <TouchableOpacity
          style={styles.addBtn}
          onPress={() => addToCart(item)}
        >

          <Text style={styles.addBtnText}>
            ADD
          </Text>

        </TouchableOpacity>

      ) : (

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
            {cartItem.quantity}
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

      )}
      <TouchableOpacity
        style={styles.detailBtn}
        onPress={() =>
          navigation.navigate(
            'Details',
            { product: item }
          )
        }
      >

        <Text style={styles.detailText}>
          View Details
        </Text>

      </TouchableOpacity>

    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({

  card: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 10,
    marginBottom: 12,
    elevation: 3,
  },

  image: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
  },

  name: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: 8,
    minHeight: 40,
  },

  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0C831F',
    marginTop: 5,
  },

  delivery: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },

  addBtn: {
    backgroundColor: '#0C831F',
    marginTop: 10,
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: 'center',
  },

  addBtnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },

  qtyContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },

  qtyBtn: {
    backgroundColor: '#0C831F',
    paddingHorizontal: 12,
    paddingVertical: 5,
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

  detailBtn: {
    marginTop: 10,
    alignItems: 'center',
  },

  detailText: {
    color: '#007BFF',
    fontWeight: '600',
  },

});