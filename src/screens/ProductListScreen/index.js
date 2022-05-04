import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import React from 'react';
import WithSideImageComponent from '../../components/ProductComponent/WithSideImageComponent';

const ProductListScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topPosition}>
        <View>
          <Text style={styles.whiteTextL}>Gyms</Text>
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
      <View style={styles.listContainer}>
        <WithSideImageComponent
          title="Logic Gym & Workout"
          location="WB, INDIA"
          route="ProductDetails"
        />
        <WithSideImageComponent
          title="ABC Gym & Workout"
          location="WB, INDIA"
          route="ProductDetails"
        />
        <WithSideImageComponent
          title="Fitness Workout House & Co"
          location="WB, INDIA"
          route="ProductDetails"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1a1a1a',
    padding: '5%',
    minHeight: '100%',
  },
  topPosition: {
    flexDirection: 'row',
  },
  whiteText: {
    color: 'white',
    fontFamily: 'Poppins-Bold',
  },
  whiteTextL: {
    color: 'white',
    fontSize: 30,
    fontFamily: 'Poppins-Regular',
  },
  avatar: {
    height: 80,
    width: 80,
    marginLeft: 'auto',
  },
  listContainer: {
    marginTop: 30,
  },
});
export default ProductListScreen;
