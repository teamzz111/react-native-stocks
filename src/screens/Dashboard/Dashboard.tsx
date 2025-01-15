import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

const mockMetrics = {
  totalUsers: 256,
  activeUsers: 180,
  totalProducts: 45,
  totalOrders: 1234,
  revenue: 45600,
};

export const DashboardScreen: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.screenTitle}>Dashboard</Text>

      <View style={styles.metricsContainer}>
        <View style={styles.metricCard}>
          <Text style={styles.metricValue}>{mockMetrics.totalUsers}</Text>
          <Text style={styles.metricLabel}>Total users</Text>
        </View>
        <View style={styles.metricCard}>
          <Text style={styles.metricValue}>{mockMetrics.activeUsers}</Text>
          <Text style={styles.metricLabel}>Active users</Text>
        </View>
        <View style={styles.metricCard}>
          <Text style={styles.metricValue}>{mockMetrics.totalProducts}</Text>
          <Text style={styles.metricLabel}>Products</Text>
        </View>
        <View style={styles.metricCard}>
          <Text style={styles.metricValue}>
            ${mockMetrics.revenue.toLocaleString()}
          </Text>
          <Text style={styles.metricLabel}>Incomes</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recent Activity</Text>
        <View style={styles.activityList}>
          <Text style={styles.activityItem}>New user registered</Text>
          <Text style={styles.activityItem}>Order ID #1234</Text>
          <Text style={styles.activityItem}>Updated product</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    padding: 16,
  },
  screenTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#1F2937',
  },
  metricsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  metricCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    width: '48%',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  metricValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 8,
  },
  metricLabel: {
    fontSize: 14,
    color: '#6B7280',
  },
  section: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#1F2937',
  },
  activityList: {
    gap: 12,
  },
  activityItem: {
    fontSize: 14,
    color: '#4B5563',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
});
