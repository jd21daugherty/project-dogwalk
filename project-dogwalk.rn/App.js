import React from 'react';
import { StyleSheet, Text, View, TabBarIOS } from 'react-native';
import RootNavigator from './root-navigator';
import ActivityOverview from './app/pages/activity-overview/activity-overview';
import WalkScreen from './app/pages/walk-screen/walk-screen';

export default class App extends React.Component { 
  state = {
    selectedTab: 'ActivityOverview'
  }

  render (){
    return(
      <RootNavigator />
    ) 
  }
}