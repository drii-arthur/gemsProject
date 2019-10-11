import React from 'react'
import { View, Text, StyleSheet,Image } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const OvoFeatures = (props) => {
    return (
        <View style={{ width: '25%', alignItems: 'center' }}>
            <View style={styles.wrapperIcon}>
                <Icon name={props.icon} size={24} color='#04b4b9' />
            </View>
            <Text style={styles.text}>{props.title}</Text>
        </View>
        
    )
}

export default class ContentFeatures extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.wrapper}>
                    <OvoFeatures icon={'md-flash'} title='Pulsa' />
                    <OvoFeatures icon={'md-phone-portrait'} title='Paket Data' />
                    <OvoFeatures icon={'ios-wifi'} title='PLN' />
                    <OvoFeatures icon={'md-phone-portrait'} title='BPJS' />
                </View>
                <View style={styles.wrapper}>
                    <OvoFeatures icon={'ios-medkit'} title='ASURANSI' />
                    <OvoFeatures icon={'md-wallet'} title='PDAM' />
                    <OvoFeatures icon={'md-videocam'} title='Internet' />
                    <OvoFeatures icon={'ios-more'} title='Lainnya' />
                </View>
            </View>

        )
    }
}

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
        width: 58,
        height: 58,
        borderWidth: 1,
        borderColor: '#c5f5fb',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 11,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 6,
        color: 'grey'
    }

})