import React, { useState, useContext } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import ProductCard from '../components/ProductCard';
import CategoryList from '../components/CategoryList';
import { products } from '../data/products';
import { AuthContext } from '../context/AuthContext';
const HomeScreen = ({ navigation }) => {
  const { logout } = useContext(AuthContext);
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] =
    useState('All');
  const filteredProducts = products.filter(item => {
    const matchesCategory =
      selectedCategory === 'All' ||
      item.category === selectedCategory;
    const matchesSearch =
      item.name
        .toLowerCase()
        .includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>
          Blinkit
        </Text>
        <View style={styles.headerBtns}>
          <TouchableOpacity
            style={styles.cartBtn}
            onPress={() =>
              navigation.navigate('Cart')
            }
          >
            <Text style={styles.btnText}>
              Cart 🛒
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.logoutBtn}
            onPress={logout}
          >
            <Text style={styles.btnText}>
              Logout
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <TextInput
        placeholder="Search products..."
        value={search}
        onChangeText={setSearch}
        style={styles.searchInput}
      />
      <CategoryList
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <FlatList
        data={filteredProducts}
        numColumns={2}
        keyExtractor={(item) =>
          item.id.toString()
        }
        columnWrapperStyle={{
          justifyContent: 'space-between',
        }}
        renderItem={({ item }) => (
          <ProductCard
            item={item}
            navigation={navigation}
          />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      />
    </View>
  );
};
export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },

  logo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0C831F',
  },

  headerBtns: {
    flexDirection: 'row',
  },

  cartBtn: {
    backgroundColor: '#0C831F',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    marginRight: 8,
  },

  logoutBtn: {
    backgroundColor: '#dc3545',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
  },

  btnText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  searchInput: {
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },

});