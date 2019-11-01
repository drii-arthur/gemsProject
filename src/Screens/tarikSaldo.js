import React from 'react'
import {View,Text,TextInput,TouchableOpacity} from 'react-native'
import CardSaldo from '../Components/cardSaldoTopup'

class TarikSaldo extends React.Component{
    render(){
        return(
            <View style={{flex:1,paddingHorizontal:15,paddingVertical:10}}>

                <View>
                    <Text>Nominal Withdraw</Text>
                    <TextInput
                     placeholder='08XX-XXXX-XXXX'
                     keyboardType='numeric'
                     style={{borderBottomWidth:1,borderBottomColor:'#a4b0be',alignItems:'center',paddingVertical:10,borderRadius:5,marginBottom:10}}>
                        <Text style={{fontSize:16,color:'#000',textAlign:'center'}}>Rp </Text>
                    </TextInput>
                </View>

                <CardSaldo />

                <View style={{marginTop:20}}>                
                    <Text>Select Bank Account</Text>                    
                    <View style={{alignItems:'center',marginTop:10,}}>
                    <TouchableOpacity>
                        <Text style={{color:'#39afb5',marginBottom:20,fontWeight:'bold',letterSpacing:1}}>Tambah Bank</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{backgroundColor:'#39afb5',paddingHorizontal:20,paddingVertical:10,borderRadius:25,fontWeigh:'700',elevation:3}}>
                            <Text style={{color:'#fff',letterSpacing:1}}>TRANSFER</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        )
    }
}

export default TarikSaldo