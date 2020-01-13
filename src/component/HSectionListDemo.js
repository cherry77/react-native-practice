import React from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
    SectionList,
    TouchableOpacity
} from 'react-native'
const screenW = Dimensions.get('window').width;

// 1.引入本地数据
const carDataArr = require('./../../asset/localData/Car');

class HSectionListDemo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            dataSource: carDataArr
        }
    }

    render () {
        return (
            <SectionList
                renderItem={({item, index, section}) => this._renderRow(item, index, section)}
                renderSectionHeader={ ({ section: { title } }) => this._renderSectionHeader(title) }
                sections={this.state.dataSource.total}
                keyExtractor={(item, index) => item + index}
            />

        )
    }
    _renderRow = (rowData, rowId, section) => {
        return (
            <TouchableOpacity style={styles.cellStyle}>
                <Image
                    source={require('./../../asset/images/timg.jpg')}
                    style={styles.imgStyle}/>
                <Text>{rowData.name}</Text>
            </TouchableOpacity>
        )
    }
    _renderSectionHeader = (title) => {
        return (
            <View style={styles.sectionStyle}>
                <Text>{title}</Text>
            </View>
        )
    }


}

const styles = StyleSheet.create({
    sectionStyle: {
        backgroundColor: '#eee',
        height: 30,
        justifyContent: 'center',
        paddingLeft: 8
    },
    cellStyle: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#e8e8e8',
        alignItems: 'center',
        marginLeft: 8

    },
    imgStyle: {
        width: 80,
        height: 80,
        marginRight: 10
    }
})

export default HSectionListDemo



