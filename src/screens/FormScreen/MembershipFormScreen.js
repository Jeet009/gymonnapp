import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const MembershipFormScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View>
          <Text style={styles.whiteTextL}>MEMBERSHIP</Text>
        </View>
        <ImageBackground
          source={{
            uri: 'https://www.pngkey.com/png/detail/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png',
          }}
          resizeMode="cover"
          borderRadius={50}
          style={styles.avatar}></ImageBackground>
      </View>

      <View style={{marginTop: 30}}>
        <Text style={styles.whiteText}>Member Detaills</Text>
        <Text style={styles.whiteText}>+91 8001268005</Text>
        <TextInput style={styles.input} placeholder="Enter Name" />
        <TextInput style={styles.input} placeholder="Enter Email" />
        <TextInput style={styles.input} placeholder="Enter Pincode" />
        <TextInput style={styles.input} placeholder="Enter Address" />
      </View>

      <View style={{marginTop: 30}}>
        <Text style={styles.whiteText}>Gym Detaills</Text>
        <Text style={styles.whiteTextL}>ABC Gym & Co.</Text>
        <Text style={styles.whiteTextC}>WB, INDIA</Text>

        <View style={styles.imgContainer}>
          <ImageBackground
            style={styles.imgHeight}
            source={{
              uri: 'https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            }}
            resizeMode="cover"
            borderRadius={5}></ImageBackground>
          <ImageBackground
            style={styles.imgHeight}
            source={{
              uri: 'https://images.pexels.com/photos/3289711/pexels-photo-3289711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            }}
            resizeMode="cover"
            borderRadius={5}></ImageBackground>
        </View>
      </View>

      <View style={{marginTop: 30}}>
        <Text style={styles.whiteText}>Membership Detaills</Text>
        <TextInput style={styles.input} placeholder="Choose Starting Date" />
        <TextInput style={styles.input} placeholder="Choose Ending Date" />
      </View>

      <View style={{marginTop: 30}}>
        <Text style={styles.whiteText}>Membership Costing</Text>
        <Text style={styles.whiteText}>Rs. 1236 /-</Text>
      </View>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => alert('Under Development')}>
        <Text style={styles.btnText}>Confirm Membership</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: '100%',
    padding: '3%',
  },
  whiteTextL: {
    color: '#1a1a1a',
    fontSize: 25,
    fontFamily: 'Poppins-Regular',
    // marginTop: 10,
  },
  whiteText: {
    fontFamily: 'Poppins-Regular',
    color: '#1a1a1a',
    fontSize: 18,
  },
  whiteTextC: {
    color: '#1a1a1a',
    textTransform: 'uppercase',
    fontFamily: 'Poppins-Medium',
    fontSize: 15,
  },
  avatar: {
    height: 70,
    width: 70,
    marginLeft: 'auto',
  },
  input: {
    height: 40,
    padding: 10,
    width: Dimensions.get('window').width / 1.1,
    backgroundColor: 'white',
    borderRadius: 5,
    fontSize: 15,
    borderLeftColor: '#1a1a1a',
    borderWidth: 0.4,
    borderRightWidth: 0.5,
    borderBottomWidth: 0.5,
    marginTop: 10,
  },
  imgContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  imgHeight: {
    minHeight: 200,
    width: Dimensions.get('window').width / 2.3,
  },
  btn: {
    backgroundColor: '#ffae7a',
    width: Dimensions.get('window').width / 1.1,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 35,
    marginTop: 20,
    marginBottom: 20,
  },
  btnText: {
    fontSize: 18,
    color: 'black',
    fontFamily: 'Poppins-Regular',
  },
});

export default MembershipFormScreen;
