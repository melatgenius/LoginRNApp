import React, {} from 'react'
import {Platform,View, Text,Image,StyleSheet} from 'react-native'

const ConfirmationScreen =()=>{
    return (
        <View>
            <Text>'You are logged in !'</Text>
        </View>


    )
}

const style = StyleSheet.create({
    textStyle: {
    marginBottom: 40,
    textAlign: 'center',
    fontSize: 16,
    }
})
export default ConfirmationScreen;