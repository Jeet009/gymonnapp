import React, {createContext, useState, useEffect, useContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthContext} from './AuthContext';
import {LoadingContext} from './LoadingContext';

export const ServiceContext = createContext();

export const ServiceProvider = props => {
  const {authenticated} = useContext(AuthContext);
  const {handleLoadingState} = useContext(LoadingContext);

  const fetchAllServicesByCoords = async dbParam => {
    handleLoadingState(true);
    if (authenticated) {
      const token = await AsyncStorage.getItem('@token');
      try {
        if (token) {
          const request = await fetch(
            `https://immense-plateau-10266.herokuapp.com/${dbParam}/auth/list`,
            {
              headers: {
                Authorization: 'Bearer ' + token,
              },
            },
          );

          const gyms = await request.json();
          return gyms;
        }
        // console.log('gyms', gyms);
      } catch (e) {
        handleLoadingState(false);
        alert('Something went wrong! Try Again');
      }
    } else {
      handleLoadingState(false);
      console.log('You are not authorized');
    }
  };

  const contextProps = {
    fetchAllServicesByCoords,
  };

  return (
    <ServiceContext.Provider value={contextProps}>
      {props.children}
    </ServiceContext.Provider>
  );
};
