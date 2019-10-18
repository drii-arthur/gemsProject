import React,{Component} from 'react'
import { View,Text,StyleSheet,FlatList } from "react-native"
import {Input} from 'react-native-elements'
import Icon  from "react-native-vector-icons/Ionicons"
import Font from 'react-native-vector-icons/FontAwesome5'
import CardPulsa from '../Components/cardPulsa.js'


class Pulsa extends Component{
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
            <View style={{flex:1}}>
            <View style={styles.header}>
            <Icon name={'ios-arrow-back'} size={24} color='#fff' onPress={() => {this.props.navigation.goBack()}} />
                <Text style={styles.text}>
                Pulsa
                </Text>
            </View>
            <View style={styles.wrapperInput}>
            <Input
            inputContainerStyle={{borderBottomColor:'#ecf0f1'}}
            keyboardType='numeric'
            label='Phone Number'
            labelStyle={{color:'#39afb5',fontSize:14}}
            placeholder='Masukan No hp anda'
            inputStyle={styles.textinput}
            onChangeText={(teks) => {this.checkNumber(teks,'phone')}}
            // value={this.state.phone}
            rightIcon={<Font name={'address-book'} size={24} color='#39AFB5' />}
            />
            </View>
            <CardPulsa check={this.state.phone} />
            </View>
        )
    }
}

export default Pulsa

const styles = StyleSheet.create({
    header:{
        backgroundColor:'#39AFB5',
        paddingVertical:12,
        paddingHorizontal:20,
        elevation:4,
        flexDirection:'row'
    },
    text:{
        color:'#fff',
        fontSize:18,
        marginLeft:20
    },
    wrapperInput:{
        paddingHorizontal:10,
        marginTop:50,
        alignItems:'center',
        marginBottom:20
    },
    textinput:{
    }
})