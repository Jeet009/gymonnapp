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

const BannerComponent = ({title, desc, btnText, imgUri}) => {
  return (
    <ImageBackground
      style={styles.bannerContainer}
      source={{
        uri: imgUri,
      }}
      resizeMode="cover"
      borderRadius={5}
      blurRadius={3}>
      <View style={styles.imgOverlay}>
        <BadgeComponent text="GYMONN" color="#441b00" />
        <Text style={styles.bannerTitle}>{title}</Text>
        <Text style={styles.whiteTextC}>{desc}</Text>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => console.log('Open Subscription Page')}>
          <Text style={{fontFamily: 'Poppins-Medium', color: 'black'}}>
            {btnText}
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
    fontSize: 25,
    color: 'white',
    marginTop: 2,
    marginBottom: 2,
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
  whiteTextC: {
    color: 'white',
    textTransform: 'uppercase',
    fontFamily: 'Poppins-Regular',
  },
});

export default BannerComponent;
