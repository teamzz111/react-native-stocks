import React from 'react';
import * as eva from '@eva-design/eva';

import RootNavigation from './src/router/NavigationContainer';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {StatusBar} from 'react-native';

function App(): React.JSX.Element {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.dark}>
        <RootNavigation />
      </ApplicationProvider>
    </>
  );
}

export default App;
