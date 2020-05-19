import React, {} from 'react'
import {Platform,View, Text,Image,StyleSheet} from 'react-native'

const ConfirmationScreen =()=>{
    return (
        <View>
            <Text style={style.textStyle}>You are logged in!</Text>
        </View>


    )
}

const style = StyleSheet.create({
    textStyle: {
    marginTop: 40,
    alignSelf: 'center',
    fontSize: 16,
    }
})
export default ConfirmationScreen;