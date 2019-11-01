import React,{Component} from 'react'
import { View,Text,StyleSheet,FlatList,StatusBar } from "react-native"
import {Input} from 'react-native-elements'
import Icon  from "react-native-vector-icons/Ionicons"
import Font from 'react-native-vector-icons/FontAwesome5'
import CardPulsa from '../Components/cardPulsa.js'
import Header from '../Components/header'


class Pulsa extends Component{
    constructor(props){
        super(props)
        this.state = {
           phone:'',
        //    contact: this.props.navigation.getParam('nomor')
        }
    }


    checkNumber = (teks,name) => {
        this.setState({
            [name]:teks
        })
    }

    // componentWillMount(){
    //     const phoneNumber = this.props.navigation.getParam('nomor')
    //     if(phoneNumber !== undefined) {
    //         this.setState({
    //             contact:phoneNumber
    //         })
    //         console.warn(this.state.contact,'contact')
    //     }
    //     else{
    //         this.setState({
    //             contact:''
    //         })
    //     }
        
    // }

    goBack = () => {
        this.props.navigation.goBack()
    }
    render(){
        const contact = this.props.navigation.getParam('nomor')
        return(
            <View style={{flex:1,marginTop:25}}>
            <StatusBar backgroundColor='#39afb5' transculent={false} />
                <Header title='Pulsa' />
            <View style={styles.wrapperInput}>
            {contact !== '' ? 
            <Input
            inputContainerStyle={{borderBottomColor:'#ecf0f1'}}
            keyboardType='numeric'
            label='Phone Number'
            labelStyle={{color:'#39afb5',fontSize:14}}
            placeholder='Masukan No hp anda'
            inputStyle={styles.textinput}
            onChangeText={(teks) => {this.checkNumber(teks,'phone')}}
            rightIcon={<Font name={'address-book'} size={24} color='#39AFB5' onPress={() => {this.props.navigation.navigate('ContactList')}} />}
            >
            <Text>{contact}</Text>
            </Input>
            :
            <Input
            inputContainerStyle={{borderBottomColor:'#ecf0f1'}}
            keyboardType='numeric'
            label='Phone Number'
            labelStyle={{color:'#39afb5',fontSize:14}}
            placeholder='Masukan No hp anda'
            inputStyle={styles.textinput}
            onChangeText={(teks) => {this.checkNumber(teks,'phone')}}
            rightIcon={<Font name={'address-book'} size={24} color='#39AFB5' onPress={() => {this.props.navigation.navigate('ContactList')}} />}
            />
            }
            
            </View>
            <CardPulsa check={this.state.phone} getContact={contact} />
            </View>
        )
    }
}

export default Pulsa

const styles = StyleSheet.create({
    wrapperInput:{
        paddingHorizontal:10,
        marginTop:50,
        alignItems:'center',
        marginBottom:20
    },
    textinput:{
    }
})