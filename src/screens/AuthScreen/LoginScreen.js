import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useContext, useState} from 'react';
import {AuthContext} from '../../context/AuthContext';
import {LoadingContext} from '../../context/LoadingContext';
import LoadingComponent from '../../components/LoadingComponent.js';

const LoginScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState();
  const [code, setCode] = useState();
  const {handleAuth, confirm, handleOtp} = useContext(AuthContext);
  const {isLoading} = useContext(LoadingContext);
  return isLoading ? (
    <LoadingComponent title="Authenticating ..." />
  ) : (
    <ImageBackground
      style={styles.container}
      source={{
        uri: 'https://images.pexels.com/photos/2468339/pexels-photo-2468339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      }}
      resizeMode="cover">
      {confirm ? (
        <View style={styles.overlay}>
          <View>
            <Text style={styles.whiteTextS}>OTP VERIFICATION</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter OTP"
              keyboardType="numeric"
              placeholderTextColor="#1d1d1d"
              onChangeText={text => setCode(text)}
            />
          </View>
          <TouchableOpacity style={styles.btn} onPress={() => handleOtp(code)}>
            <Text style={styles.btnText}>Confirm</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.overlay}>
          <View>
            <Text style={styles.whiteTextL}>Gymonn</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Phone Number"
              keyboardType="numeric"
              placeholderTextColor="#1d1d1d"
              onChangeText={text => setPhoneNumber(text)}
            />
          </View>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => handleAuth(phoneNumber)}>
            <Text style={styles.btnText}>Let's Get Started</Text>
          </TouchableOpacity>
        </View>
      )}
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
    fontSize: Dimensions.get('window').width / 5.5,
    fontFamily: 'Poppins-Medium',
    textTransform: 'uppercase',
  },
  whiteTextS: {
    color: 'white',
    fontSize: Dimensions.get('window').width / 12,
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
    color: '#1d1d1d',
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
