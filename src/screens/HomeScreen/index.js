import {
  ScrollView,
  Text,
  StyleSheet,
  View,
  ImageBackground,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreen = () => {
  return (
    <View style={styles.homeRoot}>
      <View style={styles.topBg}>
        <ImageBackground
          source={{
            uri: 'https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          }}
          resizeMode="cover"
          blurRadius={3}
          style={styles.img}>
          <View style={styles.topTextContainer}>
            <View style={{flexDirection: 'row'}}>
              <Icon name="map-marker" size={45} color="#ffae7a" />
              <View style={{marginLeft: '3%'}}>
                <Text style={styles.whiteTextL}>Kolkata</Text>
                <Text style={styles.whiteText}>WB, INDIA</Text>
              </View>
              <ImageBackground
                source={{
                  uri: 'https://www.pngkey.com/png/detail/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png',
                }}
                resizeMode="cover"
                borderRadius={50}
                style={styles.avatar}></ImageBackground>
            </View>
            <View style={styles.quoteContainer}>
              <Text style={styles.whiteTextC}>
                Motivation is what gets you started. Habit is what keeps you
                going.
              </Text>
              <Text style={styles.whiteTextSayer}>- JIM RYUN</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
      <ScrollView style={styles.home}>
        <Text>HomeScreen</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  homeRoot: {
    height: '100%',
  },
  topBg: {
    height: '40%',
  },
  home: {
    height: '60%',
    backgroundColor: '#1a1a1a',
  },
  img: {
    height: '100%',
  },
  topTextContainer: {
    padding: '5%',
  },
  whiteText: {
    color: 'white',
  },
  whiteTextL: {
    color: 'white',
    fontSize: 20,
  },
  avatar: {
    height: 50,
    width: 50,
    marginLeft: 'auto',
  },
  quoteContainer: {
    padding: '10%',
    marginTop: 10,
  },
  whiteTextC: {
    color: 'white',
    textTransform: 'uppercase',
  },
  whiteTextSayer: {
    color: 'white',
    textTransform: 'uppercase',
    marginLeft: 'auto',
    marginTop: 30,
  },
});
export default HomeScreen;
