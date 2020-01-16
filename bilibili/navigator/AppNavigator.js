import {createStackNavigator, TransitionPresets} from "react-navigation-stack";
import Loading from "../screens/Loading";
import {LoginStack} from './Stack'
import {MainTab} from './MainTab'

//2.创建导航
export const AppNavigator = createStackNavigator({
    Loading: {
        screen: Loading
    },
    LoginStack: {
        screen: LoginStack
    },
    MainTab: {
        screen: MainTab
    }
},{
    initialRouteName: 'Loading',
    defaultNavigationOptions: {
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
    }
});
