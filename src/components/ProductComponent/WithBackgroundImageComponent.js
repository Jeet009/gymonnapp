import {
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  View,
  Text,
} from 'react-native';
import React from 'react';
import BadgeComponent from '../BadgeComponent';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

const WithBackgroundImageComponent = ({route}) => {
  const navigation = useNavigation();
  const handleNavigation = () => {
    navigation.navigate(route);
  };
  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigation}>
      <ImageBackground
        style={styles.bannerContainer}
        source={{
          uri: 'https://images.pexels.com/photos/416809/pexels-photo-416809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        }}
        resizeMode="cover"
        borderRadius={5}
        blurRadius={3}>
        <View style={styles.overlay}>
          <BadgeComponent text="VERIFIED" color="green" />
          <View style={styles.textContainer}>
            <Text style={styles.whiteTextL}>ABC Gym</Text>
            <Text style={styles.whiteText}>WB, INDIA</Text>
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
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: 170,
    borderRadius: 5,
  },
  bannerContainer: {
    height: 200,
    width: 170,
  },
  overlay: {
    height: 200,
    width: 170,
    backgroundColor: '#1a1a1aa6',
    padding: '5%',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  whiteText: {
    color: 'white',
    fontFamily: 'Poppins-Bold',
  },
  whiteTextL: {
    color: 'white',
    fontSize: 25,
    fontFamily: 'Poppins-Regular',
  },
  iconContainer: {
    flexDirection: 'row',
  },
});

export default WithBackgroundImageComponent;
