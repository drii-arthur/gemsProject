import React from 'react'
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    ScrollView
    } from 'react-native'


import CardSaldo from '../Components/cardSaldoTopup'
import HeaderTransaction from '../Components/headerTransaction'
import Button from '../Components/button'

const Input = (props) => {
    return(
        <View style={s.wrapperInput}>
                    <Text style={s.label}>{props.label}</Text>
                    <TextInput
                    placeholder={props.placeholder}
                    keyboardType='numeric'
                    style={s.input}>
                    </TextInput>
                </View>
    )
}

class Transfer extends React.Component{
    render(){
        return(
            <View style={{flex:1}}>
                <HeaderTransaction title='Transfer'/>
                <ScrollView style={{flex:1}}>
                
                <Input 
                    placeholder='08XX-XXXX-XXXX'
                    label='No Ponsel Antar GEMS' 
                />
                <Input 
                    placeholder='Min Transfer 50000'
                    label='Nominal Transfer'
                />

                <View style={[s.wrapperInput,{marginTop:10}]}>
                    <Text style={s.label}>Pesan</Text>
                    <TextInput
                        placeholder='Masukan Pesan Anda'
                        multiline={true}
                        underlineColorAndroid="transparent"
                        style={{height:100,backgroundColor:'#f9f9f7',borderRadius:5,marginVertical:5,paddingHorizontal:5,textAlignVertical: 'top'}}
                    />
                </View>

                </ScrollView>

                <Button title='TRANSFER'/>

            </View>
        )
    }
}

export default Transfer

const s = StyleSheet.create({
    wrapperInput:{
        marginBottom:10,
        paddingHorizontal:15
    },
    label:{
        color:'#39afb5',
        fontWeight:'700'
    },
    input:{
        borderBottomWidth:1,
        borderBottomColor:'#f9f9f7',
        alignItems:'center',
        paddingVertical:10,
        borderRadius:5,
        marginVertical:5
    }
})