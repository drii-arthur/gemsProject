import React,{Component} from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    ScrollView,
    ActivityIndicator
} from 'react-native'


import HeaderTransaction from '../Components/headerTransaction'
import ListWallet from '../Components/ListWallet'

class Wallet extends Component{
    constructor(props){
        super(props)
        this.state = {
            data : '',
            isLoading:false
                
        }
    }
    componentDidMount (){
        this.setState({isLoading:true},() => setTimeout(() => {
            const data = [
            {
                    Nominal:'70.000',
                    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSL1HbA31_pQcwzjRNYwCM0JhpK3nl9CFeSwGlABhIjxz1ZYbGv',
                    valid:'20-20-2020',
                    kodeVoucher:'0988980',
                    id:1,
                    title:'Voucher Dimsum'
                },
                {
                    Nominal:'100.000',
                    image:'http://www.rejuve.co.id/files/website_banner_launching_summer_calamansi_fruit_1185x709px_01.jpg',
                    valid:'20-30-2020',
                    kodeVoucher:'0988980',
                    id:2,
                    title:'Voucher Yushinoya 100 rb'
                },
                {
                    Nominal:'50.000',
                    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSL1HbA31_pQcwzjRNYwCM0JhpK3nl9CFeSwGlABhIjxz1ZYbGv',
                    valid:'20-15-2020',
                    kodeVoucher:'0988980',
                    id:3,
                    title:'Voucher Apa Aja'

                }
        ]
        this.setState({
            data,
            isLoading:false
        })
        }, 1000))
        
    }
    render(){
        return(
            <View style={{flex:1}}>
                <HeaderTransaction title='Wallet' />
                {this.state.isLoading ?
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                    <ActivityIndicator size='large' color='#39afb5' />
                </View>
                :
                <ListWallet data={this.state.data} />
                }
                
                
            </View>
        )
    }
}

export default Wallet