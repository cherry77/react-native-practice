import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'

export default class Home extends React.Component{
    static navigationOptions = {
        title: 'Detail',
    }
    render () {
        return (
            <View style={{flex: 1, backgroundColor: 'cyan', justifyContent: 'center', alignItems: 'center'}}>
                <Text>Detail</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
});
