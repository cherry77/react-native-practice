import React from 'react'
import {createStackNavigator} from 'react-navigation-stack'

import Login from './../screens/login/Login'
import Register from './../screens/login/Register'

import Home from './../screens/main/Home'
import Channel from './../screens/main/Channel'
import Dynamic from './../screens/main/Dynamic'
import Vip from './../screens/main/Vip'

import Theme from './../constants/theme'

//默认样式配置
const defaultNavigationOptions = () => ({
    headerStyle: {
        backgroundColor: Theme.primary,
    },
    headerTintColor: '#fff',
});
//各页面导航配置
export const LoginStack = createStackNavigator({
    Login,
    Register
},{
    initialRouteName: 'Login',
});
export const HomeStack = createStackNavigator({
    Home: Home
},{
    initialRouteName: 'Home',
    defaultNavigationOptions
});
export const ChannelStack = createStackNavigator({
    Channel: Channel
},{
    initialRouteName: 'Channel',
    defaultNavigationOptions
});
export const DynamicStack = createStackNavigator({
    Dynamic: Dynamic
},{
    initialRouteName: 'Dynamic',
    defaultNavigationOptions
});
export const VipStack = createStackNavigator({
    Vip: Vip
},{
    initialRouteName: 'Vip',
    defaultNavigationOptions
});
