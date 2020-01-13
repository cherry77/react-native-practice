import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button
} from 'react-native';

export default class Home extends React.Component{
    static navigationOptions = {
        title: 'Home',
        headerStyle: {
            backgroundColor: 'red'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontSize: 20,
            fontWeight: 'bold'
        },
        headerLeft: () => (
            <Button title="Set" onPress={() => alert('Set')}/>
        ),
        headerRight: () => (
            <Button title="Scan" onPress={() => alert('Scan')}/>
        )
    }
    render () {
        return (
            <View style={{flex: 1, backgroundColor: 'cyan', justifyContent: 'center', alignItems: 'center'}}>
                <Text>Home</Text>
                <Button title="Go to detail" onPress={() => this.props.navigation.navigate('HomeDetail')}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
});
