import React from 'react';
import {
    StyleSheet,
    FlatList,
    View,
    Text,
    Platform,
    PermissionsAndroid,
    TouchableOpacity,
    StatusBar
} from 'react-native';
import Contacts from 'react-native-contacts';
import { SearchBar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons'
class ContactList extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            search: '',
            contacts: [],
            searchPlaceholder: "Search",
        }
    }

    updateSearch = search => {
        const phoneNumberRegex = /\b[\+]?[(]?[0-9]{2,6}[)]?[-\s\.]?[-\s\/\.0-9]{3,15}\b/m;
        const emailAddressRegex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
        if (search === "" || search === null) {
        this.getList();
    } else if (phoneNumberRegex.test(search)) {
        Contacts.getContactsByPhoneNumber(search, (err, contacts) => {
        this.setState({ contacts });
        });
    } else if (emailAddressRegex.test(search)) {
        Contacts.getContactsByEmailAddress(search, (err, contacts) => {
        this.setState({ contacts});
        });
    } else {
        Contacts.getContactsMatchingString(search, (err, contacts) => {
        this.setState({ contacts });
        });
    }
        this.setState({ search });
  };

    componentDidMount() {
        if (Platform.OS === 'android') {
            PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
                {
                    title: 'Contacts',
                    message: ' This app would like to see your contacts'
                }
            ).then(() => {
                this.getList();
            })
        } else if(Platform.OS === 'ios') {
            this.getList();
        }
    }

    getList = () => {
        Contacts.getAll((err, contacts) => {
            if (err === 'denied') {
                console.log("cannot access");
            } else {
                this.setState({ contacts });
            }
        })

        Contacts.getCount(count => {
            this.setState({ searchPlaceholder: `Search ${count} contacts` });
        });
    }


    render() {
        const { search } = this.state;

        return (
            <View style={styles.container}>
            <StatusBar backgroundColor='#39afb5' />
            <View style={styles.header}>
            <TouchableOpacity onPress={() => {this.props.navigation.goBack()}}>
            <Icon name={'ios-arrow-back'} size={24} color={'#fff'} />
            </TouchableOpacity>
            
            <SearchBar
            placeholder="Cari Kontak"
            onChangeText={this.updateSearch}
            value={search}
            containerStyle={{borderWidth:0,marginLeft:25,flex:1,backgroundColor:'transparent',borderBottomWidth:0,borderTopWidth:0,padding:0}}
            inputContainerStyle={{backgroundColor:'#fff',height:35,marginRight:15,borderRadius:25}}
            />
            </View>
                <FlatList
                    data={this.state.contacts}
                    //Setting the number of column
                    numColumns={1}
                    keyExtractor={(item, index) => index}
                    renderItem={({item}) => {
                      
                        return(
                            <TouchableOpacity style={styles.itemContainer} onPress = {() => { this.props.navigation.navigate('Pulsa',{ nomor : item.phoneNumbers[0].number})
                            }}>
                                <View style={{marginRight:15}}>
                                <Icon name={'md-contact'} size={40} color='grey' />
                            </View>
                            <View>
                                <Text style={styles.contactName}>
                                    {`${item.givenName} `} {item.familyName}
                                </Text>
                                    {item.phoneNumbers.map(phone => (
                            <Text style={styles.phones}>{phone.label} : {phone.number}</Text>
                                ))}
                            </View>
        </TouchableOpacity>
                        )
                    }}
                />
            </View>
        )
    }
}

export default ContactList

const styles = StyleSheet.create({
    itemContainer: {
        marginHorizontal: 10,
        borderBottomWidth:1,
        borderBottomColor:'#ecf0f1',
        paddingBottom:5,
        marginVertical:5,
        flexDirection:'row'
    },
    contactName: {
        fontSize:16,
    },
    phones:{
        color:'rgba(189, 195, 199,1.0)'
    },
    header:{
        flexDirection:'row',
        paddingHorizontal:15,
        elevation:2,
        marginBottom:10,
        height:55,
        backgroundColor:'#39afb5',
        alignItems:'center',
        marginTop:20
    }
})
