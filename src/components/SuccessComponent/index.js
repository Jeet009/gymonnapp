import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const SuccessComponent = ({vendorName}) => {
  const navigation = useNavigation();
  const handleNavigation = () => {
    navigation.navigate('Home');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.whiteTextL}> Thanks For Taking Membership</Text>
      <Text style={styles.whiteTextL}>{vendorName}</Text>
      <Text style={styles.whiteTextS}>gymonnapp.com</Text>
      <TouchableOpacity style={styles.btnDark} onPress={handleNavigation}>
        <Text style={styles.btnTextW}>Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1d1d1d',
    height: '100%',
    // borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  whiteTextL: {
    color: 'white',
    fontSize: Dimensions.get('window').width / 20,
    fontFamily: 'Poppins-Thin',
    textTransform: 'uppercase',
  },
  whiteTextS: {
    color: 'white',
    fontSize: Dimensions.get('window').width / 35,
    fontFamily: 'Poppins-Regular',
    // textTransform: 'uppercase',
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
  btnTextW: {
    fontSize: 12,
    color: 'white',
    fontFamily: 'Poppins-Medium',
  },
});
export default SuccessComponent;
