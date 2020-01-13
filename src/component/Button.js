import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet} from 'react-native';

export default class Button extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            disabled: false
        }
    }
    onPress = () => {
        const {onPress} = this.props
        //Disable the button
        this.disable();
        onPress(this.enable);
        //Get the enable button
    };
    enable = () => {
        this.setState({
            disabled: false
        })
    };
    disable = () => {
        this.setState({
            disabled: true
        })
    };
    render () {
        const {text, bgcolor} = this.props;
        return (
            <View>
                <TouchableOpacity
                    style={[styles.button, {backgroundColor: bgcolor}, this.state.disabled && styles.disabled]}
                    disabled={this.state.disabled}
                    onPress={this.onPress}
                >
                    <Text style={styles.buttonText}>{text}</Text>
                </TouchableOpacity>
            </View>


        )
    }
}

const styles = StyleSheet.create({
    button: {
        height: 40,
        width: 100,
        backgroundColor: 'green',
        justifyContent: 'center',
        borderRadius: 20,
    },
    buttonText: {
        textAlign: 'center',
        color: '#fff'
    },
    disabled: {
        backgroundColor: 'gray'
    }
});
