import React from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions
} from 'react-native'

class HImage extends React.Component{
    constructor(props){
        super(props);
    }
    _renderItem = () => {
        let screenW = Dimensions.get('window').width;
        let cols = 3,boxW = 100, boxH = 120;
        let hMargin = (screenW - cols * boxW)/(cols + 1);
        let vMargin = 20;
        let dataArr = require('./../../asset/localData/packageData');
        let itemArr = [];
        for(let i = 0; i < dataArr.length; i++){
            itemArr.push(
                <View key={i} style={{
                    width: boxW,
                    height: boxH,
                    backgroundColor: 'green',
                    marginLeft: hMargin,
                    marginTop: vMargin,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Image
                        source={require('./../../asset/images/timg.jpg')}
                        style={{ width: 80, height: 80 }}
                    />
                    <Text>{dataArr[i].name}</Text>
                </View>
            );
        }
        return itemArr;
    }
    render () {
        return (
            <View style={styles.container}>
                {this._renderItem()}
            </View>
        )
    }
}

export default HImage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
})

