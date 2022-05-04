import React, {createContext, useState, useContext} from 'react';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {LoadingContext} from './LoadingContext';

export const AuthContext = createContext();

export const AuthProvider = props => {
  const [user, setUser] = useState(false);
  const [phNo, setPhNo] = useState();
  const [authenticated, setAutheticated] = useState(false);
  const [confirm, setConfirm] = useState(null);

  const {handleLoadingState} = useContext(LoadingContext);

  auth().onAuthStateChanged(async u => {
    const token = await AsyncStorage.getItem('@token');
    if (u) {
      const request = await fetch(
        'https://immense-plateau-10266.herokuapp.com/',
        {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        },
      );

      const serverStatus = await request.json();
      setAutheticated(serverStatus);
      setUser(u);
      handleLoadingState(false);
    } else {
      setAutheticated(false);
      handleLoadingState(false);
    }
  });

  const addCustomerData = async () => {
    const token = await AsyncStorage.getItem('@token');

    try {
      const request = await fetch(
        'https://immense-plateau-10266.herokuapp.com/customer/add',
        {
          method: 'POST',
          headers: {
            Authorization: 'Bearer ' + token,
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            phoneNumber: phNo,
            name: 'Gymonn User',
          }),
        },
      );

      const serverStatus = await request.json();
      return serverStatus;
    } catch (error) {
      console.log(error);
    }
  };

  const handleAuth = async phoneNumber => {
    setPhNo(phoneNumber);
    try {
      const confirmation = await auth().signInWithPhoneNumber(
        `+91${phoneNumber}`,
      );

      setConfirm(confirmation);
    } catch (error) {
      alert(error);
    }
  };

  const handleOtp = async otp => {
    try {
      await confirm.confirm(otp);
      const token = await auth().currentUser.getIdToken(true);
      handleLoadingState(true);
      if (token) {
        const storingToken = await AsyncStorage.setItem('@token', token);
        addCustomerData().then(res => {
          if (!res) {
            setAutheticated(false);
          }
        });
      } else {
        alert('Token validation failed');
      }

      setConfirm(null);
    } catch (error) {
      alert('Invalid code');
    }
  };

  const handleLogout = () => {
    auth().signOut();
  };

  const contextProps = {
    confirm,
    authenticated,
    user,
    handleAuth,
    handleOtp,
    handleLogout,
  };

  return (
    <AuthContext.Provider value={contextProps}>
      {props.children}
    </AuthContext.Provider>
  );
};
