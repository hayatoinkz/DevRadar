import { createAppContainer} from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';

import Main from './pages/Main';
import Profile from './pages/Profile';

const Routes = createAppContainer(
    createStackNavigator({
        Main: {
            screen: Main,
            navigationOptions: {
                title: 'DevRadar'
            },
        },
        Profile: {
            screen: Profile,
            navigationOptions: {
                headerTitleStyle: { 
                    textAlign:"center", 
                    flex:1 
                },
                title: 'Perfil no Github'
            },
        },
    },{
        defaultNavigationOptions: {
            headerLayoutPreset: 'center',
            headerTintColor: '#FFF',
            headerStyle: {
                backgroundColor: '#7D40E7'
            }

        }
    })
);

export default Routes;