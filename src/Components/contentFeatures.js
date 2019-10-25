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
                    style={props.styles}
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
                    <OvoFeatures image={require('../Assets/Icons/Pulsa_icon_2.png')} title='Pulsa' route={() => {this.props.navigation.navigate('Pulsa')}} styles={{width:'50%',height:'60%'}}/>
                    <OvoFeatures image={require('../Assets/Icons/Paket_icon.png')} title='Paket Data' route={() => {this.props.navigation.navigate('PaketData')}} styles={{width:'60%',height:'50%'}} />
                    <OvoFeatures image={require('../Assets/Icons/PLN_icon.png')} title='PLN' route={() => {this.props.navigation.navigate('Pln')}} styles={{width:'50%',height:'60%'}} />
                    <OvoFeatures image={require('../Assets/Icons/BPJS_icon.png')} title='BPJS' route={() => {this.props.navigation.navigate('Bpjs')}} styles={{width:'50%',height:'60%'}} />
                </View>
                <View style={styles.wrapper}>
                    <OvoFeatures image={require('../Assets/Icons/Asuransi_icon.png')} title='ASURANSI' route={() => {this.props.navigation.navigate('Asuransi')}} styles={{width:'50%',height:'60%'}} />
                    <OvoFeatures image={require('../Assets/Icons/PDAM_icon.png')} title='PDAM'route={() => {this.props.navigation.navigate('Pdam')}} styles={{width:'50%',height:'60%'}} />
                    <OvoFeatures image={require('../Assets/Icons/Internet_icon.png')} title='Internet' route={() => {this.props.navigation.navigate('Internet')}} styles={{width:'60%',height:'50%'}} />
                    <OvoFeatures image={require('../Assets/Icons/Lainnya_icon.png')} title='Lainnya' styles={{width:'50%',height:'60%'}}  />
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
        marginTop: 40,
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
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        // elevation:2,
        backgroundColor:'#fff'
    },
    text: {
        fontSize: 11,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 6,
        color: 'grey'
    }

})