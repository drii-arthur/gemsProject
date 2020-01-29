import React,{Component} from 'react'
import { View,Text,StyleSheet,FlatList,StatusBar,TextInput,Dimensions,Image,TouchableOpacity,Modal } from "react-native"
import {Input} from 'react-native-elements'
import Icon  from "react-native-vector-icons/Ionicons"
import Font from 'react-native-vector-icons/FontAwesome5'
import LinearGradient from 'react-native-linear-gradient'
import {pulsa,transaksiPulsa} from '../Public/Actions/layanan'
import {connect} from 'react-redux'
import AsyncStorage from '@react-native-community/async-storage'
import {Toast} from 'native-base'

import PinTransaction from '../Components/PinTransaction'
import CardPulsa from '../Components/cardPulsa.js'
import Header from '../Components/header'
import JenisLayanan from '../Components/JenisLayanan'

const color = '#39afb5'
const colorP = '#485460'
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
        token:'',
        modalVisible:false,
        modalVisible2:false,
        product_id:'',
        reff_id:''
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

        _transactionPulsa = async () => {
        await this.props.dispatch(transaksiPulsa({
            product_id:this.state.product_id,
            phone_number:this.state.phone,
            reff_id:this.state.reff_id
        },this.state.token))
        .then(res => {
            console.log(res)
            Toast.show({
                    text:'Pembelian Berhasil',
                    buttonText: "Okay",
                    type: "success",
                    position:'top',
                    duration:2000,
                    style:styles.toast
                })
            
        })
        .catch(err => {
            console.log(err)
            Toast.show({
                    text:'Pembelian Gagal',
                    buttonText: "Okay",
                    type: "danger",
                    position:'top',
                    duration:2000,
                    style:styles.toast
                })
            
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
                        product_id:8
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
                        product_id:94,
                        isLoading:true
                    })
            this.props.dispatch(pulsa(94,this.state.token))
            .then(res => {
                this.setState({
                    paketData:res.action.payload.data.products,
                    isLoading:false 
                })
                console.log(res.action.payload.data.products.price)
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
                        product_id:4,
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
                        product_id:5,
                        isLoading:true
                    })
            this.props.dispatch(pulsa(5,this.state.token))
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
                        product_id:9,
                        isLoading:true
                    })
            this.props.dispatch(pulsa(9,this.state.token))
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
                        smartfren:false,
                        price:'',
                        operator:'',
                        desc:'',
                        reff_id:''
                    })
                }
        
    }

    goBack = () => {
        this.props.navigation.goBack()
    }

    setModalVisible(visible) {
            this.setState({modalVisible:visible})
        }
    setModalVisible2(visible2) {
            this.setState({modalVisible2:visible2})
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

            <FlatList
            style={{alignSelf:'center',margin:5}}
            data={this.state.paketData}
            numColumns={2}
            keyExtractor={(item,index) => index}
            onEndReachedThreshold={0.2}
            renderItem={({item,index}) => {
                return(
                    item.price >= 12000 || item.is_gangguan != 0 ?
                    <TouchableOpacity 
                    onPress={() => {this.setState({
                        price:item.price,
                        desc:item.name,
                        operator:item.product_name,
                        reff_id:item.product_detail_id
                    }),this.setModalVisible(true)}} style={styles.containerCard}
                    key={index}
                    >
                    <View style={{flex:2,justifyContent:'center'}}>
                        <Text style={{fontSize:15,fontWeight:'bold',color:'#39afb5',}}>{item.name.substr(0,45)}</Text>
                    </View>

                    <View style={{flex:1,flexDirection:'row'}}>
                        <Text style={{fontSize:10,color:'#535c68'}}>Rp</Text>
                        <Text style={styles.textPrice}>{item.price}</Text>
                    </View>

                     {/* <View style={{flex:1}}>
                        <Text style={{fontSize:10,color:'tomato',alignSelf:'flex-end'}}>{item.desc}</Text>
                    </View> */}
                    
                    
                    </TouchableOpacity>
                    :null
                )
            }}
            /> 
            <Modal
                animationType="slide"
                transparent={true}
                visible={this.state.modalVisible}
                onRequestClose={() => {
                this.setModalVisible(!this.state.modalVisible)
                }}>
                <View style={{flex:1,backgroundColor:'rgba(45, 52, 54,0.5)',elevation:3,justifyContent: 'flex-end'}}>
                    <View style={{backgroundColor:'#fff',padding:20,borderTopLeftRadius:25,borderTopRightRadius:25}}>
                    <View style={{height:6,justifyContent:'center',alignItems:'center',marginTop:5,backgroundColor:'#fff'}}>
                <View style={{backgroundColor:'grey',height:3,width:width/10}}></View>
                </View>
                    <Text style={[styles.textKonfirmasi]}>Konfirmasi Pembayaran</Text>
                    <Text style={styles.textP} >Nomor Telpon : <Text style={{fontWeight:'700'}}>{phone}</Text></Text>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Text style={styles.textP}>Operator : </Text>
                    <Text>{this.state.operator}</Text>
                    </View>

                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                        <Text style={styles.textP}>Metode Pembayaran : </Text>
                        {/* <Picker
                        selectedValue={this.state.language}
                        style={{flex:1,alignItems:'center',height:30,justifyContent:'center'}}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({language: itemValue})
                        }
                        itemStyle={{color:'blue',fontSize:13}}
                        >
                        <Picker.Item label="Gems Cash" value="Gems Cash"/>
                        <Picker.Item label="Gems Point" value="Gems Point" />
                        </Picker> */}
                    </View>
                    
                    
                    <Text style={{fontSize:16,color:color,fontWeight:'700',marginBottom:5}}>Detail</Text>
                    <View style={{flexDirection:'row',paddingHorizontal:10}}>
                        <Text style={styles.textP}>Pembayaran : </Text>
                        <View style={{flex:1}}>
                            <Text style={[styles.textP,{alignSelf:'flex-end'}]}>{this.state.desc}</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-between',borderBottomWidth:1,borderBottomColor:'#f9f9f7',paddingBottom:3,paddingHorizontal:10}}>
                    <Text style={[styles.textP,{marginRight:10}]}>Harga : </Text>
                    <Text style={styles.textP}>{this.state.price}</Text>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-between',paddingRight:12}}>
                    <Text style={{fontSize:18,color:colorP,fontWeight:'700'}}>Total</Text>
                        <Text style={{fontSize:18,color:colorP,fontWeight:'700'}}>{this.state.price}</Text>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <TouchableOpacity
                        onPress={() => {this.setModalVisible(!this.state.modalVisible),this.setModalVisible2(true) }}
                            style={{width:'47%',alignItems:'center',borderRadius:5,elevation:2,marginTop:10}} >
                        <LinearGradient colors={[ '#39AFB5','#1e90ff']} style={{paddingVertical:10,width:'100%',alignItems:'center',borderRadius:5,}}>
                            <Text style={{color:'#fff',fontWeight:'bold',fontSize:16,letterSpacing:1.2}}>Konfirmasi</Text>
                        </LinearGradient>
                        </TouchableOpacity>
                        
                        <TouchableOpacity  onPress={() => {
                        this.setModalVisible(!this.state.modalVisible);
                        }} style={{width:'47%',alignItems:'center',borderRadius:5,elevation:2,marginTop:10,alignItems:'center',justifyContent:'center',backgroundColor:'#fff'}} >
                            <Text>Batalkan</Text>
                        </TouchableOpacity>
                    </View>
                    </View>
                </View>
            </Modal>

            <PinTransaction visible={this.state.modalVisible2} close={() => {this.setModalVisible2(!this.state.modalVisible2)}} transaction={() => {this._transactionPulsa()}} loading={this.state.isLoading} />


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
    },
    containerCard:{
        height:height/8,
        width:width/2.3,
        elevation:4,
        margin:7,
        backgroundColor:'#fff',
        padding:10,
        borderRadius:5,
    },
    textP:{
        color:colorP,
        marginBottom:5
    },
    textKonfirmasi: {
        fontSize:15,
        color: color,
        textAlign:'center',
        marginVertical:10,
        fontWeight:'700'
    },
})