// import React from 'react'
// import {View,Text,StatusBar,TextInput,StyleSheet,TouchableOpacity} from 'react-native'
// import LinearGradient from 'react-native-linear-gradient'
// import Icon from 'react-native-vector-icons/Ionicons'
// import Header from '../Components/header'
// import CardSaldo from '../Components/cardSaldoTopup'

// class Debit extends React.Component{
//     render(){
//         return(
//             <View style={{flex:1,marginTop:25,}}>
//             <StatusBar backgroundColor='#39AFB5' transculent={false} barStyle="dark-content" />
//                 <Header title='Debit  Card' />

//                 {/* main content */}
//                 <View style={{flex:1}}>
//                     <CardSaldo />
//                     {/* start to input debit card */}
//                     <View style={styles.wrapperInput}>
//                         <TextInput
//                             placeholder='Masukan Nominal'
//                             style={styles.nominalInput}
//                             keyboardType='numeric'
//                             />
//                         <Icon name={"md-cash"} size={18} color='#808e9b' style={styles.iconInput} />
//                     </View>

//                         <View style={styles.wrapperInput}>
//                         <TextInput
//                             placeholder='Masukan Nomor Kartu'
//                             style={styles.nominalInput}
//                             keyboardType='numeric'
//                             />
//                         <Icon name={"ios-card"} size={18} color='#808e9b' style={styles.iconInput} />
//                         </View>

//                         <View style={{flexDirection:'row'}}>
//                             <View style={[styles.wrapperInput,{flex:1}]}>
//                         <TextInput
//                             placeholder='Expire date'
//                             style={styles.nominalInput}
//                             keyboardType='numeric'
//                             />
//                         <Icon name={"ios-calendar"} size={18} color='#808e9b' style={styles.iconInput} />
//                         </View>

//                         <View style={[styles.wrapperInput,{flex:1,}]}>
//                         <TextInput
//                             placeholder='CVV'
//                             style={[styles.nominalInput,{paddingLeft:10}]}
//                             keyboardType='numeric'
//                             />
//                         </View>
//                         </View>

                        
//                 </View>
//                     <View style={{justifyContent:'center',alignItems:'center',height:50,marginBottom:20,}}>
//                         <LinearGradient colors={[ '#39AFB5','#1e90ff']} style={{paddingVertical:10,width:'80%',alignItems:'center',borderRadius:25,elevation:2}}>
//                         <TouchableOpacity>
//                             <Text style={{color:'#fff',fontWeight:'bold',fontSize:16,letterSpacing:1.2}}>Konfirmasi</Text>
//                         </TouchableOpacity>
//                         </LinearGradient>
//                         </View>
//             </View>
//         )
//     }
// }

// export default Debit

// const styles = StyleSheet.create({
//     wrapperInput:{
//         paddingHorizontal:20,
//         marginTop:20,
//     },
//     nominalInput:{
//         borderBottomWidth:1,
//         borderBottomColor:'#f9f9f7',
//         height:50,
//         paddingLeft:30,
//         position:'relative'
//     },
//     iconInput:{
//         position:'absolute',
//         top:17,
//         left:23
//     }
// })