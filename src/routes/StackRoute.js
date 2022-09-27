import React, {useContext, useEffect, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Animated,
  StatusBar,
} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import ProductDetail from '../screens/ProductDetailScreen';
import ProductListScreen from '../screens/ProductListScreen';
import MembershipFormScreen from '../screens/FormScreen/MembershipFormScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ScrollContext} from '../context/ScrollContext';
import {AuthContext} from '../context/AuthContext';
import LoginScreen from '../screens/AuthScreen/LoginScreen';
import {LocationContext} from '../context/LocationContext';
import PaymentMethodScreen from '../screens/PaymentMethodScreen';
import CurrentMembership from '../screens/MembershipScreen/CurrentMembership';
import MembershipDetails from '../screens/MembershipScreen/MembershipDetails';
import EditInfo from '../screens/ProfileScreen/EditInfo';
import Attendence from '../screens/MembershipScreen/Attendence';

const Stack = createNativeStackNavigator();

const FadeInView = props => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim, // Bind opacity to animated value
      }}>
      {props.children}
    </Animated.View>
  );
};

const Header = () => {
  const navigation = useNavigation();
  return (
    <FadeInView
      style={{
        flexDirection: 'row',
        backgroundColor: '#1d1d1d',
        padding: '5%',
        position: 'absolute',
        top: 0,
        zIndex: 2,
        width: '100%',
      }}>
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
    </FadeInView>
  );
};

const Search = () => {
  return (
    <FadeInView style={styles.searchContainer}>
      <StatusBar backgroundColor="#1d1d1d" barStyle="light-content" />

      <TouchableOpacity style={styles.searchForm}>
        <Icon name="search" size={20} color="#1a1a1a80" />
        <Text style={styles.searchText}>Find Your Near By Gyms ...</Text>
      </TouchableOpacity>
    </FadeInView>
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
            <Stack.Screen
              name="ProductList"
              component={ProductListScreen}
              options={{
                header: () => (
                  <>
                    {!isScrolling && <Header />}
                    <Search />
                  </>
                ),
              }}
            />
            <Stack.Screen
              name="ProductDetails"
              component={ProductDetail}
              options={{
                header: () => (
                  <>
                    {!isScrolling && <Header />}
                    <Search />
                  </>
                ),
              }}
            />
            <Stack.Screen
              name="MembershipForm"
              component={MembershipFormScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen
              name="PaymentMethod"
              component={PaymentMethodScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="CurrentMembership"
              component={CurrentMembership}
            />
            <Stack.Screen
              name="MembershipDetails"
              component={MembershipDetails}
            />
            <Stack.Screen name="EditInfo" component={EditInfo} />
            <Stack.Screen name="Attendence" component={Attendence} />
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
    fontFamily: 'Poppins-ExtraLight',
  },
  whiteTextL: {
    color: 'white',
    fontFamily: 'Poppins-Light',
    margin: 0,
    fontSize: 20,
    lineHeight: 20 * 1.4,
    height: 25,
    textTransform: 'uppercase',
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
    padding: 20,
    backgroundColor: '#1a1a1a',
  },
  searchText: {
    color: '#1a1a1a',
    fontFamily: 'Poppins-Light',
    marginLeft: '3%',
  },
});

export default StackRoute;
