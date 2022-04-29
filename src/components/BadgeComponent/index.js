import {View, Text} from 'react-native';
import React from 'react';

const BadgeComponent = () => {
  return (
    <View>
      <Text
        style={{
          backgroundColor: '#441b00',
          color: 'white',
          // width: '28%',
          padding: '2%',
          borderRadius: 5,
          alignSelf: 'flex-start',
          fontSize: 10,
          fontFamily: 'Poppins-Bold',
        }}>
        GYMONN
      </Text>
    </View>
  );
};

export default BadgeComponent;
