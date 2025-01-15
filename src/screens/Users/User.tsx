import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export const UsersScreen: React.FC = () => {
  const mockUsers = [
    {id: '1', name: 'Usuario 1', email: 'user1@example.com', role: 'user'},
    {id: '2', name: 'Usuario 2', email: 'user2@example.com', role: 'admin'},
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>User management</Text>

      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.buttonText}>New user</Text>
      </TouchableOpacity>

      <FlatList
        data={mockUsers}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.userCard}>
            <View style={styles.userInfo}>
              <Text style={styles.userName}>{item.name}</Text>
              <Text style={styles.userEmail}>{item.email}</Text>
              <Text style={styles.userRole}>{item.role}</Text>
            </View>
            <View style={styles.userActions}>
              <TouchableOpacity style={styles.actionButton}>
                <Text>Add</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton}>
                <Text>Remove</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
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
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  buttonText: {
    color: 'white',
    marginLeft: 8,
    fontSize: 16,
    fontWeight: '600',
  },
  userCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 4,
  },
  userEmail: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 4,
  },
  userRole: {
    fontSize: 12,
    color: '#007AFF',
    textTransform: 'uppercase',
  },
  userActions: {
    flexDirection: 'row',
    gap: 12,
  },
  actionButton: {
    padding: 8,
  },
  settingsSection: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
  },
  settingsSectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
    color: '#1F2937',
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  settingLabel: {
    fontSize: 16,
    color: '#4B5563',
  },
  settingValue: {
    fontSize: 16,
    color: '#1F2937',
    fontWeight: '500',
  },
  logoutButton: {
    backgroundColor: '#FF3B30',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  logoutButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});
