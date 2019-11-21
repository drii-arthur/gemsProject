import React from 'react'
import {View,Text,StatusBar,TextInput,StyleSheet,TouchableOpacity,Image,ScrollView} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Header from '../Components/header'
import CardSaldo from '../Components/cardSaldoTopup'

class TopUpAtm extends React.Component{
    render(){
        const item = this.props.navigation.getParam('item')
        const title = item.name
        return(
            <View style={{flex:1}}>
            <StatusBar backgroundColor='#39AFB5' transculent={false} barStyle="dark-content" />
                <Header title={title} />

                {/* main content */}
                <View style={{flex:1}}>
                    <CardSaldo />
                    {/* start to bank transfer content */}
                    <View>
                    {/* start payment method */}
                        <View style={styles.paymenMethod}>
                            <Text style={{color:'#505050'}}>Payment Method</Text>
                        </View>
                        <View style={{flexDirection:'row',height:50,alignItems:'center',paddingHorizontal:20}}>
                            <View style={{height:40,justifyContent:'center',alignItems:'center',width:40,borderRadius:40/2,marginRight:10,borderColor:'#f1f2f6',borderWidth:1}}>
                                <Image source={{uri:`${item.avatar}`}} style={{width:'70%',height:'70%'}} />
                            </View>
                            <View style={{flex:1}}>
                                <Text style={{fontSize:16}}>Transfer Bank</Text>
                            </View>
                            
                                <TouchableOpacity onPress={() => {this.props.navigation.goBack()}}>
                                    <Text style={{color:'#39AFB5',fontSize:16,letterSpacing:1.3}}>Change   <Icon name={'ios-arrow-forward'} size={14}/></Text>
                                </TouchableOpacity>
                        </View>
                    {/* end of payment method */}
                    <View style={{marginHorizontal:20,marginVertical:10}}>
                        <View style={{alignItems:'center',justifyContent:'center',backgroundColor:'#f9f9f7',paddingVertical:15,marginBottom:10}}>
                            <Text style={{fontSize:15,color:'#505050'}}>Virtual Account Number</Text>
                            <Text style={{color:'#39AFB5',fontWeight:'700',fontSize:18,letterSpacing:1.2,marginTop:7}}>08533 087870746597</Text>
                        </View>

                        <View style={{backgroundColor:'#f9f9f7'}}>
                            <View style={{backgroundColor:'#f1f2f6',padding:5}}>
                                <Text style={{fontSize:15,color:'#505050'}}>Instruksi</Text>
                            </View>
                            <ScrollView style={{padding:5,paddingHorizontal:10}}>
                                <Text style={{color:'#505050',fontSize:13,marginBottom:13}}><Icon name={'ios-alert'} size={10} color='#39AFB5' />   Masukan Kartu Atm dan PIN BCA Anda</Text>
                                <Text style={{color:'#505050',fontSize:13,marginBottom:13}}><Icon name={'ios-alert'} size={10} color='#39AFB5' />   Pilih Menu Transaksi Lainnya</Text>
                                <Text style={{color:'#505050',fontSize:13,marginBottom:13}}><Icon name={'ios-alert'} size={10} color='#39AFB5' />   Pilih Menu Transfer</Text>
                                <Text style={{color:'#505050',fontSize:13,marginBottom:13}}><Icon name={'ios-alert'} size={10} color='#39AFB5' />   Pilih Menu Ke Rek BCA Virtual Account</Text>
                                <Text style={{color:'#505050',fontSize:13,marginBottom:13}}><Icon name={'ios-alert'} size={10} color='#39AFB5' />   Masukan Nominal Top Up</Text>
                                <Text style={{color:'#505050',fontSize:13,marginBottom:13}}><Icon name={'ios-alert'} size={10} color='#39AFB5' />   Ikuti Intruksi dan Selesai</Text>
                            </ScrollView>
                        </View>
                    </View>
                    </View>
                    {/* end of bank transfer content */}
                    </View>
            </View>
        )
    }
}

export default TopUpAtm

const styles = StyleSheet.create({
    paymenMethod: {
        paddingHorizontal:20,
        backgroundColor:'#f9f9f7',
        marginVertical:10
    }
})