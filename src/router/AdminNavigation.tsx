import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {DashboardScreen} from '../screens/Dashboard/Dashboard';
import {UsersScreen} from '../screens/Users/User';
import {useAuth} from '../hooks/useAuth';
import {Text, TouchableOpacity} from 'react-native';

type AdminTabParamList = {
  Dashboard: undefined;
  Users: undefined;
  Products: undefined;
  Settings: undefined;
};

const Tab = createBottomTabNavigator<AdminTabParamList>();

export const AdminNavigation: React.FC = () => {
  const {logout} = useAuth();

  const LogoutButton = () => (
    <TouchableOpacity style={{marginRight: 20}} onPress={logout}>
      <Text>Logout</Text>
    </TouchableOpacity>
  );

  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: 'gray',
        headerRight: () => <LogoutButton />,
        headerTitle: 'Welcome',
      })}>
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{title: 'Dashboard'}}
      />
      <Tab.Screen
        name="Users"
        component={UsersScreen}
        options={{title: 'Usuarios'}}
      />
    </Tab.Navigator>
  );
};
