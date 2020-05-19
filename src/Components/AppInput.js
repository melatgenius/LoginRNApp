import React, {useState} from 'react';
import {View,TextInput, Button, StyleSheet} from 'react-native'
import appColors from '../Utils/Colors';

const AppInput = ({updateState,placeholder, ref}) => {

    usernameInputHandler = enteredUsername => {
        updateState(enteredUsername);
    };


    return ( <TextInput
    onChangeText = {usernameInputHandler}
    placeholder ={placeholder}
    ref={ref}>
    </TextInput>);
}

const styles = StyleSheet.create({
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
})
export default AppInput;