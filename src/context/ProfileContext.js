import React, {createContext, useState, useContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {LoadingContext} from './LoadingContext';
import {AuthContext} from './AuthContext';

export const ProfileContext = createContext();

export const ProfileProvider = props => {
  const {user} = useContext(AuthContext);
  const {handleLoadingState} = useContext(LoadingContext);

  const updateUserDetails = async name => {
    const token = await AsyncStorage.getItem('@token');
    try {
      handleLoadingState(true);
      const request = await fetch(
        'https://immense-plateau-10266.herokuapp.com/customer/update',
        {
          method: 'POST',
          headers: {
            Authorization: 'Bearer ' + token,
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: name,
            phoneNumber: user.phoneNumber.substring(3),
          }),
        },
      );

      if (request.ok == true) {
        const storingName = await AsyncStorage.setItem('@username', name);
        handleLoadingState(false);
        return true;
      }
    } catch (e) {
      handleLoadingState(false);
      console.log(e, 'Server side authentication failed');
    }
  };

  const contextProps = {
    updateUserDetails,
  };

  return (
    <ProfileContext.Provider value={contextProps}>
      {props.children}
    </ProfileContext.Provider>
  );
};
