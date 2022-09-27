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
import {useNavigation} from '@react-navigation/native';

const ProductDetail = ({route}) => {
  const {data} = route.params;

  const navigation = useNavigation();
  const handleNavigation = () => {
    navigation.navigate('MembershipForm', {
      data,
    });
  };
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
          <Text style={styles.whiteTextL}>{data.name}</Text>
          <Text style={styles.whiteText}>{data.state}, INDIA</Text>
          <Text style={styles.whiteTextC}>{data.desc}</Text>
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
              uri: data.detail_img_obj.imgOne,
            }}
            borderRadius={5}
            resizeMode="cover"></ImageBackground>
          <View style={styles.imgContainer}>
            <ImageBackground
              style={styles.imgHeight}
              source={{
                uri: data.detail_img_obj.imgTwo,
              }}
              borderRadius={5}
              resizeMode="cover"></ImageBackground>
            <ImageBackground
              style={styles.imgHeight}
              source={{
                uri: data.detail_img_obj.imgThree,
              }}
              borderRadius={5}
              resizeMode="cover"></ImageBackground>
          </View>
          <View>
            <Text style={styles.whiteTextC}>{data.details}</Text>
          </View>
          <View style={styles.iconList}>
            <View style={styles.iconMaker}>
              <Icon
                name={data.separate_washroom ? 'check-circle' : 'times-circle'}
                size={20}
                color="#ffae7a"
              />
              <Text style={styles.iconTextW}>Separate Washroom</Text>
            </View>
            <View style={styles.iconMaker}>
              <Icon
                name={data.music_player ? 'check-circle' : 'times-circle'}
                size={20}
                color="#ffae7a"
              />
              <Text style={styles.iconTextW}>Music Player</Text>
            </View>
          </View>
          <View style={styles.iconList}>
            <View style={styles.iconMaker}>
              <Icon
                name={data.power_backup ? 'check-circle' : 'times-circle'}
                size={20}
                color="#ffae7a"
              />
              <Text style={styles.iconTextW}>Power Backup</Text>
            </View>
            <View style={styles.iconMaker}>
              <Icon
                name={data.parking ? 'check-circle' : 'times-circle'}
                size={20}
                color="#ffae7a"
              />
              <Text style={styles.iconTextW}>Parking</Text>
            </View>
          </View>
          <View style={styles.iconList}>
            <View style={styles.iconMaker}>
              <Icon
                name={data.trainer ? 'check-circle' : 'times-circle'}
                size={20}
                color="#ffae7a"
              />
              <Text style={styles.iconTextW}>Trainer</Text>
            </View>
            <View style={styles.iconMaker}>
              <Icon
                name={data.daily_sanitization ? 'check-circle' : 'times-circle'}
                size={20}
                color="#ffae7a"
              />
              <Text style={styles.iconTextW}>Daily Senitizaion</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.btn} onPress={handleNavigation}>
            <Text style={styles.btnText}>BOOK A TRIAL</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnDark} onPress={handleNavigation}>
            <Text style={styles.btnTextW}>GET A MEMBERSHIP FOR ONE MONTH</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  overlay: {
    minHeight: '100%',
    backgroundColor: '#1d1d1d98',
    padding: '3%',
  },
  whiteTextL: {
    color: 'white',
    fontSize: 35,
    // fontSize: Dimensions.get('window').width ,
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
    fontSize: 12,
  },
  btn: {
    backgroundColor: '#ffae7a',
    // width: Dimensions.get('window').width / 1.1,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 35,
    marginTop: 20,
  },
  btnDark: {
    backgroundColor: '#1a1a1a',
    // width: Dimensions.get('window').width / 1.1,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 35,
    marginTop: 20,
    marginBottom: 50,
  },
  btnText: {
    fontSize: 18,
    color: 'black',
    fontFamily: 'Poppins-Medium',
  },
  btnTextW: {
    fontSize: 12,
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
    backgroundColor: '#666666',
    borderRadius: 5,
  },
  imgHeight: {
    minHeight: 200,
    width: Dimensions.get('window').width / 2.2,
    borderRadius: 10,
    backgroundColor: '#666666',
  },
  imgContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  iconMaker: {
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#666666',
    padding: 5,
    borderRadius: 5,
    width: '49%',
  },
  iconTextW: {
    fontSize: 10,
    color: 'white',
    fontFamily: 'Poppins-Medium',
    marginLeft: 5,
    textTransform: 'uppercase',
  },
  iconList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});

export default ProductDetail;
