import React from 'react'
import {
    View,
    Text,
    Button
} from 'react-native'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs'

class HomeScreen extends React.Component{
    static navigationOptions = {
        title: 'Home'
    }
    render () {
        return (
            <View style={{
                flex: 1,
                backgroundColor: 'cyan',
                justifyContent: 'center',
                alignItems: 'center'}}>
                <Text>Home</Text>
                <Button title="Go to detail"
                        onPress={() => this.props.navigation.navigate('Details', {
                            'newsId': 'h0001'
                        })}
                />
            </View>
        )
    }
}
class DetailsScreen extends React.Component{
    render () {
        return (
            <View style={{
                flex: 1,
                backgroundColor: 'cyan',
                justifyContent: 'center',
                alignItems: 'center'}}>
                <Text>Details</Text>
                <Text>{this.props.navigation.getParam('newsId')}</Text>
                <Button
                    title="Go to home"
                    onPress={() => this.props.navigation.navigate('Home')}/>
            </View>
        )
    }
}

const TabNavigator = createBottomTabNavigator({
    Home: {
        screen: HomeScreen
    },
    Details: {
        screen: DetailsScreen
    }
});

const AppContainer = createAppContainer(TabNavigator);

export default AppContainer;
