import React, {useContext} from 'react';
import {AuthProvider} from './src/context/AuthContext';
import {LoadingProvider} from './src/context/LoadingContext';
import {LocationProvider} from './src/context/LocationContext';
import {ScrollProvider} from './src/context/ScrollContext';

import StackRoute from './src/routes/StackRoute';

const App = () => {
  return (
    <LoadingProvider>
      <AuthProvider>
        <LocationProvider>
          <ScrollProvider>
            <StackRoute />
          </ScrollProvider>
        </LocationProvider>
      </AuthProvider>
    </LoadingProvider>
  );
};
export default App;
