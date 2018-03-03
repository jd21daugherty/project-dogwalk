import { StackNavigator } from 'react-navigation';

import ActivityOverview from '../pages/activity-overview/activity-overview.page';
import WalkScreen from '../pages/activity-overview/pages/walk-screen/walk-screen.page';


const ActivityNavigator = StackNavigator({
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

export default ActivityNavigator;