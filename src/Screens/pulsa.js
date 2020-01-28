import React,{Component} from 'react'
import { View,Text,StyleSheet,FlatList,StatusBar,Dimensions,TouchableOpacity,ScrollView,Image,Picker,RefreshControl,TextInput,ActivityIndicator,Modal } from "react-native"
import Icon  from "react-native-vector-icons/Ionicons"
import Font from 'react-native-vector-icons/FontAwesome5'
import LinearGradient from 'react-native-linear-gradient'
import RNPickerSelect from 'react-native-picker-select'
import AsyncStorage from '@react-native-community/async-storage'
import {pulsa,transaksiPulsa} from '../Public/Actions/layanan'
import {connect} from 'react-redux'
import {Toast} from 'native-base'

import PinTransaction from '../Components/PinTransaction'
import CardPulsa from '../Components/cardPulsa'
import Header from '../Components/header'

const color = '#39afb5'
const colorP = '#485460'
const radio_props = [
{label: 'Prabayar ', value: 0 },
{label: 'Pasca bayar', value: 1 }
]
const {height,width} = Dimensions.get('window')

const Hr = () => {
    return(
        <View style={{backgroundColor:'#ecf0f1',height:10,width:width}}></View>
    )
}
class Pulsa extends Component{
    constructor(props){
        super(props)
        this.state = {
            phone:'',
            operator:'',
            payAs:'',
            pulsa:[],
            token:'',
            prabayar:true,
            type:'',
            value:0,
            price:'',
            desc:'',
            refreshing:false,
            pascaBayar:false,
            indosat:false,
            telkomsel:false,
            xl:false,
            three:false,
            isLoading:false,
            axis:false,
            smartfren:false,
            modalVisible: false,
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
                        product_id:327
                    })
                this.props.dispatch(pulsa(327,this.state.token))
                .then(res => {
                    this.setState({
                        pulsa:res.action.payload.data.products,
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
                this.props.dispatch(pulsa(14,this.state.token))
                .then(res => {
                this.setState({
                    pulsa:res.action.payload.data.products,
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
            this.props.dispatch(pulsa(24,this.state.token))
            .then(res => {
                this.setState({
                    pulsa:res.action.payload.data.products,
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
            this.props.dispatch(pulsa(207,this.state.token))
            .then(res => {
                this.setState({
                    pulsa:res.action.payload.data.products,
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
                    pulsa:res.action.payload.data.products,
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
                    pulsa:res.action.payload.data.products,
                    isLoading:false 
                })
            })
            .catch(err => {
            console.log(err)
            })
                }
            else {
                    this.setState({
                        pulsa:'',
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

    getData = () => {
        if(this.state.phone.substring(0,4) == '0813' ||
                this.state.phone.substring(0,4) == '0812' ||  
                this.state.phone.substring(0,4) == '0811' ||    
                this.state.phone.substring(0,4) == '0822' ||    
                this.state.phone.substring(0,4) == '0853' ||    
                this.state.phone.substring(0,4) == '0852' ||    
                this.state.phone.substring(0,4) == '0823' ){
                    const provider = "TELKOMSEL"
                    this.setState({
                        provider:provider,
                        type:type
                    })
                    console.log('haii')
                this.props.dispatch(pulsa(this.state.provider,this.state.token))
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
                this.props.dispatch(pulsa(this.state.provider,this.state.token))
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
                    const provider = 209
                    this.setState({
                        provider:provider,
                        type:type
                    })
                    this.props.dispatch(pulsa(this.state.provider,this.state.token))
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

         setModalVisible(visible) {
            this.setState({modalVisible:visible})
        }

         setModalVisible2(visible2) {
            this.setState({modalVisible2:visible2})
        }

    goBack = () => {
        this.props.navigation.goBack()
    }
    render(){
        const {pulsa} = this.state
        const {phone} = this.state
        
        return(
            <View style={{flex:1}}>
            <StatusBar barStyle="dark-content" backgroundColor="rgba(30, 39, 46,0.1)" translucent={true} />
                <Header title='Pulsa' />
                <View style={{height:50,marginTop:-20,borderTopLeftRadius:25,flexDirection:'row',paddingHorizontal:5,paddingTop:1,marginBottom:10}}>
                    <TouchableOpacity onPress={() => {this.setState({prabayar:true,pascaBayar:false})}} style={[styles.layanan,this.state.prabayar ?{ borderColor:'#fff', borderWidth:1
                    } : null]}>
                    {this.state.prabayar ? 
                    <LinearGradient
                    style={[styles.layanan,{height:'100%',width:'100%'}]} 
                        start={{x: 0, y: 1}} 
                        end={{x: 2, y:1.}} 
                    colors={['#39afb5','#57bfed']}>
                    <Text style={this.state.prabayar ? {color:'#fff'} :{}}>Prabayar</Text>
                    </LinearGradient>:
                     <Text style={this.state.prabayar ? {color:'#fff'} :{}}>Prabayar</Text>}
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {this.setState({prabayar:false,pascaBayar:true})}} style={[styles.layanan,this.state.prabayar ?{ borderColor:'#fff', borderWidth:1
                    } : null]}>
                    {this.state.pascaBayar ? 
                    <LinearGradient
                    style={[styles.layanan,{height:'100%',width:'100%'}]}
                        start={{x: 0, y: 1}} 
                        end={{x: 2, y:1.}} 
                    colors={['#39afb5','#57bfed']}>
                    <Text style={this.state.pascaBayar ? {color:'#fff'} :{}}>Pasca Bayar</Text>
                    </LinearGradient>:
                        <Text style={this.state.pascaBayar ? {color:'#fff'} :{}}>Pasca Bayar</Text>}
                    </TouchableOpacity>
                </View>

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


            {phone && phone.length != '' && this.state.prabayar == true ?
            <FlatList
            refreshControl={        
                <RefreshControl refreshing={this.state.refreshing} onRefresh={this.onRefresh} />
            }
            style={{alignSelf:'center',margin:5}}
            data={this.state.pulsa}
            numColumns={2}
            keyExtractor={(item,index) => index}
            onEndReachedThreshold={0.2}
            renderItem={({item,index}) => {
                return(
                    item.product_code != null ?
                    <TouchableOpacity onPress={() => {this.setState({
                        
                        price:item.price,
                        desc:item.name,
                        operator:item.product_name,
                        reff_id:item.product_detail_id
                    }),this.setModalVisible(true)}} style={styles.containerCard}
                    key={index}
                    >
                    <View style={{flex:2,justifyContent:'center'}}>
                        <Text style={{fontSize:15,fontWeight:'bold',color:'#39afb5',}}>{item.name}</Text>
                    </View>

                    <View style={{flex:1}}>
                        <Text style={{fontSize:10,color:'#535c68'}}>Rp</Text>
                        <Text style={styles.textPrice}>{item.price}</Text>
                    </View>

                     <View style={{flex:1}}>
                        <Text style={{fontSize:10,color:'tomato',alignSelf:'flex-end'}}>{item.desc}</Text>
                    </View>
                    
                    
                    </TouchableOpacity>
                    :null
                )
               
            }}
            /> 
         : null }

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
                    <Text style={[styles.text]}>Konfirmasi Pembayaran</Text>
                    <Text style={styles.textP} >Nomor Telpon : <Text style={{fontWeight:'700'}}>{phone}</Text></Text>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Text style={styles.textP}>Operator : </Text>
                    <Text>{this.state.operator}</Text>
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
                        onPress={() => {this.setModalVisible(!this.state.modalVisible),this.setModalVisible2(true) }}
                            style={{width:'47%',alignItems:'center',borderRadius:5,elevation:2,marginTop:10}} >
                        <LinearGradient colors={[ '#39AFB5','#1e90ff']} style={{paddingVertical:10,width:'100%',alignItems:'center',borderRadius:5}}>
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
        paddingHorizontal:10,
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
        marginTop:-15,
        fontSize:12
    },
    layanan:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:25,
    },
    textLayanan:{
        color:'#fff'
    }
})