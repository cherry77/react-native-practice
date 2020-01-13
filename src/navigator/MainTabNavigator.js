import React from 'react';
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator, BottomTabBar} from 'react-navigation-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'

// import Home from './../pages/Home'
import HomeRootStack from './../navigator/HomeStackNavigator'
import Find from './../pages/Find'
import About from './../pages/About'
import Settings from './../pages/Settings'

//底部导航
const TABS = {
    Home: {
        screen: HomeRootStack,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: ({focused}) => {
                if(!focused){
                    return <Ionicons name="ios-home" size={25} />
                }else{
                    return <Ionicons name="ios-home" size={30} color='rgb(62, 187, 175)'/>
                }
            }
        }
    },
    Find: {
        screen: Find,
        navigationOptions: {
            tabBarLabel: 'Find',
            tabBarIcon: ({focused}) => {
                if(!focused){
                    return <Ionicons name="ios-search" size={25} />
                }else{
                    return <Ionicons name="ios-search" size={30} color='rgb(62, 187, 175)'/>
                }
            }
        }
    },
    About: {
        screen: About,
        navigationOptions: {
            tabBarLabel: 'About',
            tabBarIcon: ({focused}) => {
                if(!focused){
                    return <Ionicons name="ios-information-circle" size={25} />
                }else{
                    return <Ionicons name="ios-information-circle" size={30} color='rgb(62, 187, 175)'/>
                }
            }
        }
    },
    Settings: {
        screen: Settings,
        navigationOptions: {
            tabBarLabel: 'Settings',
            tabBarIcon: ({focused}) => {
                if(!focused){
                    return <Ionicons name="ios-settings" size={25} />
                }else{
                    return <Ionicons name="ios-settings" size={30} color='rgb(62, 187, 175)'/>
                }
            }
        }
    },
}

class MainTabNavigator extends React.Component{
    _tabNavigator () {
        const {Home, Find, About, Settings} = TABS;
        const tabs = {Home, Find, About, Settings};
        if(!this.tabNavigator){
            this.tabNavigator = createAppContainer(createBottomTabNavigator(
                tabs,
                {
                    tabBarComponent: props => (
                        <BottomTabBar {...props} activeTintColor='rgb(62, 187, 175)'/>
                    )
                }
            ))
        }
        return this.tabNavigator;
    }
    render () {
        const TabNavigator = this._tabNavigator();
        return <TabNavigator/>
    }
}

export default MainTabNavigator
