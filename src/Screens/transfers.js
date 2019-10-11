import React from 'react'
import {View,Text,TextInput} from 'react-native'

class Transfer extends React.Component{
    render(){
        return(
            <View style={{flex:1,paddingHorizontal:15,paddingVertical:10}}>

                <View>
                    <Text>No Ponsel Antar GEMS</Text>
                    <TextInput
                    placeholder='08XX-XXXX-XXXX'
                     keyboardType='numeric'
                     style={{borderBottomWidth:1,borderBottomColor:'#000',alignItems:'center',paddingVertical:10,borderRadius:5,marginVertical:10,paddingLeft:10}}>
                        <Text style={{fontSize:16,color:'#000',textAlign:'center'}}></Text>
                    </TextInput>
                </View>

                <View>
                    <Text>Nominal Transfer</Text>
                    <TextInput
                     keyboardType='numeric'
                     style={{borderBottomWidth:1,borderBottomColor:'#000',alignItems:'center',paddingVertical:10,borderRadius:5,marginVertical:10}}>
                        <Text style={{fontSize:16,color:'#000',textAlign:'center'}}>Rp </Text>
                    </TextInput>
                </View>

                <View style={{borderWidth:'#7f8fa6',borderWidth:1,padding:10,borderRadius:10,marginVertical:10,alignItems:'center'}}>
                    <Text>Saldo GEMS CASH</Text>
                    <View style={{paddingVertical:10,borderRadius:5,}}>
                        <Text style={{fontSize:16,color:'#000'}}>Rp</Text>
                    </View>
                </View>

            </View>
        )
    }
}

export default Transfer