import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {MembershipContext} from '../../context/MembershipContext';
import {useNavigation} from '@react-navigation/native';

const CurrentMembership = () => {
  const [membershipList, setMembershipList] = useState([]);
  const {fetchMembershipListByPhoneNumber} = useContext(MembershipContext);

  const navigation = useNavigation();

  // console.log(fetchMembershipListByPhoneNumber);
  useEffect(() => {
    fetchMembershipListByPhoneNumber().then(res => {
      setMembershipList(res);
    });
  }, []);

  // const handlePopup = data => {
  //   alert(data.membership_duration);
  // };

  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('MembershipDetails', item)}>
      <ImageBackground
        source={{
          uri: 'https://images-platform.99static.com/8QVhsq0xUI9KAGH6WZXUmnWohwI=/0x0:1574x1574/500x500/top/smart/99designs-contests-attachments/97/97489/attachment_97489210',
        }}
        resizeMode="cover"
        borderRadius={5}
        style={styles.avatar}>
        <View
          style={
            Date.parse(item.end_at) - Date.parse(new Date()) < 0
              ? styles.overlay
              : ''
          }>
          {Date.parse(item.end_at) - Date.parse(new Date()) < 0 ? (
            <Text style={styles.overlayText}>EXPIRED</Text>
          ) : (
            <Text>''</Text>
          )}
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <Text style={styles.whiteTextL}>Active Membership</Text>
      <View style={styles.iconContainer}>
        <FlatList
          data={membershipList.reverse()}
          renderItem={renderItem}
          keyExtractor={item => item._id}
          numColumns={2}
          // onScroll={handleScroll}
        />
      </View>
      {/* <SafeAreaView style={styles.listContainer}></SafeAreaView> */}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1d1d1d',
    flex: 1,
    padding: '3%',
  },
  whiteTextL: {
    color: 'white',
    fontSize: 20,
    // fontSize: Dimensions.get('window').width ,
    fontFamily: 'Poppins-Regular',
    marginTop: 25,
    marginBottom: 10,
  },
  avatar: {
    width: Dimensions.get('window').width / 2.16,
    height: Dimensions.get('window').height / 6,
    margin: 2,
    // marginLeft: 'auto',
  },
  iconContainer: {
    // paddingLeft: '5%',
    // paddingRight: '5%',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    marginTop: 10,
  },
  overlay: {
    backgroundColor: '#1d1d1d99',
    width: Dimensions.get('window').width / 2.16,
    height: Dimensions.get('window').height / 6,

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlayText: {
    backgroundColor: '#1d1d1d88',
    fontWeight: '600',
    letterSpacing: 1.3,
    width: '100%',
    textAlign: 'center',
    color: 'white',
  },
});
export default CurrentMembership;
