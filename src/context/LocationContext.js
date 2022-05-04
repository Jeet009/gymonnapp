import React, {createContext, useState, useEffect} from 'react';
import {PermissionsAndroid} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import Geocoder from 'react-native-geocoding';

export const LocationContext = createContext();

export const LocationProvider = props => {
  const [longitude, setLongitude] = useState();
  const [latitude, setLatitude] = useState();
  const [location, setLocation] = useState();

  //   useEffect(() => {
  //     handleLocationDetails();
  //   }, []);

  const handleLocationDetails = async () => {
    await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );

    if ('granted' === PermissionsAndroid.RESULTS.GRANTED) {
      Geocoder.init('AIzaSyDp6i8ONAaaA3_16IBaYh08hK1E0O8ygf4');
      Geolocation.getCurrentPosition(
        position => {
          console.log(position.coords.latitude);
          Geocoder.from({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          })
            .then(json => {
              var addressComponent = json.results[0].address_components[0];
              console.log(addressComponent);
              setLocation(addressComponent);
              return addressComponent;
            })
            .catch(error => console.warn(error));
        },
        error => {
          alert('Please Manually Turn On Your Location ');
          console.log(error);
        },
        {enablehighaccuracy: true, timeout: 20000, maximumAge: 1000},
      );
    }
  };

  const contextProps = {
    location,
    handleLocationDetails,
  };

  return (
    <LocationContext.Provider value={contextProps}>
      {props.children}
    </LocationContext.Provider>
  );
};
