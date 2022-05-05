import React, {useContext} from 'react';
import {AuthProvider} from './src/context/AuthContext';
import {LoadingProvider} from './src/context/LoadingContext';
import {LocationProvider} from './src/context/LocationContext';
import {ScrollProvider} from './src/context/ScrollContext';
import {ServiceProvider} from './src/context/ServiceContext';

import StackRoute from './src/routes/StackRoute';

const App = () => {
  return (
    <LoadingProvider>
      <AuthProvider>
        <LocationProvider>
          <ServiceProvider>
            <ScrollProvider>
              <StackRoute />
            </ScrollProvider>
          </ServiceProvider>
        </LocationProvider>
      </AuthProvider>
    </LoadingProvider>
  );
};
export default App;
