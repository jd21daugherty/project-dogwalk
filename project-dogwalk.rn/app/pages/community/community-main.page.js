import React from 'react';
import Expo from 'expo';
import { StyleSheet, ScrollView } from "react-native";
import { Pedometer } from 'expo';

import CommunityTopButtons from './top-buttons';
import Feed from './feed';
import Friends from './friends';
import Invite from './invite';



export default class CommunityMainPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selectedSubScreen: Feed
        }
    }

    componentDidMount() {
       
      }
    
      componentWillUnmount() {
       
      }

    updateSubScreen(newSubScreenIndex) {
        if (newSubScreenIndex === 0)
            this.setState({ selectedSubScreen: Feed });
        else if (newSubScreenIndex === 1)
            this.setState({ selectedSubScreen: Friends });
        else if (newSubScreenIndex === 2) 
            this.setState({ selectedSubScreen: Invite });   
    }

    render(){
        return(
            <ScrollView>
                <CommunityTopButtons changeSubScreen={(index) => this.updateSubScreen(index)}/>
                <this.state.selectedSubScreen />
            </ScrollView>
        );
       
    }
}

const styles = StyleSheet.create({

});

Expo.registerRootComponent(CommunityMainPage);
