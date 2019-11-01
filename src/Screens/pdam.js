import React,{Component} from 'react'
import { View,Text,StyleSheet,FlatList } from "react-native"
import {Input} from 'react-native-elements'
import Icon  from "react-native-vector-icons/Ionicons"
import Font from 'react-native-vector-icons/FontAwesome5'
import RNPickerSelect from 'react-native-picker-select'
import Header from '../Components/header'


class Asuransi extends Component{
    constructor(props){
        super(props)
        this.state = {
           phone:''
        }
    }

    checkNumber = (teks,name) => {
        this.setState({
            [name]:teks
        },console.log(this.state.phone))
    }

    goBack = () => {
        this.props.navigation.goBack()
    }
    render(){
        console.log(this.state.phone)
        return(
            <View style={{flex:1,marginTop:25}}>
                <Header title='PDAM' />
            <View style={styles.wrapperInput}>
            <RNPickerSelect
            style={{backgroundColor:'red',borderBottomWidth:1,borderBottomColor:'red'}}
            onValueChange={(value) => console.warn(value)}
            items={[
                { label: 'Prabayar', value: 'prabayar' },
                { label: 'Pasca Bayar', value: 'pasca bayar' },
            ]}
            />

            <Input
            inputContainerStyle={{borderBottomColor:'#ecf0f1'}}
            keyboardType='numeric'
            label='Pilih Produk Listrik PLN'
            labelStyle={{color:'#39afb5',fontSize:14}}
            placeholder='Masukan No hp anda'
            inputStyle={styles.textinput}
            onChangeText={(teks) => {this.checkNumber(teks,'phone')}}
            // value={this.state.phone}
            rightIcon={<Font name={'address-book'} size={24} color='#39AFB5' />}
            />
            </View>
            </View>
        )
    }
}

export default Asuransi

const styles = StyleSheet.create({
    wrapperInput:{
        paddingHorizontal:10,
        marginTop:50,
        alignItems:'center',
        marginBottom:20
    },
    textinput:{
    },
    picker:{
        backgroundColor:'tomato'
    }
})