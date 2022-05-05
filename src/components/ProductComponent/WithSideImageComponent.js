import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import BadgeComponent from '../BadgeComponent';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

const WithSideImageComponent = ({title, location, route}) => {
  const navigation = useNavigation();
  const handleNavigation = () => {
    navigation.navigate(route);
  };
  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigation}>
      <ImageBackground
        style={styles.img}
        source={{
          uri: 'https://images.pexels.com/photos/2468339/pexels-photo-2468339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        }}
        resizeMode="contain"
        borderRadius={5}
        blurRadius={3}>
        <BadgeComponent text="GYMONN" color="#441b00" width="100%" />
      </ImageBackground>

      <View style={styles.textContainer}>
        <BadgeComponent text="VERIFIED" color="green" />
        <Text style={styles.whiteTextL}>
          {title.length > 18 ? `${title.substring(0, 15)} ...` : title}
        </Text>
        <Text style={styles.whiteText}>{`${location}, INDIA`}</Text>
        <View style={styles.iconContainer}>
          <Icon name="star" size={15} color="#441b00" />
          <Icon name="star" size={15} color="#441b00" style={{marginLeft: 3}} />
          <Icon name="star" size={15} color="#441b00" style={{marginLeft: 3}} />
          <Icon name="star" size={15} color="#441b00" style={{marginLeft: 3}} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  img: {
    width: 100,
    height: '100%',
    margin: '0.2%',
    justifyContent: 'flex-end',
  },
  container: {
    height: 150,
    backgroundColor: '#d99467',
    borderRadius: 5,
    flexDirection: 'row',
    padding: '0.5%',
    marginTop: 5,
    overflow: 'hidden',
  },
  textContainer: {
    marginTop: 5,
    marginLeft: 15,
  },
  whiteText: {
    color: 'white',
    fontFamily: 'Poppins-Bold',
  },
  whiteTextL: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
    marginTop: 5,
  },
  iconContainer: {
    flexDirection: 'row',
  },
});

export default WithSideImageComponent;
