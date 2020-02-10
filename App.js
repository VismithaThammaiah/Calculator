/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
} from 'react-native';

import Button from './src/components/button'
import Styles from './src/components/styles'
import { parse } from 'stacktrace-parser';
const inputButtons = [
  [1, 2, 3, '/'],
  [4, 5, 6, '*'],
  [7, 8, 9, '-'],
  [0, 'C', '=', '+']
];

export default class App extends Component{
  constructor ( props ){
    super (props)
    this.state={
      result:0,
      previous:0, 
      next:'',
      operator:'',
      answer:0,
      line:[],
      history:[0],
      historylen:0
   }
  }
  

  renderButtons2(){
    return inputButtons.map((item, index)=>{
      // console.log('item', item)
      return <View style={Styles.inputRow}>
      {item.map((item,index)=>{
        return(
        //<View style={Styles.inputRow}>
          <Button onPress={ (value)=> this.calculate(value)} value={item}/>
        //</View>
        )

      })}
      </View>
    })
  }

  calculate(data){
 const {previous,next, result,history,historylen} = this.state;
 let length = historylen +1
 let isOperator = isNaN (data)
 if(isOperator){
   this.setState({
    historylen:length,
    previous:next,
    next:0
   },()=>console.log('historylen',historylen))
   if(data=='='){
     this.result()
   }
 
   else if(data==='C'){
    this.clear()
   }
   else{
    this.seperate(data);
   }
   
   }
 
 else{
   let oldline = next==0?data:next+''+ data
   let data2 = history;
   console.log('oldline', isNaN(data2[historylen]))

   oldline = this.readHistory(data2, historylen)?data2[historylen]+''+oldline:oldline;
   console.log('length',historylen)
   data2[historylen] = oldline
  

  this.setState({next:oldline,history:data2})
 }
  }


  readHistory(data, len){
    if(data[len]!==undefined){
      return isNaN(data[len])
    }
    else{
      return false;
    }

  }

  result(){
    const {previous,next,history,operator} = this.state
    let data = history;
    let tempOperator = ''
    console.log('history',history)
    if (operator === '+'){
      tempOperator=parseInt(previous) + parseInt(next)
      data.push(tempOperator)
    }
    else if( operator ==='-'){
      console.log('operator', operator)
      tempOperator=parseInt(previous) + parseInt(next)
      data.push(tempOperator)
      console.log('previous ', previous)
      console.log('next ', next)
    }
  
    
    this.setState({history:data, previous:tempOperator})
  }
  clear(){
    this.setState({previous:0,
    next:0,
    historylen:0,
    operator:'',
    result:0, history:[0]
})
  }
  seperate(data){
    const {previous,history,next, operator} = this.state;
   // console.log('seperate',previous,history)
   if(operator=== '+'){
     this.setState({previous:parseInt(previous)+parseInt(next)})
   }
   else if(operator=== '-'){
    this.setState({previous:parseInt(previous) + parseInt(next)})
  }
    let data2 = history
    data2.push(data)

    this.setState({history:data2, operator:data})
  }

  renderResult(){
    const {history, result}= this.state
    console.log('history',history)
    // if(history.length > 0){
       return history.map((item,index)=>{
        return(
          <View style={{alignItems:'flex-end'}}>
            <Text style={{fontSize:30, marginRight:5}}>{item}</Text>
          </View>
        )
      })
    // }
    // else{
    //   return <Text>{result}</Text>
    // }
  }


  render(){
    const {result, previous,next} = this.state;
  return (
    <SafeAreaView style={{flex:1,alignItems:'stretch'}}>
    
      <View style={Styles.display}>
         {/* <Text style={{position:'absolute', bottom:50, right:0, fontSize:20}}>{previous}</Text>} */}
        {this.renderResult()}
        {/* <Text style={{position:'absolute', textAlign:'right',bottom:0, right:0, fontSize:20}}>{next}</Text> */}
      </View>
      <View style={Styles.input}>
      {this.renderButtons2()}
      </View>
     
    </SafeAreaView>
  )
}
}





// const styles = StyleSheet.create({
  
  // row: {
  //   flexDirection: 'row',
  //   flex: 1,
  //   justifyContent: 'space-around',
  //   alignItems: 'center'
  // },
  // btnText: {
  //   fontSize: 40,
  //   color: '#ddd',
  //   flex: 3,
  //   flexDirection : 'row',
  //   padding: 1,
  //   backgroundColor: "#1e2326"
  // },
  // buttons: {
  //   flex: 7,
  //   flexDirection: 'row'
  //   },
// });
