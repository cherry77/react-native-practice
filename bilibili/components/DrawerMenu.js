import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Theme from './../constants/theme'

export default class DrawerMenu extends React.Component{
    render () {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.auth}>
                    <TouchableOpacity style={styles.scanner}>
                        <Icon name='ios-qr-scanner' size={18}/>
                    </TouchableOpacity>
                    <Text style={styles.title}>登录后有新天地</Text>
                    <Text style={styles.tip}>让你体验私人定制</Text>
                    <View>
                        <TouchableOpacity>
                            <Text>注册</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text>登录</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {/*<View style={styles.menu}>DrawerMenu</View>*/}
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    auth: {
        paddingTop: 10,
        paddingBottom: 20
    },
    scanner: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    title: {
        fontSize: 16,
        fontWeight: 500
    },
    tip: {
        fontSize: 12,
        color: Theme.fontColor
    }
});
