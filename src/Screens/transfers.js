import React from 'react'
import {View,Text,TextInput} from 'react-native'
import CardSaldo from '../Components/cardSaldoTopup'

class Transfer extends React.Component{
    render(){
        return(
            <View style={{flex:1,paddingHorizontal:15,paddingVertical:10}}>

                <View>
                    <Text>No Ponsel Antar GEMS</Text>
                    <TextInput
                    placeholder='08XX-XXXX-XXXX'
                     keyboardType='numeric'
                     style={{borderBottomWidth:1,borderBottomColor:'#f9f9f7',alignItems:'center',paddingVertical:10,borderRadius:5,marginVertical:10,paddingLeft:10}}>
                        <Text style={{fontSize:16,color:'#485460',textAlign:'center'}}></Text>
                    </TextInput>
                </View>

                <View>
                    <Text>Nominal Transfer</Text>
                    <TextInput
                     keyboardType='numeric'
                     style={{borderBottomWidth:1,borderBottomColor:'#f9f9f7',alignItems:'center',paddingVertical:10,borderRadius:5,marginVertical:10}}>
                        <Text style={{fontSize:16,color:'#485460',textAlign:'center'}}>Rp </Text>
                    </TextInput>
                </View>

               <CardSaldo />

            </View>
        )
    }
}

export default Transfer