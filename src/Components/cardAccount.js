import React from 'react'
import {
    View,
    Text,
    ImageBackground,
    Dimensions,
    Image,
    TouchableOpacity,
    StyleSheet,
    Button,
    ScrollView
} from 'react-native'
import Modal from 'react-native-modalbox'
import Icon from 'react-native-vector-icons/Ionicons'
import {withNavigation} from "react-navigation"
import QRCode from 'react-native-qrcode-svg'
import LinearGradient from 'react-native-linear-gradient'

const color = '#39AFB5'
const List = (props) => {
    return(
        <TouchableOpacity style={[styles.List,props.s]} onPress={props.route}>
            <View style={{flexDirection:'row'}}>
            <Icon name={props.icon} size={20} color={props.color} />
            <Text  style={{fontSize:17,color:'#505050',fontFamily:'roboto',marginLeft:15}}>{props.title}</Text>
            </View>
            {/* <Icon name={'ios-arrow-forward'} size={16} color={color} /> */}

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
        const name = this.props.name
        const phone = this.props.phone
        const status = this.props.status
        const modal = this.props.ref
        
        return(
                <ScrollView>
                <View style={{height:height/2.6}}>
                <ImageBackground
                // imageStyle={{borderBottomLeftRadius:25}}
                source={{uri:'https://www.spsgrupp.ee/wp-content/uploads/2016/08/tasut34.jpg'}}
                style={{width:'100%',height:'100%'}} resizeMode='cover'
                style={styles.wrapperTop}>
                    <View style={{height:height/13,alignItems:'center',justifyContent:'space-between',paddingHorizontal:20,flexDirection:'row'}}>
                        <Text style={{fontSize:18,color:'#fff',fontWeight:'700'}}>Profile</Text>
                        <View style={{flexDirection:'row'}}>
                            <Icon name='ios-brush' size={24} color='#fff' style={{marginRight:15
                            }} />
                            <Icon name='md-notifications' size={26} color='#fff' />
                        </View>
                        
                    </View>                          
                </ImageBackground>
                

                
                </View>
                <LinearGradient style={{height:height/13,backgroundColor:'#fff',margin:20,flexDirection:'row',elevation:5,borderRadius:5}}
                colors={['cyan','#0097e6']}>
                    <View
                    style={{justifyContent:'center',alignItems:'center',width:50,borderRightWidth:2,borderRightColor:'#fff'}}
                    >
                        <Icon name='md-arrow-round-up' size={26} color='#fff'/>
                    </View>
                    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <Text style={{marginLeft:-50,fontSize:18,color:'#fff'}}>Upgrade Premium</Text>
                    </View>
                </LinearGradient>
                
                <View>
                    <List title='Multi Channel' icon={'md-watch'} color={color} />
                     <List title='Change Pin' icon={'md-key'} color={color} route={() => {this.props.navigation.navigate('ChangePin')}} />
                    <List title='Help' icon={'md-help-circle'} color={color} route={() => {this.props.navigation.navigate('Help')}} />
                     <List title='Terms & Conditions' icon={'ios-paper'} color={color} route={() => {this.props.navigation.navigate('TermsConditions')}} />
                     <List title='Privacy Police' icon={'ios-card'} color={color} route={() => {this.props.navigation.navigate('PrivacyPolice')}} />
                     <List title='Logout' icon={'md-log-out'} color={color} route={logout} s={{marginTop:5}} />
                 </View>
                 </ScrollView>
                // <Modal style={[styles.modal, styles.modal3]} position={"center"} ref={"modal3"} isDisabled={this.state.isDisabled}>
                //     <Text style={styles.text}>Scan Code</Text>
                //     <QRCode
                //         value="jancook"
                //         logo={require('../Assets/Icons/logoscan.png')}
                //         logoSize={30}
                //         size={180}
                //     />
                //     <Text style={[styles.text,styles.bottomText]}>tarik ke bawah untuk menutup</Text>
                // </Modal>
                
        )
    }
}

export default withNavigation(CardAccounts) 

const styles = StyleSheet.create({
    wrapperTop:{
        height:height/3.8,
        position:'relative'
    },
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


// <View style={{height:height/3.3,backgroundColor:'#fff',position:'relative',borderRadius:10,elevation:2}}>
//                         <View style={{height:'45%',backgroundColor:'#39afb5',borderTopLeftRadius:10,borderTopRightRadius:10}}>
//                         <ImageBackground
//                     source={require('../Assets/Images/atas-43.png')}
//                     style={{width:'100%',alignItems: 'flex-end',height:undefined,flex:1,paddingHorizontal:15}}
//                     imageStyle={{borderRadius:10}}
//                     >
//                             <View style={{width:75,height:50}}>
//                                 <Image source={require('../Assets/Icons/Logo_gems.png')} style={{flex:1,width:undefined,height:undefined}} resizeMode='contain' />
//                             </View>
//                             </ImageBackground>
//                         </View>
//                         <View style={{height:'50%',marginTop:-50,flexDirection:'row',paddingHorizontal:10}}>
//                             <View style={{height:100,backgroundColor:'#fff',width:100,borderRadius:100/2,borderWidth:5,borderColor:'#fff'}}>
//                                 <Image source={{uri:'https://cdn1.iconfinder.com/data/icons/technology-devices-2/100/Profile-512.png'}} style={{width:'100%',height:'100%',borderRadius:100/2}} />
//                             </View>
//                             <View style={{flex:1,margin:20,justifyContent:'center'}}>
//                             {name != '' ?
//                                 <>
//                                 <Text style={{fontSize:17,fontWeight:'bold',marginTop:40}}>{name}</Text>
//                                 <Text>{phone}</Text>
//                                 </>
//                                 : 
//                                 <>                           
//                                 <Text style={{fontSize:17,fontWeight:'bold',marginTop:40}}>Account</Text>
//                                 <Text>xxxx-xxxx-xxxx</Text>
//                                 </>
//                             }
//                             </View>
//                         </View>
//                         <View style={{flex:1,marginTop:10,flexDirection:'row',borderRadius:10,padding:5}}>
//                             {status == 'non-premium' ?
//                             <TouchableOpacity 
//                             onPress={() => this.props.navigation.navigate('UpgradePremium')}
//                             style={{flex:1,padding:5,justifyContent:'center',alignItems:'center',padding: 5}}>
//                                 <Text>Upgrade Premium</Text>
//                             </TouchableOpacity>
//                             :
//                             <View  style={{flex:1,padding:5,justifyContent:'center',alignItems:'flex-start',padding: 5}}>
//                             <Text>account type</Text>
//                             <Text>PREMIUM</Text>
//                             </View>
//                             }
//                             <View style={{flex:1,borderLeftWidth: 1,borderLeftColor:'#000',justifyContent: 'center',alignItems: 'flex-start',paddingLeft:10}}>
//                                 <Text>Member since</Text>
//                                 <Text>09-09-2019</Text>
//                             </View>
//                             <View style={{flex:1,marginTop:-height/14,alignItems:'center',justifyContent:'flex-end',paddingBottom: 10,}}>
//                                 <TouchableOpacity onPress={() => this.refs.modal3.open()
//                             }>
//                             <QRCode
//                                 value="jancook"
//                                 logo={require('../Assets/Icons/logoscan.png')}
//                                 logoSize={14}
//                                 size={width/7}
//                                 />
//                             </TouchableOpacity>
                            
//                             </View>
//                         </View>
//                     </View>


{/* <View style={{height:height/3.5,marginTop:-height/6.5,padding:10,paddingHorizontal:20}}>
                    <View style={{backgroundColor:'#fff',flex:1,elevation:15,borderRadius:5,paddingHorizontal:10}}>
                        
                        <View style={{flex:2,paddingHorizontal:15,flexDirection:'row',alignItems
                        :'center'}}>
                            <View style={{flex:1}}>
                            <Text style={{fontSize:19,color:'#353b48',fontWeight:'700',marginBottom:5}}>Hinata Hyuga</Text>
                            <Text style={{color:'#39afb5'}}>08788984988</Text>
                        </View>
                        <View style={{flex:1,justifyContent:'center',alignItems:'flex-end'}}>
                        <View style={{width:height/10,height:height/10}}>
                            <Image source={{uri:'https://pm1.narvii.com/6290/8d7fb5288992054eb8b04c4d1d07cf1b9f31b01c_hq.jpg'}} style={{width:undefined,height:undefined,flex:1,borderRadius:height/10/2}}/>
                        </View>
                        </View>
                        </View>
                        <View style={{flex:1,flexDirection:'row',borderTopWidth:1,borderTopColor:'#ecf0f1',paddingVertical:10}}>
                            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                            <Image source={{uri:'https://images.vexels.com/media/users/3/157862/isolated/preview/5fc76d9e8d748db3089a489cdd492d4b-barcode-scanning-icon-by-vexels.png'}} resizeMode='cover' style={{width:40,height:40}} />
                            </View>
                            <View style={{flex:1, justifyContent:'center',alignItems:'center',borderLeftColor:'#ecf0f1',borderLeftWidth:1,borderRightColor:'#ecf0f1',borderRightWidth:1}}>
                                <Image source={{uri:'https://static.thenounproject.com/png/59262-200.png'}} resizeMode='cover' style={{width:40,height:40}} />
                            </View>
                            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                <Icon name='md-watch' size={30} />
                            </View>
                        </View>
                    </View>
                </View> */}