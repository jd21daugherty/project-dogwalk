import React from 'react';
import { ScrollView, Text } from 'react-native';

export default class Feed extends React.Component {
    constructor(pros) {
        super();
    }

    render() {
        return(
            <ScrollView>
                <Text>Feed page.</Text>
            </ScrollView>
        );
    }
}