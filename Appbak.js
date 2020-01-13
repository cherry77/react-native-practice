import React from 'react'
import { View, Text } from 'react-native'
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
// import HImage9 from './src/component/HImage9'
// import HScrollView from './src/component/HScrollView'
// import HRefresh from './src/component/HRefresh'
// import HFlatList from './src/component/HFlatList'
// import HFlatListDemo from './src/component/HFlatListDemo'
import HNet from './src/component/HNet'
// import HSectionList from './src/component/HSectionList'
// import HSectionListDemo from './src/component/HSectionListDemo'

class HomeScreen extends React.Component{
    render () {
        return (
            <View style={{flex: 1}}>
                {/*<HImage9/>*/}
                {/*<HScrollView/>*/}
                {/*<HRefresh/>*/}
                {/*<HFlatList/>*/}
                {/*<HFlatListDemo/>*/}
                <HNet/>
                {/*<HSectionList/>*/}
                {/*<HSectionListDemo />*/}
            </View>
        )
    }
}
class SettingsScreen extends React.Component{
    render () {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Setting</Text>
            </View>
        )
    }
}

const TabNavigator = createBottomTabNavigator(
    {
        Home: HomeScreen,
        Settings: SettingsScreen
    }
)


export default createAppContainer(TabNavigator)

