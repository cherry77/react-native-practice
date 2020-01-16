import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

export default class Loading extends React.Component{
    render () {
        return (
            <View>
                <Text>Loading</Text>
            </View>
        )
    }

    componentDidMount () {
        this.timer = setInterval(() => {
            this.props.navigation.navigate('MainTab')
        }, 1000)
    }
}

const styles = StyleSheet.create({

})
