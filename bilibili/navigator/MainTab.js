import {createBottomTabNavigator} from "react-navigation-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import Theme from "../constants/theme";
import React from "react";

import {HomeStack, ChannelStack, DynamicStack, VipStack} from './Stack'
//1.创建底部导航
export const MainTab = createBottomTabNavigator({
    HomeStack: {
        screen: HomeStack,
        navigationOptions: {
            title: '我的',
            tabBarLabel: '首页',
            tabBarIcon: ({focused}) => {
                if(!focused){
                    return <Icon name="ios-home" size={25} />
                }else{
                    return <Icon name="ios-home" size={25} color={Theme.primary}/>
                }
            }
        }
    },
    ChannelStack: {
        screen: ChannelStack,
        navigationOptions: {
            tabBarLabel: '频道',
            tabBarIcon: ({focused}) => {
                if(!focused){
                    return <Icon name="ios-megaphone" size={25} />
                }else{
                    return <Icon name="ios-megaphone" size={25} color={Theme.primary}/>
                }
            }
        }
    },
    DynamicStack: {
        screen: DynamicStack,
        navigationOptions: {
            tabBarLabel: '动态',
            tabBarIcon: ({focused}) => {
                if(!focused){
                    return <Icon name="ios-sync" size={25} />
                }else{
                    return <Icon name="ios-sync" size={25} color={Theme.primary}/>
                }
            }
        }
    },
    VipStack: {
        screen: VipStack,
        navigationOptions: {
            tabBarLabel: '会员购',
            tabBarIcon: ({focused}) => {
                if(!focused){
                    return <Icon name="ios-cart" size={25} />
                }else{
                    return <Icon name="ios-cart" size={25} color={Theme.primary}/>
                }
            }
        }
    }
},{
    tabBarOptions: {
        activeTintColor: Theme.primary,
        inactiveTintColor: 'gray',
    },
});
