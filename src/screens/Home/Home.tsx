import React from 'react';
import {useAuth} from '../../hooks/useAuth';
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const mockProducts = [
  {id: '1', name: 'Product 1', price: 29.99, category: 'Category 1'},
  {id: '2', name: 'Product 2', price: 39.99, category: 'Category 2'},
  {id: '3', name: 'Product 3', price: 19.99, category: 'Category 1'},
];

const HomeScreen: React.FC = () => {
  const {user} = useAuth();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.welcomeSection}>
        <Text style={styles.welcomeTitle}>Welcome, {user?.name}</Text>
        <Text style={styles.welcomeSubtitle}>
          What would you like to do today?
        </Text>
      </View>

      <View style={styles.quickActions}>
        <TouchableOpacity style={styles.actionCard}>
          <Text style={styles.actionText}>View Products</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionCard}>
          <Text style={styles.actionText}>My Orders</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Featured Products</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={mockProducts}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View style={styles.productCard}>
              <View style={styles.productImage} />
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productPrice}>${item.price}</Text>
            </View>
          )}
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  headerButton: {
    padding: 8,
  },

  welcomeSection: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  welcomeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 8,
  },
  welcomeSubtitle: {
    fontSize: 16,
    color: '#6B7280',
  },
  quickActions: {
    flexDirection: 'row',
    padding: 20,
    gap: 16,
  },
  actionCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  actionText: {
    marginTop: 8,
    fontSize: 14,
    color: '#1F2937',
    textAlign: 'center',
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
    color: '#1F2937',
  },
  productCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 12,
    marginRight: 16,
    width: 160,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  productImage: {
    backgroundColor: '#E5E7EB',
    height: 120,
    borderRadius: 8,
    marginBottom: 12,
  },
  productName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1F2937',
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 14,
    color: '#007AFF',
    fontWeight: '600',
  },
});
