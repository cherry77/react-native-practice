import React from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

export default class Settings extends React.Component{
    render () {
        return (
            <View style={{flex: 1, backgroundColor: 'yellow', justifyContent: 'center', alignItems: 'center'}}>
                <Text>Settings</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
});
