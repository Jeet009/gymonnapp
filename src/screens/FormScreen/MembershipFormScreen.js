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
import React, {useState, useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import DatePicker from 'react-native-date-picker';
import {AuthContext} from '../../context/AuthContext';
import SuccessComponent from '../../components/SuccessComponent';

const MembershipFormScreen = ({route}) => {
  const {data} = route.params;

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [pincode, setPincode] = useState();
  const [address, setAddress] = useState();
  const [startingDate, setStartingDate] = useState(new Date());
  const [endingDate, setEndingDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [openEnding, setOpenEnding] = useState(false);
  const [confirmMembership, setConfirmMembership] = useState(false);

  const navigation = useNavigation();

  const {user} = useContext(AuthContext);

  return (
    <>
      {confirmMembership && <SuccessComponent vendorName={data.name} />}
      <ScrollView style={styles.container}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View>
            <Text style={styles.whiteTextL}>MEMBERSHIP</Text>
          </View>
          <TouchableOpacity
            style={styles.avatar}
            onPress={() => navigation.navigate('Profile')}>
            <ImageBackground
              source={{
                uri: 'https://www.pngkey.com/png/detail/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png',
              }}
              resizeMode="cover"
              borderRadius={50}
              style={styles.avatar}></ImageBackground>
          </TouchableOpacity>
        </View>

        <View style={{marginTop: 30}}>
          <Text style={styles.whiteText}>Member Detaills</Text>
          <Text style={styles.whiteText}>{user.phoneNumber}</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Name"
            placeholderTextColor="#1d1d1d"
            onChangeText={text => setName(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter Email"
            placeholderTextColor="#1d1d1d"
            onChangeText={text => setEmail(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter Pincode"
            placeholderTextColor="#1d1d1d"
            onChangeText={text => setPincode(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter Address"
            placeholderTextColor="#1d1d1d"
            onChangeText={text => setAddress(text)}
          />
        </View>

        <View style={{marginTop: 30}}>
          <Text style={styles.whiteText}>Gym Detaills</Text>
          <Text style={styles.whiteTextL}>{data.name}</Text>
          <Text style={styles.whiteTextC}>{data.state}, INDIA</Text>

          <View style={styles.imgContainer}>
            <ImageBackground
              style={styles.imgHeight}
              source={{
                uri: data.detail_img_obj.imgTwo,
              }}
              resizeMode="cover"
              borderRadius={5}></ImageBackground>
            <ImageBackground
              style={styles.imgHeight}
              source={{
                uri: data.detail_img_obj.imgThree,
              }}
              resizeMode="cover"
              borderRadius={5}></ImageBackground>
          </View>
        </View>

        <View style={{marginTop: 30}}>
          <Text style={styles.whiteText}>Membership Detaills</Text>
          <Text style={styles.whiteTextC}>
            Starting Date : {startingDate.toDateString()}
          </Text>
          <Text style={styles.whiteTextC}>
            Ending Date : {endingDate.toDateString()}
          </Text>
          <TouchableOpacity
            style={styles.btnDark}
            onPress={() => setOpen(true)}>
            <Text style={styles.btnTextW}>Choose Starting Date</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnDark}
            onPress={() => setOpenEnding(true)}>
            <Text style={styles.btnTextW}>Choose Ending Date</Text>
          </TouchableOpacity>
          <DatePicker
            modal
            open={open}
            date={startingDate}
            onConfirm={date => {
              setOpen(false);
              setStartingDate(date);
            }}
            onCancel={() => {
              setOpen(false);
            }}
          />
          <DatePicker
            modal
            open={openEnding}
            date={endingDate}
            onConfirm={date => {
              setOpenEnding(false);
              setEndingDate(date);
            }}
            onCancel={() => {
              setOpen(false);
            }}
          />
        </View>

        <View style={{marginTop: 30}}>
          <Text style={styles.whiteText}>Membership Costing</Text>
          <Text style={styles.whiteText}>Rs. {data.membership_cost} /-</Text>
        </View>

        <TouchableOpacity
          style={styles.btn}
          onPress={() =>
            // console.log({
            //   name,
            //   email,
            //   pincode,
            //   address,
            // })
            setConfirmMembership(true)
          }>
          <Text style={styles.btnText}>Confirm Membership</Text>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    // minHeight: '100%',
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
    // width: Dimensions.get('window').width / 1.1,
    backgroundColor: 'white',
    color: 'black',
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
    // width: Dimensions.get('window').width / 1.1,
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
  btnDark: {
    backgroundColor: '#1a1a1a',
    // width: Dimensions.get('window').width / 1.1,
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

export default MembershipFormScreen;
