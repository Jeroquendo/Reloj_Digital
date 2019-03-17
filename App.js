import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform,  } from 'react-native';
 
export default class App extends Component<{}>{
    constructor(){
        super();
        this.state = { currentTime: null, currentDay: null }
    }

    componentWillMount(){
        this.getCurrentTime();
    }
 
    getCurrentTime = () =>{
        let hora = new Date().getHours();
        let minutos = new Date().getMinutes();
        let segundos = new Date().getSeconds();

        if( hora > 12 ){
            hora = hora - 12;
        }
 
        if( hora == 0 ){
            hora = 12;
        } 
        
        if( minutos < 10 ){
            minutos = '0' + minutos;
        }
 
        if( segundos < 10 ){
            segundos = '0' + segundos;
        }
         
        this.setState({ currentTime: hora + ':' + minutos + ':' + segundos});    
    }
 
    componentWillUnmount(){
        clearInterval(this.timer);
    }
 
    componentDidMount(){
        this.timer = setInterval(() =>
        {
            this.getCurrentTime();
        }, 1000);
    }
 
    render(){
     return(
       <View style = { styles.container }>
          <View>
            <Text style = { styles.timeText }>{ this.state.currentTime }</Text> 
          </View>
       </View>);
    }
}
 
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1BD20C',
    },
       
    timeText:{
        fontSize: 100,
        color: '#FFFFFF'
    }
});