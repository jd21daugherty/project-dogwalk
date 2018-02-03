import { StackNavigator } from 'react-navigation';

import ActivityOverview from './app/pages/activity-overview/activity-overview';
import WalkScreen from './app/pages/walk-screen/walk-screen';


const RootNavigator = StackNavigator({
    ActivityOverview: {
        screen: ActivityOverview,
        navigationOptions: {
          headerTitle: 'Activity Overview',
        },
      },
      WalkScreen: {
        screen: WalkScreen,
        navigationOptions: {
          headerTitle: 'Current Walk',
        },
      }
});

export default RootNavigator;