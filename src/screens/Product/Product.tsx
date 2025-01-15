import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ProductsScreen: React.FC = () => (
  <View style={styles.screen}>
    <Text style={styles.title}>Products</Text>
    <Text>Catalog products</Text>
  </View>
);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  logoutButton: {
    marginTop: 20,
    backgroundColor: '#ff3b30',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default ProductsScreen;
