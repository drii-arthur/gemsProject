import React from 'react'
import {View,Text,TextInput} from 'react-native'
import CardSaldo from '../Components/cardSaldoTopup'

class Transfer extends React.Component{
    render(){
        return(
            <View style={{flex:1,paddingHorizontal:15,paddingVertical:10}}>

                <View style={{marginTop:20}}>
                    <Text>No Ponsel Antar GEMS</Text>
                    <TextInput
                    placeholder='08XX-XXXX-XXXX'
                     keyboardType='numeric'
                     style={{borderBottomWidth:1,borderBottomColor:'#f9f9f7',alignItems:'center',paddingVertical:10,borderRadius:5,marginVertical:5}}>
                        <Text style={{fontSize:16,color:'#485460',textAlign:'center'}}></Text>
                    </TextInput>
                </View>

                <View>
                    <Text>Nominal Transfer</Text>
                    <TextInput
                     keyboardType='numeric'
                     placeholder='Min Transfer 50000'
                     style={{borderBottomWidth:1,borderBottomColor:'#f9f9f7',alignItems:'center',paddingVertical:10,borderRadius:5,marginVertical:5}}>
                    </TextInput>
                </View>

                 <View>
                    <Text>Pesan</Text>
                    <TextInput
                     placeholder='Masukan Pesan Anda'
                     numberOfLines={5}
                     multiline={true}
                     underlineColorAndroid="transparent"
                     style={{borderWidth:1,height:100,borderColor:'#f9f9f7',borderRadius:5,marginVertical:5,paddingHorizontal:5}}
                    />
                </View>

               <CardSaldo />

            </View>
        )
    }
}

export default Transfer