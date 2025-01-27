import React,{Component} from 'react'
import { View,Text,StyleSheet,FlatList,Picker,StatusBar,TouchableOpacity,Dimensions,ActivityIndicator,Image,TextInput } from "react-native"
import {Input} from 'react-native-elements'
import Icon  from "react-native-vector-icons/Ionicons"
import Font from 'react-native-vector-icons/FontAwesome5'
import RNPickerSelect from 'react-native-picker-select'
import Header from '../Components/header'
// import PayConfirm from '../Components/payConfirm'
import CardPulsa from '../Components/cardPulsa'
import Modal from 'react-native-modalbox'
import LinearGradient from 'react-native-linear-gradient'
import {pln,checkToken} from '../Public/Actions/layanan'
import {connect} from 'react-redux'
import AsyncStorage from '@react-native-community/async-storage'
import Shimmer from 'react-native-shimmer'

import JenisLayanan from '../Components/JenisLayanan'
const color = '#39afb5'
const colorP = '#485460'
const {height,width} = Dimensions.get('window')

const Hr = () => {
    return(
        <View style={{backgroundColor:'#ecf0f1',height:10,width:width}}></View>
    )
}
class Pln extends Component{
    constructor(props){
        super(props)
        this.state = {
            noMeter:'',
            nama:'',
            payAs:'',
            isOpen: false,
            isDisabled: false,
            swipeToClose: true,
            sliderValue: 0.3,
            coverScreen:false,
            data:[],
            token:'',
            isLoading:false,
            value:0,
            price:'',
            desc:'',
            require:false,
            prabayar:true,
            pascaBayar:false,
        }
    }

    componentDidMount = async () => {
        this.setState({
            isLoading:true
        })
        await AsyncStorage.getItem('token',(err,res) => {
            if(res){
                this.setState({token:res})
            }
        })
        await this.props.dispatch(pln(this.state.token))
        .then(res => {
            console.log(res.action.payload.data)
            this.setState({data:res.action.payload.data.products,isLoading:false})
        })
        .catch(err => {
            console.log(err)
        })

    }

    getTokenNumber = async () => {
        await this.props.dispatch(checkToken({nomor_rekening:this.state.noMeter},this.state.token))
        .then(res => {
            const data = res.action.payload.data.data
            this.setState({
                noMeter:data.no_pelanggan,
                nama:data.nama
                })
        })
        .catch(err => {
            alert(err)
        })
    }

    goBack = () => {
        this.props.navigation.goBack()
    }
    render(){
        const {data} = this.state
        return(
            <View style={{flex:1}}>
                 <StatusBar barStyle="dark-content" backgroundColor="rgba(30, 39, 46,0.2)" translucent={true} />            
                <Header title='PLN' />
                <JenisLayanan
                prabayar={this.state.prabayar}
                changePrabayar={() => {this.setState({prabayar:true,pascaBayar:false})}}
                pascabayar={this.state.pascaBayar}
                changePascaBayar={() => {this.setState({prabayar:false,pascaBayar:true})}}
                />

                <Hr />
            <View style={[styles.wrapperInput]}>
            

        {this.state.pascaBayar == true ? 
            (<>
        <Text style={{color:'#39afb5',alignSelf:'flex-start',fontWeight:'bold',fontSize:15}}>
            Pilih Bulan
            </Text>
            <RNPickerSelect
            style={{height:100}}
            onValueChange={(value) => 
                console.warn(value)}
            items={[
                { label: 'Januari', value: 'Januari' },
                { label: 'February', value: 'February' },
            ]}
            />
            </> )
            : null }
            <Text style={{color:'#39afb5',alignSelf:'flex-start',fontWeight:'bold',fontSize:15}}>
                No Meter / ID Pelanggan
            </Text>
            <View style={{flexDirection:'row',borderWidth:1,borderColor:'#b2bec3',borderRadius:5,alignItems:'center'}}>
            <TextInput
                placeholder='0000.0000.0000'
                style={{flex:1,marginRight:10,position:'relative'}}
                onChangeText={(noMeter) => {this.setState({noMeter,require:false})}}
                value={this.state.noMeter}
                keyboardType='numeric'
                onSubmitEditing={this.getTokenNumber}
            />
                <View style={{width:40,height:40,padding:5}}>
                    <Image source={{uri:''}} 
                        resizeMode='cover' 
                        style={{flex:1,borderRadius:40/2,}}
                        />
                </View>
            </View>

            </View>
            {this.state.require ? 
            <View style={styles.errNotif}>
            <View style={{position:'absolute',top:-10,left:13}}>
                <Icon name='md-arrow-dropup' size={15} color='rgba(192, 57, 43,1.0)' />
            </View>
                <Icon name='ios-information-circle-outline' size={24} color='rgba(192, 57, 43,1.0)' style={{marginRight:10}} />
                <Text style={{color:'#34495e'}}>No Meter Tidak Boleh Kosong !!!</Text>
            </View>
            : null }
            

            {/* <View style={{backgroundColor:'red',flex:1}}></View> */}

            {/* {this.state.isLoading ? 
                <Shimmer direction="left">
                <Text>Loading...</Text>
            </Shimmer>
            : */}
            {this.state.prabayar == true && this.state.isLoading == false ? 
            <FlatList
            style={{alignSelf:'center'}}
            data={data}
            numColumns={2}
            keyExtractor={(item) => item.id}
            onEndReachedThreshold={0.2}
            renderItem = {({item,index}) => {
                return(
                    <TouchableOpacity onPress={
                        () => { if(this.state.noMeter != ''){
                            this.setState({price:item.price,desc:item.name}),this.refs.modal3.open()
                    } else{this.setState({require:true})}}} key={index} style={styles.wrapperBox}>
                        <Text style={{fontSize:12,color:color}}>{item.name}</Text>
                        <Text style={{fontSize:14}}><Text style={{fontSize:11,color:'grey'}}>Harga: </Text>{item.price}</Text>
                        <View style={{alignItems:'flex-end'}}>
                        <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSWzxy9Oi2oNoUFpt4Eh7ldS9LtE9wB92kBuK1jRBhX_IEVzE2y'}}
                                style={{width:25,height:25,borderRadius:25/2,borderColor:'orange',borderWidth:1}}
                                />
                        </View>
                        
            
                    
                    </TouchableOpacity>
                )
            }}
            />  : <ActivityIndicator size='large' /> }
    
            
            {/* {this.state.noMeter.length == 10 ? this.refs.modal3.open() : null} */}
            <Modal style={[styles.modal, styles.modal3]} position={"bottom"} ref={"modal3"} isDisabled={this.state.isDisabled}>
                <View style={{height:6,justifyContent:'center',alignItems:'center',marginTop:10}}>
                <View style={{backgroundColor:'grey',height:3,width:width/10}}></View>
                </View>
                    <Text style={[styles.text]}>Konfirmasi Pembayaran</Text>
                    <Text style={styles.textP} >Nomor Meter : <Text style={{fontWeight:'700'}}>{this.state.noMeter}</Text></Text>
                    <Text style={styles.textP} >Nama Pemilik : <Text style={{fontWeight:'700'}}>{this.state.nama}</Text></Text>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Text style={styles.textP}>Jenis Layanan : </Text>
                    <Text style={{fontWeight:'700',color:colorP}}>{this.state.value == 0 ? "Prabayar" : "Pasca Bayar"}</Text>
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
                    <Text style={styles.textP}>Jenis</Text>
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
                            <Text style={{color:'#fff',fontWeight:'bold',fontSize:16,letterSpacing:1.2}}>Bayar</Text>
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

export default connect(mapStateToProps)(Pln)

const styles = StyleSheet.create({
    wrapperInput:{
        marginVertical:15,paddingHorizontal:15
    },
    textinput:{
        color:'#505050',
        flex:1
    },
    picker:{
        backgroundColor:'tomato'
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
        marginVertical:5,
        fontWeight:'bold'
    },
    textP:{
        color:colorP,
        marginBottom:5
    },
    wrapperBox:{
        height:height/8,
        width:width/2.3,
        elevation:4,
        margin:5,
        backgroundColor:'#fff',
        padding:10,
        borderRadius:5,
        },
    errNotif:{
        backgroundColor:'rgba(231, 76, 60,0.2)',
        height:30,
        alignItems:'center',
        marginBottom:10,
        marginHorizontal:15,
        paddingHorizontal:10,
        flexDirection:'row',
        position:'relative',
        borderRadius:2,
        borderColor:'rgba(192, 57, 43,1.0)',
        borderWidth:1
        }
})