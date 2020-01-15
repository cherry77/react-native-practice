/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import MainTabNavigator from './src/navigator/MainTabNavigator'

const App: () => React$Node = () => {
    return (
        <MainTabNavigator />
    );
};

const styles = StyleSheet.create({
});

export default App;
