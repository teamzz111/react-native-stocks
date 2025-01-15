import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from '../screens/Login/Login';
import {useAuth} from '../hooks/useAuth';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types/navigation.types';
import {RoleBasedNavigator} from './RoleBasedNavigation';
import LoadingScreen from '../screens/Loading/Loading';

const RootNavigation: React.FC = () => {
  const {user, loading} = useAuth();
  const Stack = createNativeStackNavigator<RootStackParamList>();

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {user ? (
          <Stack.Screen name="MainApp" component={RoleBasedNavigator} />
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
