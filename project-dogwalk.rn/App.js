import React from 'react';
import { StyleSheet, Text, View, TabBarIOS } from 'react-native';
import MainNavigator from './app/navigators/main-navigator';


export default class App extends React.Component { 
  state = {
    selectedTab: 'ActivityOverview'
  }

  render (){
    return(
      <MainNavigator />
    ) 
  }
}