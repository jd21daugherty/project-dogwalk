import { StackNavigator } from 'react-navigation';

import SettingsMainPage from '../pages/settings/settings-main.page';

const SettingsNavigator = StackNavigator({
    SettingsMain: {
        screen: SettingsMainPage,
        navigationOptions: {
          headerTitle: 'Settings',
        },
      },
});

export default SettingsNavigator;