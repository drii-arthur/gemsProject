import React,{Component} from 'react'
import {View,Text,TouchableOpacity,FlatList,StyleSheet,Dimensions,Image} from 'react-native'
import Modal from 'react-native-modalbox'
import LinearGradient from 'react-native-linear-gradient'
import PayConfirm from '../Components/payConfirm'

const color = '#39afb5'
const colorP = '#485460'
const {width,height} = Dimensions.get('window')
class CardPulsa extends Component{
    constructor(){
        super()
        this.state = {
            // phone:'',
            // isOpen: false,
            // isDisabled: false,
            // swipeToClose: true,
            // sliderValue: 0.3,
            data:[
                {
                id:1,
                jumlah:'15',
                price:15000
                },
                {
                id:2,
                jumlah:'20',
                price:15000
                },
                {
                id:3,
                jumlah:'25',
                price:15000
                },
                {
                id:4,
                jumlah:'30',
                price:15000
                },
                {
                id:5,
                jumlah:'40',
                price:15000
                },
                {
                id:6,
                jumlah:'50',
                price:15000
                },
                {
                id:7,
                jumlah:'75',
                price:15000
                },
                {
                id:8,
                jumlah:'100',
                price:15000
                },
                {
                id:9,
                jumlah:'150',
                price:15000
                },
                
            ],
            check:'',
            showCard:false,
        }
    }

    render(){
        const data = this.props.pulsa
        const prabayar = this.props.prabayar
        const press = this.props.press
        let check = this.props.check
        let contacts = this.props.getContact
        return(
            <View style={{flex:1}}>
            {check.length >= 4 && prabayar == true ?
            <FlatList
            style={{alignSelf:'center'}}
            data={data}
            numColumns={2}
            keyExtractor={(item) => item.id}
            onEndReachedThreshold={0.2}
            renderItem={({item}) => {
                return(
                    <TouchableOpacity onPress={press} style={styles.containerCard}>
                    <View style={{justifyContent:'space-between',flexDirection:'row',alignItems:'center'}}>
                    <Text style={styles.textJumlah}>{item.description} </Text>
                    {
                    check.substring(0,4) == '0813' ||
                    check.substring(0,4) == '0812' ||  
                    check.substring(0,4) == '0811' ||    
                    check.substring(0,4) == '0822' ||    
                    check.substring(0,4) == '0853' ||    
                    check.substring(0,4) == '0852' ||    
                    check.substring(0,4) == '0823' ?
                    (<Image style={{height:30,width:60}} source={{uri:'https://1.bp.blogspot.com/-C64gdRuVaJM/XW4zTQRSZgI/AAAAAAAABAg/mrYpbD-rYkkmIzv9PZRaK99pDvhpueCLwCLcBGAs/s400/Logo%2BTelkomsel%2BTerbaru.png'}} />) : null }
                    {
                    check.substring(0,4) == '0857' ||
                    check.substring(0,4) == '0855' ||
                    check.substring(0,4) == '0858' ||
                    check.substring(0,4) == '0814' ||
                    check.substring(0,4) == '0815' ||
                    check.substring(0,4) == '0816' ||
                    check.substring(0,4) == '0856' ?
                    (<Image style={{height:16,width:60}} source={{uri:'https://upload.wikimedia.org/wikipedia/id/thumb/3/3f/Indosat_Logo.svg/1280px-Indosat_Logo.svg.png'}} />) : null }
                    {
                    check.substring(0,4) == '0877' ||  
                    check.substring(0,4) == '0878' ||  
                    check.substring(0,4) == '0859' ||  
                    check.substring(0,4) == '0818' ||  
                    check.substring(0,4) == '0819' ||  
                    check.substring(0,4) == '0817'  ?
                    (<Image style={{height:30,width:30}} source={{uri:'https://upload.wikimedia.org/wikipedia/id/thumb/b/ba/XL_Axiata.svg/1076px-XL_Axiata.svg.png'}} />) : null }
                    
                    </View>
                        <Text style={{fontSize:10,color:'#535c68'}}>Rp</Text>
                    <Text style={styles.textPrice}>{item.price}</Text>
                    
                    </TouchableOpacity>
                ) 
            }}
            />
         : null }

         {contacts !== undefined && check == '' ?
            <FlatList
            showsVerticalScrollIndicator={false}
            style={{alignSelf:'center'}}
            data={this.state.data}
            numColumns={2}
            keyExtractor={(item) => item.id}
            onEndReachedThreshold={0.2}
            renderItem={({item}) => {
                return(
                    <TouchableOpacity onPress={press} style={styles.containerCard}>
                    <View style={{justifyContent:'space-between',flexDirection:'row',alignItems:'center'}}>
                    <Text style={styles.textJumlah}>{item.jumlah} <Text style={{fontSize:10,marginBottom:50}}>K</Text></Text>
                    {
                    contacts.substring(0,4) == '0813' || 
                    contacts.substring(0,4) == '0812' ||   
                    contacts.substring(0,4) == '0811' ||    
                    contacts.substring(0,4) == '0822' ||    
                    contacts.substring(0,4) == '0853' ||    
                    contacts.substring(0,4) == '0852' ?
                    (<Image style={{height:30,width:60}} source={{uri:'https://1.bp.blogspot.com/-C64gdRuVaJM/XW4zTQRSZgI/AAAAAAAABAg/mrYpbD-rYkkmIzv9PZRaK99pDvhpueCLwCLcBGAs/s400/Logo%2BTelkomsel%2BTerbaru.png'}} />) : null }
                    {
                    contacts.substring(0,4) == '0857' ||
                    contacts.substring(0,4) == '0855' ||
                    contacts.substring(0,4) == '0858' ||
                    contacts.substring(0,4) == '0814' ||
                    contacts.substring(0,4) == '0815' ||
                    contacts.substring(0,4) == '0816' ||
                    contacts.substring(0,4) == '0856' ?
                    (<Image style={{height:16,width:60}} source={{uri:'https://upload.wikimedia.org/wikipedia/id/thumb/3/3f/Indosat_Logo.svg/1280px-Indosat_Logo.svg.png'}} />) : null }
                    {
                    contacts.substring(0,4) == '0877' ||   
                    contacts.substring(0,4) == '0878' ||  
                    contacts.substring(0,4) == '0859' ||  
                    contacts.substring(0,4) == '0818' ||
                    contacts.substring(0,4) == '0817' ?
                    (<Image style={{height:30,width:30}} source={{uri:'https://upload.wikimedia.org/wikipedia/id/thumb/b/ba/XL_Axiata.svg/1076px-XL_Axiata.svg.png'}} />) : null }
                    
                    </View>
                        <Text style={{fontSize:10,color:'#535c68'}}>Rp</Text>
                    <Text style={styles.textPrice}>{item.price}</Text>
                    
                    </TouchableOpacity>
                ) 
            }}
            />
         : null }  
         {/* <PayConfirm  /> */}
            </View>
        )
        
    }
}

export default CardPulsa

const styles = StyleSheet.create({
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
        fontSize:11,
        fontWeight:'700',
        color:'#39afb5'
    },
    textPrice:{
        color:'#535c68',
        marginLeft:14,
        marginTop:-15
    },
})