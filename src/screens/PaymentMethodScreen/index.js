import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React, {useContext, useState} from 'react';
import {MembershipContext} from '../../context/MembershipContext';
import LoadingComponent from '../../components/LoadingComponent.js';
import {LoadingContext} from '../../context/LoadingContext';
import SuccessComponent from '../../components/SuccessComponent';
import RazorpayCheckout from 'react-native-razorpay';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PaymentMethodScreen = ({route}) => {
  const {productDetails, userDetails, membershipDetails} = route.params;
  const [membership, setMembership] = useState(false);

  const {handleMembershipSubmission} = useContext(MembershipContext);
  const {isLoading} = useContext(LoadingContext);

  const paymentInitialization = async () => {
    const token = await AsyncStorage.getItem('@token');
    const request = await fetch(
      'https://immense-plateau-10266.herokuapp.com/membership/order',
      {
        method: 'POST',
        headers: {
          Authorization: 'Bearer ' + token,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: productDetails.membership_cost,
          user_id: userDetails.phoneNumber,
          product_id: productDetails._id,
          ending_date: membershipDetails.endingDate,
        }),
      },
    );

    var options = {
      description: 'Gymonn',
      image:
        'https://as2.ftcdn.net/v2/jpg/03/31/69/91/1000_F_331699188_lRpvqxO5QRtwOM05gR50ImaaJgBx68vi.jpg',
      currency: 'INR',
      key: 'rzp_test_s1ACpBTnEGvw9r',
      amount: parseInt(productDetails.membership_cost) * 100,
      name: userDetails.name.toUpperCase(),
      order_id: request.order_id, //Replace this with an order_id created using Orders API.
      prefill: {
        email: 'gymonnapp@gmail.com',
        contact: userDetails.phoneNumber,
        name: userDetails.name,
      },
      theme: {color: '#575757'},
    };
    RazorpayCheckout.open(options)
      .then(data => {
        // handle success
        // console.log(data);
        handleMembershipSubmission({
          membershipType: true,
          membershipCost: productDetails.membership_cost,
          userId: userDetails.phoneNumber,
          gymId: productDetails._id,
          paymentMethod: 'Online & ID : ' + data.razorpay_payment_id,
          startingDate: membershipDetails.startingDate,
          endingDate: membershipDetails.endingDate,
          duration: membershipDetails.duration,
          // razorpay_payment_id: data.razorpay_payment_id,
          // razorpay_order_id: data.razorpay_order_id,
          // razorpay_signature: data.razorpay_signature,
        }).then(res => {
          res && setMembership(true);
        });
      })
      .catch(error => {
        // handle failure
        alert(`Error: ${error.code} | ${error.description}`);
        console.log(error);
      });
  };

  return isLoading ? (
    <LoadingComponent title="Making You A Mmember ..." />
  ) : (
    <>
      {membership && <SuccessComponent vendorName={productDetails.name} />}
      <View style={styles.container}>
        <StatusBar backgroundColor="#1d1d1d" barStyle="light-content" />

        <TouchableOpacity style={styles.view} onPress={paymentInitialization}>
          <Text style={styles.whiteTextC}>UPI / Credit Card / Debit Card</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1d1d1d',
  },
  view: {
    backgroundColor: '#ffeee3',
    paddingHorizontal: '10%',
    paddingVertical: '5%',
    borderRadius: 5,
  },
  whiteTextC: {
    color: '#1d1d1d',
    fontFamily: 'Poppins-Light',
  },
});

export default PaymentMethodScreen;
