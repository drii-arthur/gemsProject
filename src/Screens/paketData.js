import React,{Component} from 'react'
import { View,Text,StyleSheet,FlatList,StatusBar,TextInput,Dimensions,Image } from "react-native"
import {Input} from 'react-native-elements'
import Icon  from "react-native-vector-icons/Ionicons"
import Font from 'react-native-vector-icons/FontAwesome5'
import LinearGradient from 'react-native-linear-gradient'
import {pulsa,transaksiPulsa} from '../Public/Actions/layanan'
import {connect} from 'react-redux'
import AsyncStorage from '@react-native-community/async-storage'
import {Toast} from 'native-base'


import CardPulsa from '../Components/cardPulsa.js'
import Header from '../Components/header'
import JenisLayanan from '../Components/JenisLayanan'

const color = '#39afb5'
const {width,height} = Dimensions.get('window')
const Hr = () => {
    return(
        <View style={{backgroundColor:'#ecf0f1',height:10,width:width}}></View>
    )
}
class PaketData extends Component{
    constructor(props){
        super(props)
        this.state = {
           phone:'',
           paketData:'',
           prabayar:true,
           pascaBayar:false,
           indosat:false,
           telkomsel:false,
           xl:false,
           three:false,
           isLoading:false,
           axis:false,
           smartfren:false,
           token:''
        }
    }

    _DeletedInput = () => {
        this.setState({
            phone:'',
            indosat:false,
            telkomsel:false,
            xl:false,
            three:false,
            isLoading:false
        })
    }

    componentDidMount = async () => {
        this.setState({isLoading:false})
        const token = await AsyncStorage.getItem('token',(err,res) => {
            if(res){
                this.setState({
                    token:res
                })
            }else{console.log(err)}                   
            })
        const subs = 
            this.props.navigation.addListener('willFocus', () => {
                // this.onRefresh()
                this.getDataNumber()
                // this.getData()
            })

            this.getDataNumber()
            // this.getData()               
        }
    componentWillUnMount (){
        subs.remove()
    }

     getDataNumber =  () => {
            let contact = this.props.navigation.getParam('nomor')
            if(contact != undefined){
            this.setState({
                phone:contact
            })
            }
        }

    checkNumber = (teks,name) => {
       this.setState({
            [name]:teks,
        })
        if(teks.substring(0,4) == '0813' ||
                teks.substring(0,4) == '0812' ||  
                teks.substring(0,4) == '0811' ||    
                teks.substring(0,4) == '0822' ||    
                teks.substring(0,4) == '0853' ||    
                teks.substring(0,4) == '0852' ||    
                teks.substring(0,4) == '0851' ||    
                teks.substring(0,4) == '0823' ){
                    this.setState({
                        telkomsel:true,
                        isLoading:true,
                        product_id:10
                    })
                this.props.dispatch(pulsa(10,this.state.token))
                .then(res => {
                    this.setState({
                        paketData:res.action.payload.data.products,
                        isLoading:false
                    })
                })
                .catch(err => {
                    console.log(err)
                })
                }
        else if(teks.substring(0,4) == '0817' ||
                teks.substring(0,4) == '0877' ||  
                teks.substring(0,4) == '0878' ||    
                teks.substring(0,4) == '0819' ||    
                teks.substring(0,4) == '0818' ||    
                teks.substring(0,4) == '0859'){
                    this.setState({
                        xl:true,
                        isLoading:true,
                        product_id:14
                    })
                this.props.dispatch(pulsa(8,this.state.token))
                .then(res => {
                this.setState({
                    paketData:res.action.payload.data.products,
                    isLoading:false
                })
                })
            .catch(err => {
            console.log(err)
            })
                }
        else if(teks.substring(0,4) == '0855' ||
                teks.substring(0,4) == '0856' ||  
                teks.substring(0,4) == '0857' ||    
                teks.substring(0,4) == '0858' ||        
                teks.substring(0,4) == '0815'){
                    this.setState({
                        indosat:true,
                        product_id:24,
                        isLoading:true
                    })
            this.props.dispatch(pulsa(94,this.state.token))
            .then(res => {
                this.setState({
                    paketData:res.action.payload.data.products,
                    isLoading:false 
                })
            })
            .catch(err => {
            console.log(err)
            })
                }
            
            else if(teks.substring(0,4) == '0881' ||
                teks.substring(0,4) == '0882' ||  
                teks.substring(0,4) == '0883' ||    
                teks.substring(0,4) == '0884' ||        
                teks.substring(0,4) == '0885' ||        
                teks.substring(0,4) == '0886' ||        
                teks.substring(0,4) == '0888' ||        
                teks.substring(0,4) == '0887' ||        
                teks.substring(0,4) == '0889'){
                    this.setState({
                        smartfren:true,
                        product_id:207,
                        isLoading:true
                    })
            this.props.dispatch(pulsa(4,this.state.token))
            .then(res => {
                this.setState({
                    paketData:res.action.payload.data.products,
                    isLoading:false 
                })
            })
            .catch(err => {
            console.log(err)
            })
                }
            
            else if(teks.substring(0,4) == '0896' ||
                teks.substring(0,4) == '0897' ||  
                teks.substring(0,4) == '0898' ||    
                teks.substring(0,4) == '0899' ||        
                teks.substring(0,4) == '0895'){
                    this.setState({
                        three:true,
                        product_id:6,
                        isLoading:true
                    })
            this.props.dispatch(pulsa(6,this.state.token))
            .then(res => {
                this.setState({
                    paketData:res.action.payload.data.products,
                    isLoading:false 
                })
            })
            .catch(err => {
            console.log(err)
            })
                }

            else if(teks.substring(0,4) == '0831' ||
                teks.substring(0,4) == '0832' ||  
                teks.substring(0,4) == '0838' ||            
                teks.substring(0,4) == '0833'){
                    this.setState({
                        axis:true,
                        product_id:18,
                        isLoading:true
                    })
            this.props.dispatch(pulsa(18,this.state.token))
            .then(res => {
                this.setState({
                    paketData:res.action.payload.data.products,
                    isLoading:false 
                })
            })
            .catch(err => {
            console.log(err)
            })
                }
            else {
                    this.setState({
                        paketData:'',
                        indosat:false,
                        telkomsel:false,
                        three:false,
                        indosat:false,
                        xl:false,
                        axis:false,
                        smartfren:false
                    })
                }
        
    }

    goBack = () => {
        this.props.navigation.goBack()
    }
    render(){
        const {phone} = this.state
        console.log(this.state.phone)
        return(
            <View style={{flex:1}}>
            <StatusBar barStyle="dark-content" backgroundColor="rgba(30, 39, 46,0.1)" translucent={true} />
            <Header title='Paket Data' />
             <JenisLayanan
                prabayar={this.state.prabayar}
                changePrabayar={() => {this.setState({prabayar:true,pascaBayar:false})}}
                pascabayar={this.state.pascaBayar}
                changePascaBayar={() => {this.setState({prabayar:false,pascaBayar:true})}}
                />
            
            <Hr />
            <View 
            style={{marginVertical:15,backgroundColor:'#dfe6e9',margin:10,borderRadius:10,elevation:5}}>
             <LinearGradient
                    colors={['#fff','rgba(85, 239, 196,0.1)']}
                    style={{padding:10,borderRadius:10}}
                    >

            <Text style={{color:'#39afb5',fontWeight:'bold',marginBottom:5}}>Phone Number</Text>

            <View style={{flexDirection:'row',alignItems:'center'}}>
            <View style={{width:40,height:40,backgroundColor:'#b2bec3',borderRadius:40/2}}>
            {this.state.indosat == true ?
                <Image source={{uri:`http://www.hptekno.com/wp-content/uploads/2015/11/Indosat-Ooredoo.png`}} 
                resizeMode='cover'
                style={{flex:1,borderRadius:40/2}}
                />
            :null
            }

             {this.state.xl == true ?
                <Image source={{uri:`https://i2.wp.com/klikall.com/blog/wp-content/uploads/2018/10/cara-cek-pulsa-xl.png?fit=800%2C600&ssl=1`}} 
                resizeMode='cover'
                style={{flex:1,borderRadius:40/2}}
                />
            :null
            }

            {this.state.telkomsel == true ?
                <Image source={{uri:`http://3.bp.blogspot.com/-P6XKrnl5ZiU/UDBHT8JpbKI/AAAAAAAAAKw/KAsLBUTOOos/s1600/logo+telkomsel+1.png`}} 
                resizeMode='center'
                style={{flex:1,borderRadius:40/2}}
                />
            :null
            }

            {this.state.three == true ?
                <Image source={{uri:`https://i0.wp.com/sadewapulsa.com/wp-content/uploads/2017/08/Three-3-logo.jpg?ssl=1`}} 
                resizeMode='cover'
                style={{flex:1,borderRadius:40/2}}
                />
            :null
            }
             {this.state.axis == true ?
                <Image source={{uri:`https://4.bp.blogspot.com/-WLfOY9cHMxM/WJlS0lFqZeI/AAAAAAAACx0/qPCq9rWYuZYtFFUyl26dem1LyARkD7sBwCLcB/s320/AXIS4.jpg`}} 
                resizeMode='cover'
                style={{flex:1,borderRadius:40/2}}
                />
            :null
            }

            {this.state.smartfren == true ?
                <Image source={{uri:`https://www.prodata.co.id/wp-content/uploads/2017/08/client-logo-TSP-S-05.jpg`}} 
                resizeMode='cover'
                style={{flex:1,borderRadius:40/2}}
                />
            :null
            }
            </View>
            
            <TextInput
                placeholder='Masukan No Telpon'
                style={{flex:1,marginLeft:5,borderBottomWidth:1,marginRight:10,position:'relative',borderBottomColor:'#b2bec3'}}
                onChangeText={(teks) => {this.checkNumber(teks,'phone')}}
                value={phone}
                keyboardType='numeric'
            />

            <Font name={'address-book'} size={24} color={color} onPress={() => {this.props.navigation.navigate('ContactList')}} />
            {phone.length != '' ? 
            <Icon name='ios-close' size={20} color='#fff' style={{position:'absolute',top:15,right:50,width:20,height:20,backgroundColor:'grey',textAlign:'center',borderRadius:25/2,alignItems:'center'}} onPress={() => {this._DeletedInput()}} />
            :null}
            </View>
            </LinearGradient>
            </View>

            <Hr />

            <CardPulsa check={this.state.phone} />
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        layanan: state.layanan
    };
};

export default connect(mapStateToProps)(PaketData)

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
        marginTop:25,
        alignItems:'center',
        marginBottom:20
    }
})