import React from 'react';
import * as eva from '@eva-design/eva';

import RootNavigation from './src/router/NavigationContainer';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {AuthProvider} from './src/store/auth-context';

function App(): React.JSX.Element {
  return (
    <AuthProvider>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.dark}>
        <RootNavigation />
      </ApplicationProvider>
    </AuthProvider>
  );
}

export default App;
