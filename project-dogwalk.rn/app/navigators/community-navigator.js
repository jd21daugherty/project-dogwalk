import { StackNavigator } from 'react-navigation';

import CommunityMainPage from '../pages/community/community-main.page';

const CommunityNavigator = StackNavigator({
    CommunityMain: {
        screen: CommunityMainPage,
        navigationOptions: {
          headerTitle: 'Community',
        },
      },
});

export default CommunityNavigator;