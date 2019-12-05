import React,{Component} from 'react'
import { View,Text,StyleSheet,FlatList,StatusBar,Dimensions,TouchableOpacity,ScrollView,Image,Picker,RefreshControl } from "react-native"
import {Input} from 'react-native-elements'
import Icon  from "react-native-vector-icons/Ionicons"
import Font from 'react-native-vector-icons/FontAwesome5'
import CardPulsa from '../Components/cardPulsa'
import Header from '../Components/header'
import LinearGradient from 'react-native-linear-gradient'
import Modal from 'react-native-modalbox'
import RNPickerSelect from 'react-native-picker-select'
import AsyncStorage from '@react-native-community/async-storage'
import {pulsa} from '../Public/Actions/layanan'
import {connect} from 'react-redux'
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button'


const color = '#39afb5'
const colorP = '#485460'
const radio_props = [
{label: 'Prabayar ', value: 0 },
{label: 'Pasca bayar', value: 1 }
]
const {height,width} = Dimensions.get('window')
class Pulsa extends Component{
    constructor(props){
        super(props)
        this.state = {
            phone:'',
            isOpen: false,
            isDisabled: false,
            swipeToClose: true,
            sliderValue: 0.3,
            payAs:'',
            pulsa:[],
            token:'',
            prabayar:false,
            type:'',
            provider:'',
            value:0,
            price:'',
            desc:'',
            refreshing:false
            
        }
    }

    _DeletedInput = () => {
        this.setState({
            phone:''
        })
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
                teks.substring(0,4) == '0823' ){
                    const provider = "TELKOMSEL"
                    const type = "REGULER"
                    this.setState({
                        provider:provider,
                        type:type
                    })
                }
        else if(teks.substring(0,4) == '0817' ||
                teks.substring(0,4) == '0877' ||  
                teks.substring(0,4) == '0878' ||    
                teks.substring(0,4) == '0819' ||    
                teks.substring(0,4) == '0818' ||    
                teks.substring(0,4) == '0859'){
                    const provider = "XL"
                    const type = "REGULER"
                    this.setState({
                        provider:provider,
                        type:type
                    })
                }
        else if(teks.substring(0,4) == '0855' ||
                teks.substring(0,4) == '0856' ||  
                teks.substring(0,4) == '0857' ||    
                teks.substring(0,4) == '0858' ||        
                teks.substring(0,4) == '0815'){
                    const provider = "INDOSAT"
                    const type = "REGULER"
                    this.setState({
                        provider:provider,
                        type:type
                    })
                }
        if(teks.length >= 4) {
        this.props.dispatch(pulsa(this.state.type,this.state.provider,this.state.token))
        .then(res => {
            console.log(res)
            this.setState({pulsa:res.action.payload.data.data})
        })
        .catch(err => {
            console.log(err)
        })
        }
        
    }

    componentDidMount = async () => {
        const token = await AsyncStorage.getItem('token',(err,res) => {
            if(res){
                this.setState({
                    token:res
                })
            }else{console.log(err)}                   
            })
        const subs = 
            this.props.navigation.addListener('willFocus', () => {
                this.onRefresh()
                this.getDataNumber()
                this.getData()
            })

            this.getDataNumber()
            this.getData()               
        }
    componentWillUnMount (){
        subs.remove()
    }

    // componentDidUpdate(prevState){
    //     this.getData()
    // }

    getData = () => {
        if(this.state.phone.substring(0,4) == '0813' ||
                this.state.phone.substring(0,4) == '0812' ||  
                this.state.phone.substring(0,4) == '0811' ||    
                this.state.phone.substring(0,4) == '0822' ||    
                this.state.phone.substring(0,4) == '0853' ||    
                this.state.phone.substring(0,4) == '0852' ||    
                this.state.phone.substring(0,4) == '0823' ){
                    const provider = "TELKOMSEL"
                    const type = "REGULER"
                    this.setState({
                        provider:provider,
                        type:type
                    })
                    console.log('haii')
                this.props.dispatch(pulsa(this.state.type,this.state.provider,this.state.token))
                .then(res => {
                    this.setState({pulsa:res.action.payload.data.data})
                })
                .catch(err => {
            console.log(err)
            })
                }
            if(this.state.phone.substring(0,4) == '0817' ||
                this.state.phone.substring(0,4) == '0877' ||  
                this.state.phone.substring(0,4) == '0878' ||    
                this.state.phone.substring(0,4) == '0819' ||    
                this.state.phone.substring(0,4) == '0818' ||    
                this.state.phone.substring(0,4) == '0859'){
                    const provider = "XL"
                    const type = "REGULER"
                    this.setState({
                        provider:provider,
                        type:type
                    })
                this.props.dispatch(pulsa(this.state.type,this.state.provider,this.state.token))
                .then(res => {
                    this.setState({pulsa:res.action.payload.data.data})
                })
                .catch(err => {
                console.log(err)
                })
                }
            if(this.state.phone.substring(0,4) == '0855' ||
                this.state.phone.substring(0,4) == '0856' ||  
                this.state.phone.substring(0,4) == '0857' ||    
                this.state.phone.substring(0,4) == '0858' ||        
                this.state.phone.substring(0,4) == '0815'){
                    const provider = "INDOSAT"
                    const type = "REGULER"
                    this.setState({
                        provider:provider,
                        type:type
                    })
                    this.props.dispatch(pulsa(this.state.type,this.state.provider,this.state.token))
                    .then(res => {
                    this.setState({pulsa:res.action.payload.data.data})
                    })
                    .catch(err => {
                    console.log(err)
                    })
                    
                }
    }


        getDataNumber =  () => {
            let contact = this.props.navigation.getParam('nomor')
            if(contact != undefined){
            this.setState({
                phone:contact
            })
            }
        }

        onRefresh = async () => {
            this.setState({
                refreshing:true
            },() => {setTimeout(() => {
                this.setState({
                    refreshing:false
                })
            }, 2000);})
        }


    goBack = () => {
        this.props.navigation.goBack()
    }
    render(){
        const {pulsa} = this.state
        const {phone} = this.state
        console.log(phone);
        
        return(
            <View style={{flex:1}}>
            <StatusBar barStyle="dark-content" backgroundColor="rgba(30, 39, 46,0.1)" translucent={true} />
                <Header title='Pulsa' />
                <View style={styles.wrapperInput}>
                <View style={{marginHorizontal:10,marginBottom:10,borderBottomColor:'#ecf0f1',borderBottomWidth:1,paddingVertical:10}}>
                 <Text style={{color:'#39afb5',fontWeight:'bold',fontSize:15,marginBottom:10}}>
                    Jenis Layanan
                </Text>
                
            <RadioForm
                        radio_props={radio_props}
                        initial={0}
                        labelStyle={{marginRight:20}}
                        style={{width:'100%',marginLeft:10}}
                        buttonSize={10}
                        buttonInnerColor='red'
                        selectedButtonColor={'#198f94'}
                        formHorizontal={true}
                        labelHorizontal={true}
                        onPress={(value) => {this.setState({value:value})}}
                        animation={true}
                        buttonColor={'#198f94'}
                    />
                    </View>

                
            </View>

            <View style={[styles.wrapperInput,{marginTop:10}]}>
            
            <Input
            inputContainerStyle={{borderBottomColor:'#ecf0f1',position:'relative'}}
            keyboardType='numeric'
            label='Phone Number'
            labelStyle={{color:color,fontSize:14}}
            placeholder='Masukan No hp anda'
            inputStyle={styles.textinput}
            onChangeText={(teks) => {this.checkNumber(teks,'phone')}}
            value={phone}
            rightIcon={<Font name={'address-book'} size={24} color={color} onPress={() => {this.props.navigation.navigate('ContactList')}} />}
            />
            {phone.length != '' ? 
            <Icon name='ios-close' size={20} color='#fff' style={{position:'absolute',top:35,right:60,width:20,height:20,backgroundColor:'grey',textAlign:'center',borderRadius:25/2}} onPress={() => {this._DeletedInput()}} />
            :null}
            </View>


            {phone.length >= 5 && this.state.value == 0 ?
            <FlatList
            refreshControl={        
                <RefreshControl refreshing={this.state.refreshing} onRefresh={this.onRefresh} />
            }
            style={{alignSelf:'center'}}
            data={this.state.pulsa}
            numColumns={2}
            keyExtractor={(item,index) => index}
            onEndReachedThreshold={0.2}
            renderItem={({item,index}) => {
                return(
                    <TouchableOpacity onPress={() => {this.setState({
                        
                        price:item.price,
                        desc:item.description,
                        provider:item.operator
                    }),this.refs.modal3.open()}} style={styles.containerCard}
                    key={index}
                    >
                    <Text style={styles.textJumlah}>{item.description} </Text>
                    <Text style={{fontSize:10,color:'#535c68'}}>Rp</Text>
                    <Text style={styles.textPrice}>{item.price}</Text>
                    <View style={{alignItems:'flex-end'}}>
                    
                    {
                    item.operator == 'TELKOMSEL' ?
                    (<Image style={{height:30,width:60}} source={{uri:'https://1.bp.blogspot.com/-C64gdRuVaJM/XW4zTQRSZgI/AAAAAAAABAg/mrYpbD-rYkkmIzv9PZRaK99pDvhpueCLwCLcBGAs/s400/Logo%2BTelkomsel%2BTerbaru.png'}} />) : null }
                    {
                    item.operator == 'INDOSAT' ?
                    (<Image style={{height:16,width:60}} source={{uri:'https://upload.wikimedia.org/wikipedia/id/thumb/3/3f/Indosat_Logo.svg/1280px-Indosat_Logo.svg.png'}} />) : null }
                    {
                    item.operator == 'XL'?
                    (<Image style={{height:25,width:25}} source={{uri:'https://upload.wikimedia.org/wikipedia/id/thumb/b/ba/XL_Axiata.svg/1076px-XL_Axiata.svg.png'}} />) : null }
                    
                    </View>
                        
                    
                    </TouchableOpacity>
                ) 
            }}
            />
         : null }

            {/* <CardPulsa 
            check={this.state.phone} 
            pulsa={pulsa} 
            prabayar={this.state.value} 
            getContact={contact} 
            press={() => {this.refs.modal3.open()}} 
            price={this.state.price}
            desc={this.state.desc} /> */}
            <Modal style={[styles.modal, styles.modal3]} position={"bottom"} ref={"modal3"} isDisabled={this.state.isDisabled}>
                <View style={{height:6,justifyContent:'center',alignItems:'center',marginTop:5}}>
                <View style={{backgroundColor:'grey',height:3,width:width/10}}></View>
                </View>
                    <Text style={[styles.text]}>Konfirmasi Pembayaran</Text>
                    <Text style={styles.textP} >Nomor Telpon : <Text style={{fontWeight:'700'}}>{phone}</Text></Text>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Text style={styles.textP}>Operator : </Text>
                    <Text>{this.state.provider}</Text>
                    </View>

                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                        <Text style={styles.textP}>Metode Pembayaran : </Text>
                        <Picker
                        selectedValue={this.state.language}
                        style={{flex:1,alignItems:'center',height:30,justifyContent:'center'}}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({language: itemValue})
                        }
                        itemStyle={{color:'blue',fontSize:13}}
                        >
                        <Picker.Item label="Gems Cash" value="Gems Cash"/>
                        <Picker.Item label="Gems Point" value="Gems Point" />
                        </Picker>
                    </View>
                    
                    
                    <Text style={{fontSize:16,color:color,fontWeight:'700',marginBottom:5}}>Detail</Text>
                    <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:10}}>
                    <Text style={styles.textP}>Pembayaran</Text>
                    <Text style={styles.textP}>{this.state.desc}</Text>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-between',borderBottomWidth:1,borderBottomColor:'#f9f9f7',paddingBottom:3,paddingHorizontal:10}}>
                    <Text style={styles.textP}>Harga</Text>
                    <Text style={styles.textP}>{this.state.price}</Text>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-between',paddingRight:12}}>
                    <Text style={{fontSize:18,color:colorP,fontWeight:'700'}}>Total</Text>
                        <Text style={{fontSize:18,color:colorP,fontWeight:'700'}}>{this.state.price}</Text>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <TouchableOpacity 
                            style={{width:'47%',alignItems:'center',borderRadius:5,elevation:2,marginTop:10}} >
                        <LinearGradient colors={[ '#39AFB5','#1e90ff']} style={{paddingVertical:10,width:'100%',alignItems:'center',borderRadius:5}}>
                            <Text style={{color:'#fff',fontWeight:'bold',fontSize:16,letterSpacing:1.2}}>Konfirmasi</Text>
                        </LinearGradient>
                        </TouchableOpacity>
                        
                        <TouchableOpacity onPress={() => this.refs.modal3.close()} style={{width:'47%',alignItems:'center',borderRadius:5,elevation:2,marginTop:10,alignItems:'center',justifyContent:'center',backgroundColor:'#fff'}} >
                            <Text>Batalkan</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        layanan: state.layanan
    };
};

export default connect(mapStateToProps)(Pulsa)

const styles = StyleSheet.create({
    wrapperInput:{
        marginTop:25,paddingLeft:5,paddingRight:10,marginBottom:5
    },

    modal: {
        paddingTop:5,
        paddingHorizontal:16,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    modal3: {
    height: height/2,
    width: width
    },
    text: {
        fontSize:15,
        color: color,
        textAlign:'center',
        marginVertical:10,
        fontWeight:'700'
    },
    textP:{
        color:colorP,
        marginBottom:5
    },
    containerCard:{
        height:height/8,
        width:width/2.3,
        elevation:4,
        margin:5,
        backgroundColor:'#fff',
        padding:10,
        borderRadius:5
    },
    textJumlah:{
        fontSize:12,
        fontWeight:'700',
        color:'#39afb5',
        marginBottom:5
    },
    textPrice:{
        color:'#535c68',
        marginLeft:14,
        marginTop:-15
    },
})