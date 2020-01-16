import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Button,
    Dimensions,
    TouchableOpacity,
    ScrollView,
} from 'react-native'
const {width} = Dimensions.get('window');

export default class StopWatch extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            status: 0, //0 初始状态 1 计时状态 2 暂停状态
            showTime: '00:00:00',//初始显示的时间
            accumulateTime: 0,
            initialTime: 0,//初始计时的时间
            preTime: 0, //上一次计次的时间,
            record: []
        }
    }

    render () {
        return (
            <View style={styles.container}>
                <View style={styles.timerWrapper}>
                    <Text style={styles.timer}>{this.state.showTime}</Text>
                </View>
                <ScrollView>
                    {this._renderRecord(this.state.record)}
                </ScrollView>
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
    };
    _renderRecord = (record) => {
        return record.map((item, index) => {
            return (
                <View style={styles.record} key={index}>
                    <Text style={styles.recordText}>{index < 9 ? '0' + (index + 1): index + 1}</Text>
                    <Text style={styles.recordText}>+{item.diff}</Text>
                    <Text style={styles.recordText}>+{item.showTime}</Text>
                </View>
            )
        })
    }

    _formatTool = (time) => {
        const minute = Math.floor(time / 60000);
        const second = Math.floor((time - (minute * 60000)) / 1000);
        const millisecond = Math.floor((time % 1000) /10);
        return  (minute < 10? "0"+minute: minute)+":"+(second < 10? "0"+second: second)+"."+(millisecond < 10? "0"+millisecond: millisecond)
    };
    _activeInterval = (initialTime, accumulateTime) => {
        this.interval = setInterval( () => {
            let currentTime = (new Date()).getTime();
            let countingTime = currentTime + accumulateTime - initialTime;
            let showTime = this._formatTool(countingTime);
            this.setState({
                showTime: showTime,
                accumulateTime: countingTime
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
    _restartWatch = () => {
        let initialTime = (new Date()).getTime();
        let {accumulateTime} = this.state;

        this.setState({status: 1});
        this._activeInterval(initialTime, accumulateTime);
    };
    _addRecord = () => {
        //记录时间
        let currentTime = (new Date()).getTime();
        const {preTime, showTime} = this.state;
        console.log(currentTime, ' ',preTime);
        let formatDiff;
        if(preTime === 0){
            formatDiff =  showTime;
        }else{
            const diff = currentTime - preTime;
            formatDiff = this._formatTool(diff);
        }
        let item = {diff: formatDiff, showTime};
        let record = this.state.record;
        record.push(item);
        this.setState({
            preTime: currentTime, //记录上一次计次的时间
            record
        });
    };
    _clearRecord = () => {
        this.setState({
            status: 0,
            accumulateTime: 0,
            initialTime: 0,
            showTime: '00:00:00',
            record: []
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
    },
    record: {
        width: width,
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    recordText: {
       fontSize: 16
    }
});
