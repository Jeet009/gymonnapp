import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React from 'react';

const LoadingComponent = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.whiteTextL}>{title}</Text>
      <Text style={styles.whiteTextS}>gymonnapp.com</Text>
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
    fontSize: Dimensions.get('window').width / 15,
    fontFamily: 'Poppins-Thin',
    textTransform: 'uppercase',
  },
  whiteTextS: {
    color: 'white',
    fontSize: Dimensions.get('window').width / 35,
    fontFamily: 'Poppins-Regular',
    // textTransform: 'uppercase',
  },
});
export default LoadingComponent;
