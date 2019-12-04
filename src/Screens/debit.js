import React, { Component } from "react";
import { StyleSheet, View, Switch } from "react-native";
import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input";
import Header from '../Components/header'

const s = StyleSheet.create({
  switch: {
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  container: {
    backgroundColor: "#F5F5F5",
  },
  label: {
    color: "#505050",
    fontSize: 12,
  },
  input: {
    fontSize: 16,
    color: "#505050",
  },
  border:{
    borderBottomWidth:1,
    borderBottomColor:'#f1f2f6',
  },
  textInput: {
    color:'grey'
  }
});


export default class Example extends Component {
  state = { formData:'' };

  _siip = () => {
    alert('hahahaha')
  }

  _onChange = (formData) => console.log(JSON.stringify(formData, null, " "));
  _onFocus = (field) => console.log("focusing", field);
  render() {
    return (
    <View style={s.container}>
        <Header title='Debit Card' />
        <View style={{marginTop:20}}>
            <CreditCardInput
                autoFocus={true}
                inputContainerStyle={s.border}
                inputStyle={s.textInput}
                requiresName={false}
                requiresCVC
                requiresPostalCode={false}
                labelStyle={s.label}
                inputStyle={s.input}
                validColor={"black"}
                invalidColor={"red"}
                placeholderColor={"darkgray"}
                onFocus={this._onFocus}
                onChange={this._onChange} />
        </View>
    </View>
    );
  }
}