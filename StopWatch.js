import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Button,
    Dimensions,
    TouchableOpacity
} from 'react-native'
const {width} = Dimensions.get('window');

export default class StopWatch extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            status: 0, //0初始状态 1计时状态 2 暂停状态
            showTime: '00:00:00',//初始显示的时间
            accumulateTime: 0,
            initialTime: 0,

        }
    }

    render () {
        return (
            <View style={styles.container}>
                <View style={styles.timerWrapper}>
                    <Text style={styles.timer}>{this.state.showTime}</Text>
                </View>
                {this._render()}
            </View>
        )
    }
    _render = () => {
        switch (this.state.status) {
            case 0:
                return this._render_0();
            case 1:
                return this._render_1();
            case 2:
                return this._render_2();
        }
    };
    _render_0 = () => {
        return (
            <View style={styles.buttonWrapper}>
                <TouchableOpacity onPress={() => this._startWatch()}>
                    <Text>开始</Text>
                </TouchableOpacity>
            </View>
        )
    };
    _render_1 = () => {
        return (
            <View style={styles.buttonWrapper}>
                <TouchableOpacity onPress={() => this._addRecord()}>
                    <Text>计次</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this._stopWatch()}>
                    <Text>暂停</Text>
                </TouchableOpacity>
            </View>
        )
    };
    _render_2 = () => {
        return (
            <View style={styles.buttonWrapper}>
                <TouchableOpacity onPress={() => this._clearRecord()}>
                    <Text>清空</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this._restartWatch()}>
                    <Text>启动</Text>
                </TouchableOpacity>
            </View>
        )
    }
    _activeInterval = (initialTime, accumulateTime) => {
        this.interval = setInterval( () => {
            let currentTime = (new Date()).getTime();
            let countingTime = currentTime + accumulateTime - initialTime;
            let minute = Math.floor(countingTime / 60000);
            let second = Math.floor((countingTime - (minute * 60000)) / 1000);
            let millisecond = Math.floor((countingTime % 1000) /10);
            this.setState({
                showTime: (minute < 10? "0"+minute: minute)+":"+(second < 10? "0"+second: second)+"."+(millisecond < 10? "0"+millisecond: millisecond),
                accumulateTime: countingTime,
                currentTime: currentTime
            });
        }, 10);
    };
    _startWatch = () => {
        let initialTime = (new Date()).getTime();
        let {accumulateTime} = this.state;
        this.setState({
            status: 1,
            initialTime
        });
        this._activeInterval(initialTime, accumulateTime);
    };

    _stopWatch = () => {
        this.setState({status: 2});
        clearInterval(this.interval);
    };
    _addRecord = () => {
        console.log('add');
    };
    _restartWatch = () => {
        let initialTime = (new Date()).getTime();
        this.setState({status: 1});
        let {accumulateTime} = this.state;
        this._activeInterval(initialTime, accumulateTime);
    };
    _clearRecord = () => {
        this.setState({
            status: 0,
            accumulateTime: 0,
            initialTime: 0
        });
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    timerWrapper: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    timer: {
        fontSize: 32
    },
    buttonWrapper: {
        flex: 1,
        width: width,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    }
});
