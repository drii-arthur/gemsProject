import React,{Component} from 'react'
import { View,Text,StyleSheet,FlatList,Picker } from "react-native"
import {Input} from 'react-native-elements'
import Icon  from "react-native-vector-icons/Ionicons"
import Font from 'react-native-vector-icons/FontAwesome5'
import RNPickerSelect from 'react-native-picker-select'
import Header from '../Components/header'


class Pln extends Component{
    constructor(props){
        super(props)
        this.state = {
           phone:'',
           payAs:''
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
                <Header title='PLN' />
            <View style={styles.wrapperInput}>
            <Text style={{color:'#39afb5',alignSelf:'flex-start',marginLeft:10,fontWeight:'bold',fontSize:15}}>
            Jenis Layanan
            </Text>
            <Picker
            selectedValue={this.state.payAs}
            style={{height:50,width:'95%',borderBottomColor:'grey',borderBottomWidth:1,marginBottom:10,color:'grey'}}
            onValueChange={(itemValue,itemIndex) => {
                this.setState({
                    payAs:itemValue
                })
            }}
            >
            <Picker.item label='Pilih Layanan' value='Pilih Layanan'/>
            <Picker.item label='Prabayar' value='Prabayar' />
            <Picker.item label='Pasca Bayar' value='Pasca Bayar' />
            
            </Picker>

            <Input
            inputContainerStyle={{borderBottomColor:'#ecf0f1'}}
            keyboardType='numeric'
            label=' Masukan No Rekening PLN'
            labelStyle={{color:'#39afb5',fontSize:14}}
            placeholder='0000.0000.0000'
            inputStyle={styles.textinput}
            onChangeText={(teks) => {this.checkNumber(teks,'phone')}}
            value={this.state.phone}
            />
            </View>
            </View>
        )
    }
}

export default Pln

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