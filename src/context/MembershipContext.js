import React, {createContext, useState, useContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {LoadingContext} from './LoadingContext';
import {AuthContext} from './AuthContext';

export const MembershipContext = createContext();

export const MembershipProvider = props => {
  const [isMember, setIsMember] = useState();

  const {authenticated} = useContext(AuthContext);
  const {handleLoadingState} = useContext(LoadingContext);

  const handleMembershipSubmission = async data => {
    const token = await AsyncStorage.getItem('@token');

    try {
      handleLoadingState(true);
      const request = await fetch(
        'https://immense-plateau-10266.herokuapp.com/membership/create',
        {
          method: 'POST',
          headers: {
            Authorization: 'Bearer ' + token,
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            membership_type: data.membershipType,
            membership_cost: data.membershipCost,
            user_id: data.userId,
            gym_id: data.gymId,
            payment_method: data.paymentMethod,
            payment_status: false,
            membership_duration: data.duration,
            started_at: data.startingDate,
            end_at: data.endingDate,
          }),
        },
      );

      if (request.ok == true) {
        handleLoadingState(false);
        return true;
      }
    } catch (e) {
      handleLoadingState(false);
      console.log(e, 'Server side authentication failed');
    }
  };

  const fetchMembershipListByPhoneNumber = async () => {
    if (authenticated) {
      const token = await AsyncStorage.getItem('@token');
      try {
        if (token) {
          const request = await fetch(
            `https://immense-plateau-10266.herokuapp.com/membership/+918001268005`,
            {
              headers: {
                Authorization: 'Bearer ' + token,
              },
            },
          );

          const membershipList = await request.json();
          return membershipList;
        }
        console.log(membershipList);
      } catch (e) {
        // handleLoadingState(false);
        alert('Something went wrong! Try Again');
      }
    } else {
      // handleLoadingState(false);
      console.log('You are not authorized');
    }
  };

  const contextProps = {
    handleMembershipSubmission,
    fetchMembershipListByPhoneNumber,
  };

  return (
    <MembershipContext.Provider value={contextProps}>
      {props.children}
    </MembershipContext.Provider>
  );
};
