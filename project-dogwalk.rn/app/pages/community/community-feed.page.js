import React from 'react';
import { StyleSheet, ScrollView, Text } from 'react-native';

export default class CommunityFeedPage extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
            <ScrollView>
                <Text>You have reached the feed page!</Text>
            </ScrollView>
        );
    }
}