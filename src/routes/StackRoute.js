import React, {useContext, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import ProductDetail from '../screens/ProductDetailScreen';
import ProductListScreen from '../screens/ProductListScreen';
import MembershipFormScreen from '../screens/FormScreen/MembershipFormScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
// import {useContext, useEffect} from 'react/cjs/react.production.min';
import {ScrollContext} from '../context/ScrollContext';
import {AuthContext} from '../context/AuthContext';
import LoginScreen from '../screens/AuthScreen/LoginScreen';
import {LocationContext} from '../context/LocationContext';

const Stack = createNativeStackNavigator();

const Header = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{flexDirection: 'row', backgroundColor: '#1a1a1a', padding: '5%'}}>
      <Icon name="map-marker" size={45} color="#ffae7a" />
      <View style={{marginLeft: '3%'}}>
        <Text style={styles.whiteTextL}>Kolkata</Text>
        <Text style={styles.whiteText}>WB, INDIA</Text>
      </View>
      <TouchableOpacity
        style={styles.avatar}
        onPress={() => navigation.navigate('Profile')}>
        <ImageBackground
          source={{
            uri: 'https://www.pngkey.com/png/detail/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png',
          }}
          resizeMode="cover"
          borderRadius={50}
          style={styles.avatar}></ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

const Search = () => {
  return (
    <View style={styles.searchContainer}>
      <TouchableOpacity style={styles.searchForm}>
        <Icon name="search" size={20} color="#1a1a1a80" />
        <Text style={styles.searchText}>Find Your Near By Gyms ...</Text>
      </TouchableOpacity>
    </View>
  );
};

const StackRoute = () => {
  const {isScrolling} = useContext(ScrollContext);
  const {authenticated} = useContext(AuthContext);
  const {handleLocationDetails} = useContext(LocationContext);

  useEffect(() => {
    handleLocationDetails();
  }, []);

  return (
    <>
      {authenticated ? (
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              header: () => <Search />,
            }}>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                header: () => (
                  <>
                    {!isScrolling && <Header />}
                    <Search />
                  </>
                ),
              }}
            />
            <Stack.Screen name="ProductList" component={ProductListScreen} />
            <Stack.Screen name="ProductDetails" component={ProductDetail} />
            <Stack.Screen
              name="MembershipForm"
              component={MembershipFormScreen}
            />
            <Stack.Screen name="Profile" component={ProfileScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      ) : (
        <LoginScreen />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  whiteText: {
    color: 'white',
    fontFamily: 'Poppins-Regular',
  },
  whiteTextL: {
    color: 'white',
    fontSize: 20,
  },
  avatar: {
    height: 50,
    width: 50,
    marginLeft: 'auto',
  },
  searchForm: {
    height: 50,
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 35,
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 25,
    backgroundColor: '#ffeee3',
    // borderColor: '',
  },
  searchContainer: {
    padding: 10,
    backgroundColor: '#1a1a1a',
  },
  searchText: {
    color: '#1a1a1a',
    fontFamily: 'Poppins-Light',
    marginLeft: '3%',
  },
});

export default StackRoute;
