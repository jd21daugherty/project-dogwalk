import React from 'react';
import { StyleSheet } from 'react-native';
import { ButtonGroup } from 'react-native-elements';
import { navigation } from 'react-navigation';

// const { navigate } = this.props.navigation;

export default class CommunityTopButtons extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
          selectedIndex: 0
        }
        this.updateIndex = this.updateIndex.bind(this);
      }
      
      updateIndex (selectedIndex) {
        this.setState({selectedIndex});
        // this.props.changeButton();
        this.props.changeSubScreen(selectedIndex);
      }
      
      render () {
        const buttons = ['Feed', 'Friends', 'Invite'];
        const { selectedIndex } = this.state;
      
        return (
          <ButtonGroup
            onPress={this.updateIndex}
            selectedIndex={selectedIndex}
            buttons={buttons}
            containerStyle={{height: 30}}
          />
        );
      }
}

