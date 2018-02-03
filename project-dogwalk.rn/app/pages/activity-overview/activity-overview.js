import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import Expo from 'expo';
import { Pedometer } from 'expo';

export default class ActivityOverview extends React.Component{
  constructor(){
    super();

    this.startAWalk = this.startAWalk.bind(this);
  }

  state = {
    isPedometerAvailable: "checking",
    pastStepCount: 0
  };

  startAWalk(){
    const {navigate} = this.props.navigation;

    navigate("WalkScreen");
  }

  componentDidMount() {
    this._subscribe();
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  _subscribe = () => {
   
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
    );

    const end = new Date();
    const start = new Date();
    start.setDate(end.getDate() - 1);
    Pedometer.getStepCountAsync(start, end).then(
      result => {
        this.setState({ pastStepCount: result.steps });
      },
      error => {
        this.setState({
          pastStepCount: "Could not get stepCount: " + error
        });
      }
    );
  };

  _unsubscribe = () => {
    this._subscription && this._subscription.remove();
    this._subscription = null;
  };

  render() {
    return (
      <View style={styles.container}>
        <Button
          raised
          icon={{name: 'paw', type: 'font-awesome'}}
          title='START A WALK'
          onPress={() => this.startAWalk()}
          />
     
        <Text>
          My steps taken in the last 24 hours: {this.state.pastStepCount}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
    alignItems: "center",
    justifyContent: "center"
  }
});

Expo.registerRootComponent(ActivityOverview);