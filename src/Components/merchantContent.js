import React from 'react'
import { View, Text, StyleSheet, ScrollView, Dimensions, Image } from 'react-native'

const { height, width } = Dimensions.get('window')

export default class CardsMerchant extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            product: [
                {
                    id: 1,
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSL1HbA31_pQcwzjRNYwCM0JhpK3nl9CFeSwGlABhIjxz1ZYbGv',
                    merchant: 'One Dim Sum',
                    jarak:1.5
                },
                {
                    id: 1,
                    image: 'http://www.rejuve.co.id/files/website_banner_launching_summer_calamansi_fruit_1185x709px_01.jpg',
                    merchant: 'Rumah Makan Teman',
                   jarak:1.9
                },
                {
                    id: 1,
                    image: 'https://i01.appmifile.com/webfile/globalimg/0320/4-16note7/note7-M-sale.jpg',
                    merchant: 'Get Mi Now!',
                    jarak:2.5
                },
            ]
        }
    }
    render() {
        return (
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginRight: 10,paddingLeft:10 }}>
                {this.state.product.map((item, index) => {
                    return (
                        <View style={styles.wrapper} key={index}>
                            <Image
                                style={styles.image}
                                source={{uri:`${item.image}`}} />
                            <View>
                                <Text style={styles.voucher}>{item.merchant}</Text>
                                <Text style={styles.price}>{item.jarak} km</Text>
                            </View>
                        </View>
                    )
                })}

            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        width: width / 2.2,
        marginRight: 8,
        elevation: 2,
        borderWidth: 1,
        borderColor: '#CAD3C8',
        marginBottom: 10,
        backgroundColor: '#fff',
        borderRadius: 6,
    },
    image: {
        width: '100%',
        height: 150,
        borderRadius: 5,
    },
    voucher:{
        backgroundColor:'#39afb5',
        color:'#fff',
        textAlign:'center',
        paddingVertical:5
    },
    price: {
        fontSize: 16,
        textAlign:'center'
    }
})