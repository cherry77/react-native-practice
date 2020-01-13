import React from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

export default class Find extends React.Component{
    render () {
        return (
            <View style={{flex: 1, backgroundColor: 'pink', justifyContent: 'center', alignItems: 'center'}}>
                <Text>Find</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
});
