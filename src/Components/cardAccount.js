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
import Barcode from 'react-native-barcode-builder'


const color = '#39AFB5'
const List = (props) => {
    return(
        <TouchableOpacity style={[styles.List,props.s]} onPress={props.route}>
            <View style={{flexDirection:'row'}}>
            <Icon name={props.icon} size={20} color={props.color} />
            <Text  style={{fontSize:17,color:'#505050',fontFamily:'roboto',marginLeft:15}}>{props.title}</Text>
            </View>
           <Icon name={'ios-arrow-forward'} size={18} color='#bdc3c7' />

        </TouchableOpacity>
    )
}

const Label = (props) => {
    return(
        <View style={{backgroundColor:'#f9f9f7',paddingHorizontal:15,paddingVertical:3}}>
            <Text style={{fontWeight:'600',fontSize:14,fontFamily:'roboto'}}>{props.label}</Text>
        </View>
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
        const {logout,id,name,phone,status,image,handleCamera} = this.props
        const modal = this.props.ref
        
        return(
                <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{height:height/2.5}}>
                <ImageBackground
                // imageStyle={{borderBottomLeftRadius:25}}
                source={require('../Assets/Images/bg2.png')}
                style={{width:'100%',height:'100%'}} resizeMode='cover'
                style={styles.wrapperTop}>

                    {/* content name & phone */}
                    <View style={styles.wrapperText}>
                        <TouchableOpacity style={styles.wrapperImage} onPress={handleCamera}>
                            <Image source={{uri:`${image}`}} resizeMode='cover' style={styles.image}/>
                        </TouchableOpacity>
                        <Text style={styles.textName}>{name != '' ? name : 'user account'}</Text>
                        <Text style={styles.textPhone}>{phone != '' ? phone : '08xx-xxxx-xxxx'}</Text>
                    </View>  
                     {/*end of content name & phone  */}
                    
                    {status == "non-premium" ? 
                    <TouchableOpacity style={styles.upgrade}
                    activeOpacity={1}
                    onPress={() => {this.props.navigation.navigate('UpgradePremium')}}
                    >
                    <LinearGradient
                    style={{width:'100%',flexDirection:'row',borderRadius:5}}
                    colors={['cyan','#39afb5']}>
                    
                    <View
                    style={styles.iconUpgrade}
                    >
                        <Icon name='md-arrow-round-up' size={26} color='#fff'/>
                    </View>
                    <View style={styles.boxTextUpgrade}>
                        <Text style={styles.textUpgrade}>Upgrade Premium</Text>
                    </View>
                    </LinearGradient> 
                    </TouchableOpacity> 
                    :null}
                    <View style={{backgroundColor:'#fff',height:25,borderTopLeftRadius: 25,}}></View>                          
                </ImageBackground>
                
                </View>
                

                <LinearGradient
                    colors={['#fff','rgba(85, 239, 196,0.1)']}
                    style={styles.card}>
                    <TouchableOpacity 
                    onPress={() => this.refs.modal4.open()}
                    style={styles.contentCard}>
                        <Image source={{uri:'https://images.vexels.com/media/users/3/157862/isolated/preview/5fc76d9e8d748db3089a489cdd492d4b-barcode-scanning-icon-by-vexels.png'}} resizeMode='cover' style={styles.imageCard} />
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.contentCard,styles.contentCardCenter]} onPress={() => this.refs.modal3.open()}>
                        <Image source={{uri:'https://static.thenounproject.com/png/59262-200.png'}} resizeMode='cover' style={styles.imageCard} />
                    </TouchableOpacity>

                            <TouchableOpacity style={styles.contentCard}>
                                <Image source={require('../Assets/Icons/Multi_icon.png')}
                                resizeMode='center' style={{width:40,height:40}}/>
                            </TouchableOpacity>
                </LinearGradient>
                
                <View>
                    <Label label='Keamanan' />
                        <List title='Change Pin' icon={'md-key'} color={color} route={() => {this.props.navigation.navigate('ChangePin',{id})}} />
                    <Label label='Tentang Kita' />
                        <List title='Help' icon={'md-help-circle'} color={color} route={() => {this.props.navigation.navigate('Help')}} />
                        <List title='Terms & Conditions' icon={'ios-paper'} color={color} route={() => {this.props.navigation.navigate('TermsConditions')}} />
                        <List title='Privacy Police' icon={'ios-card'} color={color} route={() => {this.props.navigation.navigate('PrivacyPolice')}} />
                        <List title='Logout' icon={'md-log-out'} color={color} route={logout} s={{marginTop:5}} />
                 </View>

                  <Modal style={[styles.modal, styles.modal3]} position={"center"} ref={"modal3"} isDisabled={this.state.isDisabled}>
                    <Text style={styles.text}>Scan Code</Text>
                    <QRCode
                        value="gems"
                        logo={require('../Assets/Icons/logoscan.png')}
                        logoSize={30}
                        size={180}
                    />
                    <Text style={[styles.text,styles.bottomText]}>tarik ke bawah untuk menutup</Text>
                </Modal>

                <Modal style={[styles.modal, styles.modal4]} position={"center"} ref={"modal4"} isDisabled={this.state.isDisabled}>
                    <Text style={styles.text}>Scan Code</Text>
                     <Barcode
                        value='12234567890'
                        format="CODE128"
                        height={height/18}
                        width={1.8}
                        text='12234567890'/>
                </Modal>

                 </ScrollView>
               
                
        )
    }
}

export default withNavigation(CardAccounts) 

const styles = StyleSheet.create({
    wrapperTop:{
        flex:1,
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
    modal4: {
    height: height/3,
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
    },
    wrapperImage:{
        width:height/10,
        height:height/10,
        borderRadius:height/10/2,
        borderColor:'#636e72',
        borderWidth:2,
    },
    image:{
        width:'100%',
        height:'100%',
        borderRadius:height/10

    },
    wrapperText:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginTop:25
    },
    textName:{
        fontSize:22,
        fontWeight:'700',
        color:'#fff',
        marginVertical:5,
        fontFamily:'Lobster-Regular'
    },
    textPhone:{
        color:'#fff'
    },
    upgrade:{
        height:height/15,
        marginHorizontal:25,
        flexDirection:'row',
        elevation:5,
        borderRadius:5,
        marginBottom:-20,
    },
    iconUpgrade:{
        justifyContent:'center',
        alignItems:'center',
        width:50,
        borderRightWidth:2,
        borderRightColor:'#fff'
    },
    boxTextUpgrade:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    textUpgrade:{
        marginLeft:-20,
        fontSize:18,
        color:'#fff'
    },
    card:{
        flexDirection:'row',
        paddingVertical:20,
        backgroundColor:'#fff',
        height:height/6.5,
    },
    contentCard:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    contentCardCenter:{
        borderLeftColor:'grey',
        borderLeftWidth:1,
        borderRightColor:'grey',
        borderRightWidth:1
    },
    imageCard:{
        width:50,height:50
    }

})