import {
  ScrollView,
  Text,
  StyleSheet,
  View,
  ImageBackground,
} from 'react-native';
import React, {useContext} from 'react';
import BannerComponent from '../../components/BannerComponent';
import IconComponent from '../../components/IconComponent';
import WithBackgroundImageComponent from '../../components/ProductComponent/WithBackgroundImageComponent';
import {ScrollContext} from '../../context/ScrollContext';
import {LocationContext} from '../../context/LocationContext';

const HomeScreen = () => {
  const {handleScrollingState} = useContext(ScrollContext);
  const {location} = useContext(LocationContext);

  const handleScroll = event => {
    if (event.nativeEvent.contentOffset.y <= 25) {
      handleScrollingState(false);
    } else if (event.nativeEvent.contentOffset.y >= 25) {
      handleScrollingState(true);
    }
  };

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}} onScroll={handleScroll}>
      <View style={styles.topBg}>
        <ImageBackground
          source={{
            uri: 'https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          }}
          resizeMode="cover"
          blurRadius={3}
          style={styles.img}>
          <View style={styles.topTextContainer}>
            {/* <View style={{flexDirection: 'row'}}>
              <Icon name="map-marker" size={45} color="#ffae7a" />
              <View style={{marginLeft: '3%'}}>
                <Text style={styles.whiteTextL}>Kolkata</Text>
                <Text style={styles.whiteText}>WB, INDIA</Text>
              </View>
              <TouchableOpacity
                style={styles.avatar}
                onPress={handleNavigation}>
                <ImageBackground
                  source={{
                    uri: 'https://www.pngkey.com/png/detail/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png',
                  }}
                  resizeMode="cover"
                  borderRadius={50}
                  style={styles.avatar}></ImageBackground>
              </TouchableOpacity>
            </View> */}
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
      <View style={styles.homePadding}>
        <BannerComponent
          imgUri="https://images.pexels.com/photos/3094230/pexels-photo-3094230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          title="Get Subscription Now"
          desc="In publishing and graphic design, Lorem ipsum is a placeholder."
          btnText="Join Now"
        />
      </View>
      <View style={styles.iconContainer}>
        <IconComponent
          route="ProductList"
          title="Gym"
          iconName="heartbeat"
          dbParam="gym"
        />
        <IconComponent
          route="ProductList"
          title="Yoga"
          iconName="american-sign-language-interpreting"
          dbParam="yoga"
        />
        <IconComponent
          route="ProductList"
          title="Zumba"
          iconName="universal-access"
          dbParam="zumba"
        />
        <IconComponent
          route="ProductList"
          title="Swim"
          iconName="tint"
          dbParam="swim"
        />
      </View>
      <View style={styles.banner}>
        <BannerComponent
          imgUri="https://images.pexels.com/photos/2729899/pexels-photo-2729899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          title="TIRED OF RUNNING ?"
          desc="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate."
          btnText="Read More"
        />
      </View>
      <View style={styles.homePadding}>
        <Text style={styles.whiteTextL}>Near By Gym</Text>
        <View style={styles.listContainer}>
          <WithBackgroundImageComponent route="ProductDetails" />
          <WithBackgroundImageComponent route="ProductDetails" />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  topBg: {
    height: 310,
  },
  homePadding: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    padding: '5%',
  },
  img: {
    height: '100%',
  },
  topTextContainer: {
    padding: '5%',
  },
  whiteText: {
    color: 'white',
    fontFamily: 'Poppins-Regular',
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
    fontFamily: 'Poppins-Regular',
  },
  whiteTextSayer: {
    color: 'white',
    textTransform: 'uppercase',
    marginLeft: 'auto',
    marginTop: 30,
  },
  iconContainer: {
    backgroundColor: '#1a1a1a',
    padding: '5%',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  banner: {
    flex: 1,
  },
  listContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 15,
  },
});
export default HomeScreen;
