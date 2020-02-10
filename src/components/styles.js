import React, { Component } from 'react'
import { View, SafeAreaView, Text, StyleSheet,TouchableOpacity } from 'react-native'




    
   
    
      const styles = StyleSheet.create({

        rootContainer: {
          flex: 1,
        },
        display:{
          flex:3,
          backgroundColor:'#ddd',
          justifyContent:'flex-end'
        },
        input:{
          flex:8,
          backgroundColor:'#2d2d2d'
        },
        container: {
          flex: 1,
          width: '100%',
          height: 100
        },
        row: {
          flexDirection: 'row',
          flex: 1,
          justifyContent: 'space-around',
          alignItems: 'center'
        },
        btnText: {
          fontSize: 40,
          color: '#ddd',
          flex: 3,
          flexDirection : 'row',
          padding: 1,
          backgroundColor: "#1e2326"
        },
        buttons: {
          flex: 7,
          flexDirection: 'row'
          },
        inputButton: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 0.5,
            borderColor: '#91AA9D'
        },
    
        inputButtonText: {
            fontSize: 22,
            fontWeight: 'bold',
            color: 'white'
        },

        inputRow: {
          flex:1,
          flexDirection:'row'
        }

      
    
        })

   

  export default styles;



