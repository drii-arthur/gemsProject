import React from 'react'
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    ScrollView
    } from 'react-native'
import CardSaldo from '../Components/cardSaldoTopup'
import Header from '../Components/header'

class Transfer extends React.Component{
    render(){
        return(
            <ScrollView style={{flex:1}}>
                <Header title='Transfer' />
                <CardSaldo />
                <View style={s.wrapperInput}>
                    <Text style={s.label}>No Ponsel Antar GEMS</Text>
                    <TextInput
                    placeholder='08XX-XXXX-XXXX'
                     keyboardType='numeric'
                     style={{borderBottomWidth:1,borderBottomColor:'#f9f9f7',alignItems:'center',paddingVertical:10,borderRadius:5,marginVertical:5}}>
                        <Text style={{fontSize:16,color:'#485460',textAlign:'center'}}></Text>
                    </TextInput>
                </View>

                <View style={[s.wrapperInput,{marginTop:10}]}>
                    <Text style={s.label}>Nominal Transfer</Text>
                    <TextInput
                     keyboardType='numeric'
                     placeholder='Min Transfer 50000'
                     style={{borderBottomWidth:1,borderBottomColor:'#f9f9f7',alignItems:'center',paddingVertical:10,borderRadius:5,marginVertical:5}}>
                    </TextInput>
                </View>

                 <View style={[s.wrapperInput,{marginTop:10}]}>
                    <Text style={s.label}>Pesan</Text>
                    <TextInput
                     placeholder='Masukan Pesan Anda'
                     numberOfLines={5}
                     multiline={true}
                     underlineColorAndroid="transparent"
                     style={{borderWidth:1,height:100,borderColor:'#f9f9f7',borderRadius:5,marginVertical:5,paddingHorizontal:5}}
                    />
                </View>


            </ScrollView>
        )
    }
}

export default Transfer

const s = StyleSheet.create({
    wrapperInput:{
        marginTop:25,
        paddingHorizontal:15
    },
    label:{
        color:'#39afb5',
        fontWeight:'700'
    }
})