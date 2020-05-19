import React, {useState} from 'react';
import {Platform,View, Text, TextInput, Button, StyleSheet} from 'react-native';
import appColors from '../Utils/Colors'
import AppButton from '../Components/AppButton';
import AppInput from '../Components/AppInput';




 const  CredentialInput =props => {
   console.log(props);
  const [userPassword, setUserPassword] = useState([]);
  const [username, setUsername] = useState('');


 onCredentialsEntered = params => {
    setUserCredentials(enteredCredential => [
      ...enteredCredential,
      {
        id: Math.random.toString,
        value: params,
      },
    ]);
  };

  return (
    <View style={styles.engine}>
      <Text style={styles.text}>
        {'Welcome, Please enter your credentials'}
      </Text>
      <View style={styles.textInputContainer}>
        <AppInput
          updateState={setUsername}
          placeholder={'Username'}
          ref={textInput => (this.usernameInput = textInput)}
        />
      </View>
      <View style={styles.textInputContainer}>
        <AppInput
          updateState={setUserPassword}
          placeholder={'Password'}
          ref={textInput => (this.passwordInput = textInput)}
        />
      </View>
      <AppButton buttonTitle={'Login'} onPress={()=>{
        props.navigation.navigate('Login')
          console.log({userPassword, username})
      }}/>
    </View>
  );
};
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: appColors.peach,
  },
  text: {
    marginBottom: 40,
    textAlign: 'center',
    fontSize: 16,
  },
  textInputContainer: {
    backgroundColor: 'white',
    borderColor: appColors.peach,
    borderWidth: 2,
    marginStart: 16,
    marginEnd: 16,
    marginBottom: 8,
    padding: 16,
    borderRadius: 6,
  },
  engine: {
    marginTop: 300,
  },
});

export default  CredentialInput;
