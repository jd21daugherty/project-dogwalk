import React from 'react';
import { ScrollView, Text } from 'react-native';
import { Card, ListItem } from 'react-native-elements';

const users = [
    {
        name: 'Darth',
        avatar: require('../../../assets/user-test-images/darth-vader.jpg')
    },
    {
        name: 'Ralph',
        avatar: require('../../../assets/user-test-images/ralph.jpeg')
    },
    {
        name: 'Darth',
        avatar: require('../../../assets/user-test-images/darth-vader.jpg')
    },
    {
        name: 'Ralph',
        avatar: require('../../../assets/user-test-images/ralph.jpeg')
    },
    {
        name: 'Darth',
        avatar: require('../../../assets/user-test-images/darth-vader.jpg')
    },
    {
        name: 'Ralph',
        avatar: require('../../../assets/user-test-images/ralph.jpeg')
    },
    {
        name: 'Darth',
        avatar: require('../../../assets/user-test-images/darth-vader.jpg')
    },
    {
        name: 'Ralph',
        avatar: require('../../../assets/user-test-images/ralph.jpeg')
    },
    {
        name: 'Darth',
        avatar: require('../../../assets/user-test-images/darth-vader.jpg')
    },
    {
        name: 'Ralph',
        avatar: require('../../../assets/user-test-images/ralph.jpeg')
    },
];

export default class Friends extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
            <ScrollView>
                <Card title="Friends">
                    {
                        users.map((u, i) => {
                            return(
                                <ListItem
                                    key={i}
                                    roundAvatar
                                    title={u.name}
                                    avatar={u.avatar}
                                />
                            );
                        })
                    }
                </Card>
            </ScrollView>
        );
    }
}