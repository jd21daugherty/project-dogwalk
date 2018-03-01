import React from 'react';
import Expo from 'expo';
import { StyleSheet, Text, View } from "react-native";
import { Pedometer } from 'expo';

export default class CommunityMainPage extends React.Component {
    constructor(){
        super();
    }

    state = {
        
    }

    componentDidMount() {
       
      }
    
      componentWillUnmount() {
       
      }

    render(){
        return(
            <View>
                <Text>Community</Text>
            </View>
        )
       
    }
}

Expo.registerRootComponent(CommunityMainPage);