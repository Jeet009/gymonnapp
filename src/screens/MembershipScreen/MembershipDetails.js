import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function MembershipDetails({route}) {
  return (
    <View style={styles.container}>
      {Date.parse(route.params.end_at) - Date.parse(new Date()) < 0 ? (
        <Text style={styles.whiteText}>This membership is no longer valid</Text>
      ) : (
        <Text style={styles.whiteText}>Currently you are a gymonn member</Text>
      )}
      <Text style={styles.whiteText}>Gym ID : {route.params.gym_id}</Text>
      <Text style={styles.whiteTextL}>
        Membership duration : {route.params.membership_duration} Days
      </Text>
      <Text style={styles.whiteTextL}>
        Membership status :{' '}
        {Date.parse(route.params.end_at) - Date.parse(new Date()) < 0 ? (
          <Text style={styles.whiteTextL}>Not Active</Text>
        ) : (
          <Text style={styles.whiteTextL}>Active</Text>
        )}
      </Text>
      <Text style={styles.whiteTextL}>
        Total cost : {route.params.membership_cost} /-
      </Text>
      <Text style={styles.whiteText}>
        Your membership ends at : {route.params.end_at.split('T')[0]}
      </Text>
    </View>
  );
}

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
    marginBottom: 5,
  },
  whiteText: {
    color: 'white',
    fontSize: 15,
    // fontSize: Dimensions.get('window').width ,
    fontFamily: 'Poppins-Regular',
    marginTop: 25,
    marginBottom: 20,
    textTransform: 'uppercase',
  },
});
export default MembershipDetails;
