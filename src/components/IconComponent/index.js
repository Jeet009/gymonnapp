import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

const IconComponent = ({title, iconName, route, func}) => {
  const navigation = useNavigation();
  const handleNavigation = () => {
    navigation.navigate(route);
  };
  return (
    <View>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={route ? handleNavigation : func}>
        <Icon name={iconName} size={35} color="#ffae7a" />
      </TouchableOpacity>
      {title && (
        <Text
          style={{
            color: 'white',
            fontFamily: 'Poppins-Regular',
            fontSize: title.length > 9 ? 12 : 15,
            textAlign: 'center',
            marginTop: 3,
            letterSpacing: 1,
          }}>
          {title}
        </Text>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  iconContainer: {
    backgroundColor: '#575757',
    height: 100,
    width: 80,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default IconComponent;
