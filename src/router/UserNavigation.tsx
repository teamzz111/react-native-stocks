import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {UserTabParamList} from '../types/navigation.types';
import ProductsScreen from '../screens/Product/Product';
import {Icon} from 'react-native-eva-icons';
import HomeScreen from '../screens/Home/Home';
import {useAuth} from '../hooks/useAuth';
import {Text, TouchableOpacity} from 'react-native';

const UserTab = createBottomTabNavigator<UserTabParamList>();

const USER_SCREENS = {
  Home: {
    component: HomeScreen,
    icon: {active: 'home', inactive: 'home-outline'},
    title: 'Home',
  },
  Products: {
    component: ProductsScreen,
    icon: {active: 'list', inactive: 'car-outline'},
    title: 'Products',
  },
} as const;

const UserNavigator: React.FC = () => {
  const {logout} = useAuth();

  const LogoutButton = () => (
    <TouchableOpacity style={{marginRight: 20}} onPress={logout}>
      <Text>Logout</Text>
    </TouchableOpacity>
  );

  return (
    <UserTab.Navigator
      screenOptions={({route}) => ({
        headerRight: () => <LogoutButton />,
        tabBarIcon: ({focused, color}) => {
          const iconName = focused
            ? USER_SCREENS[route.name].icon.active
            : USER_SCREENS[route.name].icon.inactive;
          return <Icon name={iconName} color={color} />;
        },
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: 'gray',

        headerShown: true,
      })}>
      {(Object.keys(USER_SCREENS) as Array<keyof typeof USER_SCREENS>).map(
        screenName => (
          <UserTab.Screen
            key={screenName}
            name={screenName}
            component={USER_SCREENS[screenName].component}
            options={{
              title: USER_SCREENS[screenName].title,
            }}
          />
        ),
      )}
    </UserTab.Navigator>
  );
};

export default UserNavigator;
