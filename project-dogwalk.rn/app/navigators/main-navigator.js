import React, { Component } from 'react';
import { TabNavigator, TabView } from 'react-navigation'
import { Icon } from 'react-native-elements';

import CommunityNavigator from './community-navigator';
import ActivityNavigator from './activity-navigator';
import SettingsNavigator from './settings-navigator';

const MainNavigator = TabNavigator({
    TabItem1: {
        screen: CommunityNavigator,
        navigationOptions: {
            tabBarLabel:"Community",
            tabBarIcon: () => 
            <Icon
            name='users'
            type='font-awesome'
            color='#517fa4'
          />
        }
    },
    TabItem2: {
        screen: ActivityNavigator,
        navigationOptions: {
            tabBarLabel:"Activity",
            tabBarIcon: () => 
            <Icon
            name='paw'
            type='font-awesome'
            color='#517fa4'
          />
        }
    },
    TabItem3: {
        screen: SettingsNavigator,
        navigationOptions: {
            tabBarLabel: "Settings",
            tabBarIcon: () => 
            <Icon
            name='cogs'
            type='font-awesome'
            color='#517fa4'
            />
        }
    }

    ///... add more tabs here

}, {
        tabBarOptions: {
            activeTintColor: '#222',
        }
});

export default MainNavigator;