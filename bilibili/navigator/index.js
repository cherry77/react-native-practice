import React from 'react'
import {createAppContainer} from 'react-navigation'
import {createDrawerNavigator} from 'react-navigation-drawer'
import {AppNavigator} from './AppNavigator'
import DrawerMenu from './../components/DrawerMenu'

//3.创建抽屉导航
const DrawerNavigator = createDrawerNavigator({
    AppNavigator,
},{
    drawerBackgroundColor: '#fff',
    drawerPosition: 'left', // 抽屉在左边还是右边,默认左边
    contentComponent: () => <DrawerMenu/>, // Menu是自定义侧滑栏
});

const AppContainer = createAppContainer(DrawerNavigator);

export default class App extends React.Component{
    render () {
        return (
            <AppContainer/>
        )
    }
}
