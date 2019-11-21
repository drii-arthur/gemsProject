import React from 'react'
import {View,Text,StyleSheet,Dimensions,StatusBar,TouchableOpacity,Image} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Header from '../Components/header'
import Modal from 'react-native-modalbox'
import LinearGradient from 'react-native-linear-gradient'
import ImagePicker from 'react-native-image-picker'
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button'

const urlImage = `https://i.pinimg.com/564x/34/63/c7/3463c7f45f2a0e950a208f2d3420335a.jpg`
var radio_props = [
  {label: 'KTP ', value: 0 },
  {label: 'Paspor', value: 1 }
]
const {height,width} = Dimensions.get('window')
class UpgradePremium extends React.Component{
    constructor(props){
        super()
        this.state = {
        isOpen: false,
        isDisabled: false,
        swipeToClose: true,
        sliderValue: 0.3,
        foto:urlImage,
        isSave:false,
        value: 0
        };

    }

    _handleCamera = () => {
        const options = {
            noData : true
        }
        ImagePicker.launchCamera(options, (response) => {
            console.log('Response = ', response);
            if(response.uri){
                this.setState({
                    foto:response.uri,
                    isSave:true
                })
            }
        })
    }
    

    
    render(){
        const {foto} = this.state
        const modal = this.props.ref
        return(
            <View style={{flex:1}}>
           <StatusBar backgroundColor='#198f94' barStyle="light-content" />
                <Header title='Upgrade Member' />
                <View style={{backgroundColor:'#f9f9f7',paddingHorizontal:20,paddingVertical:7,marginTop:20,flexDirection:'row',justifyContent:'space-between'}}>
                        <Text style={styles.text}>
                            Keuntungan Anggota Premium
                        </Text>
                        <Icon name={'ios-alert'} size={20} color='tomato' onPress={() => this.refs.modal3.open()} />
                    </View> 
                <View style={styles.wrapperContain}>   
                    <View style={{width:'70%',}}>
                        <Text style={styles.textTop}>
                            Upgrade Keanggotaanmu Dengan Mudah
                        </Text>
                    </View>
                    {foto && (<Image source={{uri:foto}} style={styles.image} />)}

                    {this.state.isSave == true ?
                    <TouchableOpacity  onPress={() => {this._handleCamera()}}>
                        <Text style={styles.textReply}>Ulang Lagi</Text>
                    </TouchableOpacity>
                    : null }
                    
                    {this.state.isSave == false ? 
                        <Text style={styles.textBottom}>
                        Persiapkan Kartu Identitas Anda
                        KTP untuk WNI,Paspor untuk WNA
                    </Text>
                    :
                    <RadioForm
                        radio_props={radio_props}
                        initial={0}
                        style={{width:170,justifyContent:'space-between'}}
                        buttonSize={12}
                        buttonInnerColor='red'
                        selectedButtonColor={'#198f94'}
                        formHorizontal={true}
                        labelHorizontal={true}
                        onPress={(value) => {this.setState({value:value})}}
                        animation={true}
                        buttonColor={'#198f94'}
                    />
                    }
                    
                    
                    {this.state.isSave == false ? 
                         <TouchableOpacity 
                            style={{width:'50%',alignItems:'center',borderRadius:25,elevation:2,marginTop:100}} 
                            onPress={() => {this._handleCamera()}}>
                        <LinearGradient colors={[ '#39AFB5','#1e90ff']} style={{paddingVertical:10,width:'100%',alignItems:'center',borderRadius:25}}>
                            <Text style={{color:'#fff',fontWeight:'bold',fontSize:16,letterSpacing:1.2}}>Mulai</Text>
                        </LinearGradient>
                        </TouchableOpacity>
                    : 
                    <TouchableOpacity 
                            style={{width:'50%',alignItems:'center',borderRadius:25,elevation:2,marginTop:100}} 
                            onPress={() => {this._handleCamera()}}>
                        <LinearGradient colors={[ '#39AFB5','#1e90ff']} style={{paddingVertical:10,width:'100%',alignItems:'center',borderRadius:25}}>
                            <Text style={{color:'#fff',fontWeight:'bold',fontSize:16,letterSpacing:1.2}}>Save</Text>
                        </LinearGradient>
                        </TouchableOpacity>
                    }

                        
                </View>
                <Modal style={[styles.modal, styles.modal3]} position={"center"} ref={"modal3"} isDisabled={this.state.isDisabled}>
                    <Text style={[styles.text,styles.bottomText]}>tarik ke bawah untuk menutup</Text>
                </Modal>
            </View>
        )
    }
}

export default UpgradePremium

const styles = StyleSheet.create({
    wrapperContain: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    image: {
        width:270,
        height:170,
        marginTop:20
    },
    textTop: {
        fontWeight:'700',
        fontSize:16,
        color: '#485460',
        textAlign:'center'
    },
    textBottom: {
        fontSize:14,
        color: '#485460',
        width:'70%',
        textAlign:'center',
        marginTop:10
    },
    text:{
        fontSize:13,
        color:'#39AFB5',
        
    },
    modal: {
    justifyContent: 'center',
    alignItems: 'center'
    },
    modal3: {
    height: height/1.5,
    width: 300
    },
    textReply: {
        color:'#39AFB5',
        fontSize:15,
        marginVertical:7
    }
})