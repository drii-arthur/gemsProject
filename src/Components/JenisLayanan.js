import React,{ Component } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
    } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'


class JenisLayanan extends Component {
    constructor(props){
        super(props)
        this.state = {
            // prabayar : props.prabayar,
            // pascaBayar : false
        }
    }
    render(){
        const {prabayar,changePrabayar,pascabayar,changePascaBayar} = this.props
        return(
             <View style={{height:50,marginTop:-20,borderTopLeftRadius:25,flexDirection:'row',paddingHorizontal:5,paddingTop:1,marginBottom:10}}>
                    <TouchableOpacity onPress={changePrabayar} style={[styles.layanan,prabayar == true ?{ borderColor:'#fff', borderWidth:1
                    } : null]}>
                    {prabayar == true ? 
                    <LinearGradient
                    style={[styles.layanan,{height:'100%',width:'100%'}]} 
                        start={{x: 0, y: 1}} 
                        end={{x: 2, y:1.}} 
                    colors={['#39afb5','#57bfed']}>
                    <Text style={prabayar == true ? {color:'#fff'} :{}}>Prabayar</Text>
                    </LinearGradient>:
                     <Text style={prabayar == true ? {color:'#fff'} :{}}>Prabayar</Text>}
                    </TouchableOpacity>

                    <TouchableOpacity onPress={changePascaBayar} style={[styles.layanan,this.state.prabayar ?{ borderColor:'#fff', borderWidth:1
                    } : null]}>
                    {pascabayar == true ? 
                    <LinearGradient
                    style={[styles.layanan,{height:'100%',width:'100%'}]}
                        start={{x: 0, y: 1}} 
                        end={{x: 2, y:1.}} 
                    colors={['#39afb5','#57bfed']}>
                    <Text style={pascabayar == true ? {color:'#fff'} :{}}>Pasca Bayar</Text>
                    </LinearGradient>:
                        <Text style={pascabayar == true ? {color:'#fff'} :{}}>Pasca Bayar</Text>}
                    </TouchableOpacity>
                </View>
        )
    }
}

export default JenisLayanan

const styles = StyleSheet.create({
    layanan:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:25,
    }
})