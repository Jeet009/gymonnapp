import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Attendence() {
  const [count, setCount] = useState();
  //   const increaseCount = async () => {
  //     const attended_count = await AsyncStorage.getItem('@attended_count');
  //     setCount(parseInt(count) + parseInt(attended_count));
  //   };
  //   useEffect(async () => {
  //     const attended_count = await AsyncStorage.getItem('@attended_count');
  //     if (attended_count == null) {
  //       const storingCount = await AsyncStorage.setItem('@attended_count', '0');
  //       const attended_count = await AsyncStorage.getItem('@attended_count');
  //       setCount(attended_count);
  //     } else {
  //       const attended_count = await AsyncStorage.getItem('@attended_count');
  //       setCount(attended_count);
  //     }
  //   }, [setCount]);
  return (
    <View style={styles.container}>
      <Text style={styles.whiteText}>You have attended</Text>
      <TouchableOpacity>
        <Text style={styles.whiteTextL}>0</Text>
      </TouchableOpacity>
      <Text style={styles.whiteText}>seission till yet</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: '100%',
    backgroundColor: '#1a1a1a',
    padding: '5%',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  whiteTextL: {
    color: 'white',
    fontSize: 80,
    // fontSize: Dimensions.get('window').width ,
    fontFamily: 'Poppins-Regular',
    marginBottom: 5,
  },
  whiteText: {
    color: 'white',
    fontSize: 15,
    // fontSize: Dimensions.get('window').width ,
    fontFamily: 'Poppins-Regular',
    marginBottom: 20,
    textTransform: 'uppercase',
  },
});

export default Attendence;
