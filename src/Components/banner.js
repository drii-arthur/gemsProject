import React from 'react'
import { View, Text, StyleSheet, ScrollView, Dimensions, Image } from 'react-native'

const { height, width } = Dimensions.get('window')
const BannerContent = (props) => {
    return(
            <View style={styles.wrapper} >
                    <Image
                        style={styles.image}
                        source={props.image} />
            </View>
        )
}
export default class Banner extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }   
    }
    
    render() {
       
        return (
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingLeft: 15 }}>
                        <BannerContent image={require('../Assets/Images/Slider-01.png')} />
                        <BannerContent image={require('../Assets/Images/Slider-02.png')} />
                        <BannerContent image={require('../Assets/Images/Banner2.png')} />
                        <BannerContent image={require('../Assets/Images/Banner3.png')} />
                        <BannerContent image={require('../Assets/Images/Banner4.png')} />
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        height: height / 7,
        width: width / 1.4,
        marginRight: 8,
        elevation: 3,
        borderRadius:10,
        marginBottom:10
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 5,
    }
})