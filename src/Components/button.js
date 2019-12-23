import React,{Component} from 'react'
import {
    Text,
    TouchableOpacity,
    StyleSheet,
    Dimensions
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { withNavigation } from 'react-navigation'

const {height} = Dimensions.get('window')

const Button = (props) => {
    return(
                <LinearGradient
                    style={[s.btn,props.styles]}
                    start={{x: 0, y: 1}} 
                    end={{x: 2, y:1.}} 
                    colors={['#39afb5','#326db5']}
                >
                    <TouchableOpacity onPress={props.onpress}>
                        <Text style={s.text}>{props.title}</Text>
                    </TouchableOpacity>
                </LinearGradient>
    )
}

export default withNavigation(Button)

const s = StyleSheet.create({
    btn:{
        height:50,
        alignItems:'center',
        justifyContent: 'center',
        borderTopLeftRadius: 25,
        elevation:5
    },
    text:{
        color:'#fff',
        letterSpacing:1,
        fontWeight:'700'
        },
})
