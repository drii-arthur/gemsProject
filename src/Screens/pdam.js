import React,{Component} from 'react'
import { View,Text,StyleSheet,FlatList,StatusBar } from "react-native"
import {Input} from 'react-native-elements'
import Icon  from "react-native-vector-icons/Ionicons"
import Font from 'react-native-vector-icons/FontAwesome5'
import RNPickerSelect from 'react-native-picker-select'
import Header from '../Components/header'


class Asuransi extends Component{
    constructor(props){
        super(props)
        this.state = {
           pdam:''
        }
    }

    checkNumber = (teks,name) => {
        this.setState({
            [name]:teks
        },console.log(this.state.pdam))
    }

    goBack = () => {
        this.props.navigation.goBack()
    }
    render(){
        console.log(this.state.phone)
        return(
            <View style={{flex:1}}>
            <StatusBar barStyle="dark-content" backgroundColor="rgba(30, 39, 46,0.1)" translucent={true} />
                <Header title='PDAM' />
            <View style={styles.wrapperInput}>
             <Text style={{color:'#39afb5',alignSelf:'flex-start',marginLeft:10,fontWeight:'bold',fontSize:15}}>
            Jenis Layanan
            </Text>
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
            label='Masukan Nomor PDAM Anda'
            labelStyle={{color:'#39afb5',fontSize:14}}
            placeholder='xxxx xxxx xxxx xxxx'
            inputStyle={styles.textinput}
            onChangeText={(teks) => {this.checkNumber(teks,'pdam')}}
            // value={this.state.phone}
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
        marginTop:30,
        alignItems:'center',
        marginBottom:20
    },
})