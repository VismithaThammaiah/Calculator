import React, { Component } from 'react'
import { View, SafeAreaView, Text, StyleSheet,TouchableOpacity } from 'react-native'
import Styles from './styles'


export default class Buttons extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }

  }

  render() {
      return(
        <TouchableOpacity onPress={()=>this.props.onPress(this.props.value)} style={Styles.inputButton}>
        <Text style={Styles.inputButtonText}>{this.props.value}</Text>
    </TouchableOpacity>
      )

  }}


  
