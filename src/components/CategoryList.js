import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const categories = [
  'All',
  'Fruits',
  'Vegetables',
  'Dairy',
  'Bakery',
  'Snacks',
  'Beverages',
  'Groceries',
];

const CategoryList = ({
  selectedCategory,
  setSelectedCategory,
}) => {

  return (

    <View style={styles.container}>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={categories}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (

          <TouchableOpacity
            style={[
              styles.categoryBtn,

              selectedCategory === item &&
                styles.activeCategory,
            ]}
            onPress={() => setSelectedCategory(item)}
          >

            <Text
              style={[
                styles.categoryText,

                selectedCategory === item &&
                  styles.activeText,
              ]}
            >
              {item}
            </Text>

          </TouchableOpacity>

        )}
      />

    </View>
  );
};

export default CategoryList;

const styles = StyleSheet.create({

  container: {
    marginVertical: 10,
  },

  categoryBtn: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },

  activeCategory: {
    backgroundColor: '#0C831F',
    borderColor: '#0C831F',
  },

  categoryText: {
    color: '#333',
    fontWeight: '500',
  },

  activeText: {
    color: '#fff',
    fontWeight: 'bold',
  },

});