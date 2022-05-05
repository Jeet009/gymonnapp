import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  Animated,
} from 'react-native';
import React, {useContext, useEffect, useState, useRef} from 'react';
import WithSideImageComponent from '../../components/ProductComponent/WithSideImageComponent';
import {useNavigation} from '@react-navigation/native';
import {ServiceContext} from '../../context/ServiceContext';
import {ScrollContext} from '../../context/ScrollContext';
import {LoadingContext} from '../../context/LoadingContext';
import LoadingComponent from '../../components/LoadingComponent.js';

const ProductListScreen = ({route}) => {
  const {dbParam} = route.params;
  const navigation = useNavigation();

  const [services, setServices] = useState();

  const {fetchAllServicesByCoords} = useContext(ServiceContext);
  const {isScrolling, handleScrollingState} = useContext(ScrollContext);
  const {isLoading, handleLoadingState} = useContext(LoadingContext);

  const handleScroll = event => {
    if (event.nativeEvent.contentOffset.y <= 0) {
      handleScrollingState(false);
    } else if (event.nativeEvent.contentOffset.y >= 5) {
      handleScrollingState(true);
    }
  };

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

  useEffect(() => {
    fetchAllServicesByCoords(dbParam).then(res => {
      setServices(res);
      handleLoadingState(false);
    });
  }, []);

  const renderItem = ({item}) => (
    <WithSideImageComponent
      title={item.name}
      location={item.state}
      route="ProductDetails"
    />
  );

  return isLoading ? (
    <LoadingComponent title={`Fetching ${dbParam} ...`} />
  ) : (
    <View style={styles.container}>
      {!isScrolling && (
        <FadeInView style={styles.topPosition}>
          <View>
            <Text style={styles.whiteTextL}>{dbParam}</Text>
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
      )}
      {!isScrolling && <FadeInView style={styles.br}></FadeInView>}
      <SafeAreaView style={styles.listContainer}>
        <FlatList
          data={services}
          renderItem={renderItem}
          keyExtractor={item => item._id}
          onScroll={handleScroll}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1d1d1d',
    flex: 1,
  },
  topPosition: {
    backgroundColor: '#1a1a1a',

    flexDirection: 'row',
    position: 'absolute',
    zIndex: 2,
    width: '100%',
    padding: '5%',
  },
  whiteText: {
    color: 'white',
    fontFamily: 'Poppins-Bold',
  },
  whiteTextL: {
    color: 'white',
    fontSize: 30,
    fontFamily: 'Poppins-Regular',
    textTransform: 'capitalize',
  },
  avatar: {
    height: 80,
    width: 80,
    marginLeft: 'auto',
  },
  listContainer: {
    // flex: 1,
    padding: '2%',
  },
  list: {
    paddingTop: 120,
  },
  br: {
    height: 120,
  },
});
export default ProductListScreen;
