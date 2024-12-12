import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeStack from './HomeStack';

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  );
}
