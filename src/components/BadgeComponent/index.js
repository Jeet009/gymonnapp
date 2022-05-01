import {View, Text} from 'react-native';
import React from 'react';

const BadgeComponent = ({text, color, width}) => {
  return (
    <View>
      <Text
        style={{
          backgroundColor: color,
          color: 'white',
          width: width,
          paddingLeft: '5%',
          paddingRight: '5%',
          paddingTop: '1%',
          paddingBottom: '1%',
          borderRadius: 3,
          alignSelf: 'flex-start',
          textAlign: 'center',
          fontSize: 10,
          fontFamily: 'Poppins-Bold',
        }}>
        {text}
      </Text>
    </View>
  );
};

export default BadgeComponent;
