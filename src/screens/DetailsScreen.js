import React, { useContext } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { CartContext } from '../context/CartContext';
const DetailsScreen = ({ route }) => {
  const { item } = route.params;
  const { addToCart } =
    useContext(CartContext);
  return (

    <View style={styles.container}>

      <Image
        source={{ uri: item.image }}
        style={styles.image}
      />
      <View style={styles.content}>
        <Text style={styles.title}>
          {item.name}
        </Text>

        <Text style={styles.price}>
          ₹ {item.price}
        </Text>

        <Text style={styles.description}>
          {item.description}
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            addToCart(item)
          }
        >

          <Text style={styles.btnText}>
            Add To Cart
          </Text>

        </TouchableOpacity>

      </View>

    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  image: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    marginTop: 20,
  },

  content: {
    padding: 20,
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },

  price: {
    fontSize: 20,
    color: '#0C831F',
    fontWeight: 'bold',
    marginTop: 10,
  },

  description: {
    marginTop: 15,
    fontSize: 15,
    color: '#444',
  },

  button: {
    backgroundColor: '#0C831F',
    padding: 15,
    borderRadius: 10,
    marginTop: 25,
    alignItems: 'center',
  },

  btnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },

});