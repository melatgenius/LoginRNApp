import React, {useState} from 'react';
import {Platform,View, Text, TextInput, Button, StyleSheet,Image} from 'react-native';
import appColors from '../Utils/Colors'
import AppButton from '../Components/AppButton';
import AppInput from '../Components/AppInput';




 const CredentialInput=({navigation})=> {

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
      <View style={styles.imagealign}>
      <Image style={styles.logo} source={{uri: 'https://www.geniusplaza.com/static/bundles/media/gp-splash-img.567ce041.png'}}/>
      <Text style={styles.text}>
        {'Welcome, Please enter your credentials'}
      </Text>
      </View>
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
        navigation.navigate('Confirmation')
          console.log({userPassword, username})
      }}/>
    </View>
  );
};
const styles = StyleSheet.create({
  logo:{
    width:130,
    height:40,
    paddingTop:30,
    marginBottom:20
  },
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
    marginTop:200,
  },
  imagealign:{
    justifyContent: 'center',
    alignItems: 'center',

  }
});

export default CredentialInput;
