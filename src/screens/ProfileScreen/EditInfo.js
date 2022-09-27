import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import LoadingComponent from '../../components/LoadingComponent.js';
import {LoadingContext} from '../../context/LoadingContext';
import {ProfileContext} from '../../context/ProfileContext';

function EditInfo() {
  const [name, setName] = useState();
  const {updateUserDetails} = useContext(ProfileContext);
  const {isLoading} = useContext(LoadingContext);

  const handleUpadte = () => {
    updateUserDetails(name);
  };

  return isLoading ? (
    <LoadingComponent />
  ) : (
    <View style={styles.container}>
      <Text style={styles.whiteText}>Edit your personal details</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Name"
        placeholderTextColor="#1d1d1d"
        onChangeText={text => setName(text)}
      />
      <TouchableOpacity style={styles.btn} onPress={handleUpadte}>
        <Text style={styles.btnText}>Update</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: '100%',
    backgroundColor: '#1a1a1a',
    padding: '5%',
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
  input: {
    height: 40,
    padding: 10,
    paddingLeft: 20,
    // width: Dimensions.get('window').width / 1.1,
    // fontFamily: 'Poppins-Regular',
    backgroundColor: 'white',
    color: 'black',
    borderRadius: 25,
    fontSize: 15,
    borderLeftColor: '#1a1a1a',
    borderWidth: 0.4,
    borderRightWidth: 0.5,
    borderBottomWidth: 0.5,
    marginTop: 10,
  },
  btn: {
    backgroundColor: '#ffae7a',
    // width: Dimensions.get('window').width / 1.1,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 35,
    marginTop: 20,
    marginBottom: 20,
  },
  btnText: {
    fontSize: 18,
    color: 'black',
    fontFamily: 'Poppins-Regular',
  },
});

export default EditInfo;
