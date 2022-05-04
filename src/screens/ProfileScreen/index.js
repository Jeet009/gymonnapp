import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React, {useContext} from 'react';
import BadgeComponent from '../../components/BadgeComponent';
import IconComponent from '../../components/IconComponent';
import {AuthContext} from '../../context/AuthContext';

const ProfileScreen = () => {
  const {handleLogout} = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.topImg}
        source={{
          uri: 'https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        }}
        resizeMode="cover"
        blurRadius={2}>
        <View style={styles.overlay}>
          <View>
            <BadgeComponent text="GYMONN" color="#441b00" />
            <Text style={styles.whiteTextL}>Get Subscription Now</Text>
            <Text style={styles.whiteTextC}>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate.
            </Text>
          </View>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => console.log('Open Subscription Page')}>
            <Text style={{fontFamily: 'Poppins-Medium', color: 'black'}}>
              Join Now
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>

      <View style={{flexDirection: 'row', padding: '8%'}}>
        <ImageBackground
          source={{
            uri: 'https://www.pngkey.com/png/detail/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png',
          }}
          resizeMode="cover"
          borderRadius={50}
          style={styles.avatar}></ImageBackground>
        <View style={{marginLeft: 'auto'}}>
          <Text style={styles.whiteTextL}>Jeet Mukherjee</Text>
          <Text style={styles.whiteText}>+91 8001268005</Text>
        </View>
      </View>

      <View style={styles.iconContainer}>
        <IconComponent title="Edit Info" iconName="edit" />
        <IconComponent title="Wallet" iconName="credit-card" />
        <IconComponent title="AttendC." iconName="calendar" />
        <IconComponent title="History" iconName="history" />
      </View>
      <View style={styles.iconContainer}>
        <IconComponent title="MemberS." iconName="bolt" />
        <IconComponent title="Contact" iconName="whatsapp" />
        <IconComponent title="Feedback" iconName="star" />
        <IconComponent title="Logout" iconName="sign-out" func={handleLogout} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: '100%',
    backgroundColor: '#1a1a1a',
  },
  topImg: {
    minHeight: 250,
  },
  overlay: {
    minHeight: 250,
    backgroundColor: '#1a1a1ab3',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '8%',
  },
  whiteTextL: {
    color: 'white',
    fontSize: 25,
    fontFamily: 'Poppins-Regular',
    marginTop: 15,
  },
  whiteText: {
    color: 'white',
    fontFamily: 'Poppins-Regular',
  },
  whiteTextC: {
    color: 'white',
    textTransform: 'uppercase',
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
  },
  btn: {
    backgroundColor: '#ffae7a',
    // alignSelf: 'flex-start',
    marginTop: 20,
    borderRadius: 25,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 2,
    paddingBottom: 2,
  },
  avatar: {
    height: 100,
    width: 100,
    // marginLeft: 'auto',
  },
  iconContainer: {
    paddingLeft: '5%',
    paddingRight: '5%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 10,
  },
});

export default ProfileScreen;
