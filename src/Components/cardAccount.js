import React from 'react'
import {View,Text,ImageBackground,Dimensions,Image,TouchableOpacity,StyleSheet,Button,ScrollView} from 'react-native'
import Modal from 'react-native-modalbox'
import Icon from 'react-native-vector-icons/Ionicons'
import {withNavigation} from "react-navigation"
import QRCode from 'react-native-qrcode-svg'

const color = '#39AFB5'
const List = (props) => {
    return(
        <TouchableOpacity style={[styles.List,props.s]} onPress={props.route}>
            <View style={{flexDirection:'row'}}>
            <Icon name={props.icon} size={20} color={props.color} />
            <Text  style={{fontSize:17,color:'#505050',fontFamily:'roboto',marginLeft:15}}>{props.title}</Text>
            </View>
            <Icon name={'ios-arrow-forward'} size={16} color={color} />

        </TouchableOpacity>
    )
}
const {height,width} = Dimensions.get('window')
class CardAccounts extends React.Component{
    constructor() {
    super();
    this.state = {
        isOpen: false,
        isDisabled: false,
        swipeToClose: true,
        sliderValue: 0.3
        };
    }

    onClose() {
    console.log('Modal just closed');
    }

    onOpen() {
    console.log('Modal just opened');
    }

    onClosingState(state) {
    console.log('the open/close of the swipeToClose just changed');
    }
    render(){
        const logout = this.props.logout
        const nama = this.props.nama
        const kontak = this.props.kontak
        const email = this.props.kontak
        const status = this.props.status
        const modal = this.props.ref
        return(
            <View style={{backgroundColor:'#f9f9f7'}}>
                <View style={{padding:15,zIndex:-1}}>
                    {/* <ImageBackground
                    source={require('../Assets/Images/Card_bg.png')}
                    style={{width:'100%',height:height/3.3}}
                    imageStyle={{borderRadius:10}}
                    >
                    <View style={{flexDirection:'row',paddingHorizontal:20,paddingVertical:15}}>
                        <View style={{flex:1}}>
                            <Text style={{fontWeight:'bold',color:'#fff',letterSpacing:1}}>GEMS</Text>
                        </View>
                        {status == 0 ? 
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('UpgradePremium')}>
                            <Text style={{fontWeight:'bold',color:'#fff',letterSpacing:1}}>UPGRADE TO PREMIUM</Text>
                        </TouchableOpacity>
                        : null
                        }
                        
                    </View>

                    <View style={{flexDirection:'row',paddingHorizontal:20,paddingVertical:10}} >
                        <TouchableOpacity style={{width:width/4,height:height/9,justifyContent:'center',alignItems:'center',marginRight:5}} onPress={() => this.refs.modal3.open()
                        }>
                        <QRCode
                        value="jancook"
                        logo={require('../Assets/Icons/logoscan.png')}
                        logoSize={24}
                        size={80}
                        />
                        </TouchableOpacity>
                        {kontak != '' ? 
                        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                            <Text style={{color:'#fff',letterSpacing:1}}>{nama}</Text>
                            <Text style={{color:'#fff',letterSpacing:1,fontSize:22}}>{kontak}</Text>
                        </View>
                        : 
                        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                            <Text style={{color:'#fff',letterSpacing:1}}>User</Text>
                            <Text style={{color:'#fff',letterSpacing:1,fontSize:22}}>xxxx-xxxx-xxxx</Text>
                        </View>
                        }
                    </View>

                    <View style={{flexDirection:'row',paddingHorizontal:20,paddingVertical:10}}>
                        <View style={{flex:1}}>
                        {status == 0 ? 
                            <Text style={{fontWeight:'bold',color:'#fff',letterSpacing:1}}>Non Premium</Text>
                            : <Text style={{fontWeight:'bold',color:'#fff',letterSpacing:1}}>Premium</Text>
                            }
                        </View>
                        <View>
                        </View>
                    </View>
                    
                    </ImageBackground> */}

                    <View style={{height:height/3.3,backgroundColor:'#fff',position:'relative',borderRadius:10,elevation:2}}>
                        <View style={{height:'40%',backgroundColor:'cyan',borderTopLeftRadius:10,borderTopRightRadius:10}}>
                        <Text style={{textAlign:'center',marginTop:20}}> GEMS</Text>
                        </View>
                        <View style={{height:'50%',marginTop:-50,flexDirection:'row',paddingHorizontal:10}}>
                            <View style={{height:100,backgroundColor:'#fff',width:100,borderRadius:100/2,borderWidth:5,borderColor:'#fff'}}>
                                <Image source={{uri:'https://cdn1.iconfinder.com/data/icons/technology-devices-2/100/Profile-512.png'}} style={{width:'100%',height:'100%',borderRadius:100/2}} />
                            </View>
                            <View style={{flex:1,margin:20,justifyContent:'center'}}>
                                <Text style={{fontSize:17,fontWeight:'bold',marginTop:45}}>Nama cccccc ccvvbb</Text>
                                <Text>xxxx-xxxx-xxxx</Text>
                            </View>
                        </View>
                        <View style={{flex:1,marginTop:10,flexDirection:'row',borderRadius:10,padding:5}}>
                            <View style={{flex:1,padding:5,justifyContent:'center',alignItems:'center',padding: 5}}>
                                <Text>Upgrade Premium</Text>
                            </View>
                            <View style={{flex:1,borderLeftWidth: 1,borderLeftColor:'#000',justifyContent: 'center',alignItems: 'center',}}>
                                <Text>Meber since</Text>
                                <Text>09-09-2019</Text>
                            </View>
                            <View style={{flex:1,marginTop:-height/14,alignItems:'center',justifyContent:'flex-end',paddingBottom: 10,}}>
                                <TouchableOpacity onPress={() => this.refs.modal3.open()
                            }>
                            <QRCode
                                value="jancook"
                                logo={require('../Assets/Icons/logoscan.png')}
                                logoSize={14}
                                size={width/7}
                                />
                            </TouchableOpacity>
                            
                            </View>
                        </View>
                    </View>
                </View>
                <ScrollView>
                    <List title='Multi Channel' icon={'md-watch'} color={color} />
                    <List title='Change Pin' icon={'md-key'} color={color} route={() => {this.props.navigation.navigate('NewPin')}} />
                    <List title='Help' icon={'md-help-circle'} color={color} route={() => {this.props.navigation.navigate('Help')}} />
                    <List title='Terms & Conditions' icon={'ios-paper'} color={color} route={() => {this.props.navigation.navigate('TermsConditions')}} />
                    <List title='Privacy Police' icon={'ios-card'} color={color} route={() => {this.props.navigation.navigate('PrivacyPolice')}} />
                    <List title='Logout' icon={'md-log-out'} color={color} route={logout} s={{marginTop:5}} />
                </ScrollView>
                <Modal style={[styles.modal, styles.modal3]} position={"center"} ref={"modal3"} isDisabled={this.state.isDisabled}>
                    <Text style={styles.text}>Scan Code</Text>
                    <QRCode
                        value="jancook"
                        logo={require('../Assets/Icons/logoscan.png')}
                        logoSize={30}
                        size={180}
                    />
                    <Text style={[styles.text,styles.bottomText]}>tarik ke bawah untuk menutup</Text>
                </Modal>
            </View>
        )
    }
}

export default withNavigation(CardAccounts) 

const styles = StyleSheet.create({
    modal: {
    justifyContent: 'center',
    alignItems: 'center'
    },
    modal3: {
    height: height/1.5,
    width: 300
    },
    text: {
    color: '#636e72',
    fontSize: 16,
    marginBottom:15
    },
    bottomText: {
        marginTop:25
    },
    List:{
        paddingHorizontal:25,
        paddingVertical:15,
        backgroundColor:'#fff',
        flexDirection:'row',
        justifyContent:'space-between',
        borderBottomColor:'#f9f9f7',
        borderBottomWidth:1
    }

})