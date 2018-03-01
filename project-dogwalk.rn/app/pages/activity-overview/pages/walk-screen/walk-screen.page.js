import React from 'react';
import Expo from 'expo';
import { StyleSheet, Text, View } from "react-native";
import { Pedometer } from 'expo';

export default class WalkScreen extends React.Component {
    constructor(){
        super();
    }

    state = {
        isPedometerAvailable: "checking",
        totalStepsInWalk: 0
    }

    componentDidMount() {
        this._subscribe();
      }
    
      componentWillUnmount() {
        this._unsubscribe();
      }

      _subscribe = () => {
        this._subscription = Pedometer.watchStepCount(result => {
          this.setState({
            totalStepsInWalk: result.steps
          });
        });
    
        Pedometer.isAvailableAsync().then(
          result => {
            this.setState({
              isPedometerAvailable: String(result)
            });
          },
          error => {
            this.setState({
              isPedometerAvailable: "Could not get isPedometerAvailable: " + error
            });
          }
        )};

        _unsubscribe = () => {
            this._subscription && this._subscription.remove();
            this._subscription = null;
          };

    render(){
        return(
            <View>
                <Text>Total steps in this walk: {this.state.totalStepsInWalk}</Text>
            </View>
        )
       
    }
}

Expo.registerRootComponent(WalkScreen);