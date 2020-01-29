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
            check:'',
            showCard:false,
            price:'',
            desc:''
        }
    }

    render(){
        const data = this.props.data
        const prabayar = this.props.prabayar
        const press = this.props.press
        return(
            <View style={{flex:1}}>
            {data.length >= 4 && prabayar == true ?
             <FlatList
            style={{alignSelf:'center',margin:5}}
            data={data}
            numColumns={2}
            keyExtractor={(item,index) => index}
            onEndReachedThreshold={0.2}
            renderItem={({item,index}) => {
                return(
                    item.price >= 12000 ?
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

                     {/* <View style={{flex:1}}>
                        <Text style={{fontSize:10,color:'tomato',alignSelf:'flex-end'}}>{item.desc}</Text>
                    </View> */}
                    
                    
                    </TouchableOpacity>
                    :null
                )
               
            }}
            /> 
            : null }
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