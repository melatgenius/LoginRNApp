/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import appColors from './Utils/Colors';
import NewScreenNavigator from './Navigation/NewScreenNavigator';


export default function App() {
  return (
<NewScreenNavigator />
  );
}

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
