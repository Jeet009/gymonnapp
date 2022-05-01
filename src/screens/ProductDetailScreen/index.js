import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import BannerComponent from '../../components/BannerComponent';

const ProductDetail = () => {
  return (
    <ImageBackground
      style={styles.container}
      source={{
        uri: 'https://images.pexels.com/photos/2468339/pexels-photo-2468339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      }}
      resizeMode="cover"
      blurRadius={5}>
      <ScrollView>
        <View style={styles.overlay}>
          <Text style={styles.whiteTextL}>ABC Gym</Text>
          <Text style={styles.whiteText}>WB, INDIA</Text>
          <Text style={styles.whiteTextC}>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate.
          </Text>
          <View style={styles.iconContainer}>
            <Icon name="star" size={15} color="#ffae7a" />
            <Icon
              name="star"
              size={15}
              color="#ffae7a"
              style={{marginLeft: 3}}
            />
            <Icon
              name="star"
              size={15}
              color="#ffae7a"
              style={{marginLeft: 3}}
            />
            <Icon
              name="star"
              size={15}
              color="#ffae7a"
              style={{marginLeft: 3}}
            />
          </View>
          <ImageBackground
            style={styles.imgLong}
            source={{
              uri: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            }}
            resizeMode="cover"></ImageBackground>
          <View style={styles.imgContainer}>
            <ImageBackground
              style={styles.imgHeight}
              source={{
                uri: 'https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
              }}
              resizeMode="cover"></ImageBackground>
            <ImageBackground
              style={styles.imgHeight}
              source={{
                uri: 'https://images.pexels.com/photos/3289711/pexels-photo-3289711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
              }}
              resizeMode="cover"></ImageBackground>
          </View>
          <View>
            <Text style={styles.whiteTextC}>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate.
            </Text>
            <Text style={styles.whiteTextC}>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate.In publishing and graphic
              design.
            </Text>
          </View>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>BOOK A TRIAL</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnDark}>
            <Text style={styles.btnTextW}>GET A MEMBERSHIP FOR ONE MONTH</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: '100%',
  },
  overlay: {
    minHeight: '100%',
    backgroundColor: '#36150089',
    padding: '5%',
  },
  whiteTextL: {
    color: 'white',
    fontSize: Dimensions.get('window').width / 8,
    fontFamily: 'Poppins-Regular',
    marginTop: 25,
  },
  whiteText: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
  },
  whiteTextC: {
    color: 'white',
    textTransform: 'uppercase',
    fontFamily: 'Poppins-Regular',
  },
  btn: {
    backgroundColor: '#ffae7a',
    width: Dimensions.get('window').width / 1.1,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 35,
    marginTop: 20,
  },
  btnDark: {
    backgroundColor: '#1a1a1a',
    width: Dimensions.get('window').width / 1.1,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 35,
    marginTop: 20,
  },
  btnText: {
    fontSize: 18,
    color: 'black',
    fontFamily: 'Poppins-Medium',
  },
  btnTextW: {
    fontSize: 15,
    color: 'white',
    fontFamily: 'Poppins-Medium',
  },
  iconContainer: {
    flexDirection: 'row',
  },
  imgLong: {
    minHeight: 180,
    marginTop: 15,
    marginBottom: 5,
  },
  imgHeight: {
    minHeight: 200,
    width: Dimensions.get('window').width / 2.3,
  },
  imgContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});

export default ProductDetail;
