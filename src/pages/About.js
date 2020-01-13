import React from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

export default class About extends React.Component{
    render () {
        return (
            <View style={{flex: 1, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center'}}>
                <Text>About</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
});
