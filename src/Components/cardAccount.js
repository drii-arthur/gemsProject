import React from 'react'
import {View,Text,ImageBackground,Dimensions,Image,TouchableOpacity,StyleSheet,Button,ScrollView} from 'react-native'
import Modal from 'react-native-modalbox'
import Icon from 'react-native-vector-icons/Ionicons'
import {withNavigation} from "react-navigation"
import QRCode from 'react-native-qrcode-svg'

const List = (props) => {
    return(
        <TouchableOpacity style={{paddingHorizontal:15,paddingVertical:15,backgroundColor:'#fff',flexDirection:'row',justifyContent:'space-between',borderBottomColor:'#ecf0f1',borderBottomWidth:1}} onPress={props.route}>
            <Text  style={{fontSize:17,color:'#505050',fontFamily:'roboto'}}>{props.title}</Text>
            <Icon name={'ios-arrow-forward'} size={16} color='grey' />

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
                <View style={{padding:15}}>
                    <ImageBackground
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
                        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                            <Text style={{color:'#fff',letterSpacing:1}}>{nama}</Text>
                            <Text style={{color:'#fff',letterSpacing:1,fontSize:22}}>{kontak}</Text>
                        </View>
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
                    
                    </ImageBackground>
                </View>
                <ScrollView>
                    <List title='Payment Cards' />
                    <List title='Change Pin' route={() => {this.props.navigation.navigate('NewPin')}} />
                    <List title='Help' route={() => {this.props.navigation.navigate('Help')}} />
                    <List title='Terms & Conditions' route={() => {this.props.navigation.navigate('TermsConditions')}} />
                    <List title='Privacy Police' route={() => {this.props.navigation.navigate('PrivacyPolice')}} />
                    <List title='Logout' route={logout} />
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
    }

})