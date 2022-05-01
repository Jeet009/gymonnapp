import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import LoginScreen from './src/screens/AuthScreen/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import ProductDetail from './src/screens/ProductDetailScreen';
import ProductListScreen from './src/screens/ProductListScreen';
import ProfileScreen from './src/screens/ProfileScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <HomeScreen />
      {/* <ProductListScreen /> */}
      {/* <LoginScreen /> */}
      {/* <ProductDetail /> */}
      {/* <ProfileScreen /> */}
    </SafeAreaView>
  );
};
export default App;
