import React from 'react'
import { View, Text, StyleSheet,Image,TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import {withNavigation} from "react-navigation"
import SvgUri from 'react-native-svg-uri'

const OvoFeatures = (props) => {
    return (
        <View style={{ width: '25%', alignItems: 'center' }}>
            <TouchableOpacity 
            onPress={props.route}
            style={styles.wrapperIcon}>
            <Image
                    style={{width:'60%',height:'75%'}}
                    source={props.image}
                />
            </TouchableOpacity>
            <Text style={styles.text}>{props.title}</Text>
        </View>
        
    )
}

class ContentFeatures extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.wrapper}>
                    <OvoFeatures image={require('../Assets/Icons/Pulsa_icon_2.png')} title='Pulsa' route={() => {this.props.navigation.navigate('Pulsa')}}/>
                    <OvoFeatures image={require('../Assets/Icons/Pulsa_icon_2.png')} title='Paket Data' route={() => {this.props.navigation.navigate('PaketData')}} />
                    <OvoFeatures image={require('../Assets/Icons/Pulsa_icon_2.png')} title='PLN' route={() => {this.props.navigation.navigate('Pln')}} />
                    <OvoFeatures image={require('../Assets/Icons/Pulsa_icon_2.png')} title='BPJS' route={() => {this.props.navigation.navigate('Bpjs')}} />
                </View>
                <View style={styles.wrapper}>
                    <OvoFeatures image={require('../Assets/Icons/Pulsa_icon_2.png')} title='ASURANSI' route={() => {this.props.navigation.navigate('Asuransi')}} />
                    <OvoFeatures image={require('../Assets/Icons/Pulsa_icon_2.png')} title='PDAM'route={() => {this.props.navigation.navigate('Pdam')}} />
                    <OvoFeatures image={require('../Assets/Icons/Pulsa_icon_2.png')} title='Internet' route={() => {this.props.navigation.navigate('Internet')}} />
                    <OvoFeatures image={require('../Assets/Icons/Pulsa_icon_2.png')} title='Lainnya'  />
                </View>
            </View>

        )
    }
}
export default withNavigation(ContentFeatures)

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 50,
        marginHorizontal: 10
    },
    wrapper: {
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: 18
    },
    wrapperIcon: {
        width: 60,
        height: 60,
        // borderWidth: 1,
        // borderColor: '#c5f5fb',
        // borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 11,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 6,
        color: 'grey'
    }

})