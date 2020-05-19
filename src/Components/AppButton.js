import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import appColors from '../Utils/Colors';





const AppButton = ({buttonTitle, onPress}) => {
  return <TouchableOpacity
            onPress={onPress}>
                <Text style={styles.textColor}>{buttonTitle}</Text>
  </TouchableOpacity>;
}

const styles = StyleSheet.create({
    textColor: {
      color: 'black',
      alignSelf:"center"
      },

})


export default AppButton;