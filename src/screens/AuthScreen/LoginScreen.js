import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const LoginScreen = () => {
  return (
    <ImageBackground
      style={styles.container}
      source={{
        uri: 'https://images.pexels.com/photos/2468339/pexels-photo-2468339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      }}
      resizeMode="cover">
      <View style={styles.overlay}>
        <View>
          <Text style={styles.whiteTextL}>Gymonn</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Phone Number"
            keyboardType="numeric"
          />
        </View>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Let's Get Started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: '100%',
  },
  overlay: {
    minHeight: '100%',
    backgroundColor: '#36150073',
    justifyContent: 'center',
    alignItems: 'center',
  },
  whiteTextL: {
    color: 'white',
    fontSize: Dimensions.get('window').width / 5,
    fontFamily: 'Poppins-Medium',
    textTransform: 'uppercase',
  },
  input: {
    height: 40,
    padding: 10,
    width: Dimensions.get('window').width / 1.1,
    backgroundColor: 'white',
    borderRadius: 5,
    fontSize: 15,
  },
  btn: {
    backgroundColor: '#ffae7a',
    width: Dimensions.get('window').width / 1.1,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 35,
    position: 'absolute',
    bottom: 20,
  },
  btnText: {
    fontSize: 18,
    color: 'black',
    fontFamily: 'Poppins-Medium',
  },
});

export default LoginScreen;
