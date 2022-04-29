import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ImageBackground,
} from 'react-native';
import React from 'react';
import BadgeComponent from '../BadgeComponent';

const BannerComponent = () => {
  return (
    <ImageBackground
      style={styles.bannerContainer}
      source={{
        uri: 'https://images.pexels.com/photos/3094230/pexels-photo-3094230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      }}
      resizeMode="cover"
      borderRadius={5}
      blurRadius={3}>
      <View style={styles.imgOverlay}>
        <BadgeComponent />
        <Text style={styles.bannerTitle}>Get Subscription Now</Text>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => console.log('Open Subscription Page')}>
          <Text style={{fontFamily: 'Poppins-Medium', color: 'black'}}>
            Join Now
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  bannerContainer: {
    height: '100%',
  },
  imgOverlay: {
    height: '100%',
    paddingTop: '10%',
    paddingBottom: '8%',
    paddingLeft: '3%',
    paddingRight: '3%',
    backgroundColor: '#36150073',
  },
  bannerTitle: {
    fontSize: 30,
    color: 'white',
    marginTop: 6,
    marginBottom: 6,
    fontFamily: 'Poppins-Regular',
  },
  btn: {
    backgroundColor: '#ffae7a',
    alignSelf: 'flex-start',
    borderRadius: 5,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 6,
    paddingBottom: 6,
  },
});

export default BannerComponent;
