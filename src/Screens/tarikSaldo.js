import React from 'react'
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ScrollView
    } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import HeaderTransaction from '../Components/headerTransaction'
import Button from '../Components/button';

class TarikSaldo extends React.Component{
    render(){
        return(
            <View style={{flex:1}}>
                <HeaderTransaction title='Withdraw' />
                <ScrollView style={{flex:1}}>
                <View style={s.wrapperInput} >
                    <Text style={s.label}>Nominal Withdraw</Text>
                    <TextInput
                        placeholder='Masukan Nominal...'
                        keyboardType='numeric'
                        style={s.input}>
                    </TextInput>
                </View>
                

                <View style={{marginTop:20}}>
                    <View style={{backgroundColor:'#f9f9f7',paddingVertical:5,paddingHorizontal:20}}>                
                        <Text style={s.label}>Select Bank Account</Text>
                    </View>                    
                    <View style={{alignItems:'center',marginTop:10,}}>
                        <TouchableOpacity>
                            <Text style={{color:'#39afb5',marginBottom:20,fontWeight:'bold',letterSpacing:1}}>Tambah Bank</Text>
                        </TouchableOpacity>
                        
                    </View>
                </View>
                </ScrollView>
                
                <Button title='WITHDRAW' />

            </View>
        )
    }
}

export default TarikSaldo

const s = StyleSheet.create({
    wrapperInput:{
        paddingHorizontal:20
    },
    input:{
        borderBottomWidth:1,
        borderBottomColor:'#f9f9f7',
        alignItems:'center',
        paddingVertical:10,
        borderRadius:5,
    },
    label:{
        color:'#39afb5',
        fontWeight:'700'
    },
})