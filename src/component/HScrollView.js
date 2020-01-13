import React from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
    ScrollView
} from 'react-native'
import Button from './Button'

class HScrollView extends React.Component{
    constructor(props){
        super(props);

    }
    _renderItem = () => {
        //1.颜色数组
        let colorArr = ['red', 'yellow', 'blue','pink','red', 'yellow', 'blue','pink'];
        //2.组件数组
        let itemArr = [];
        //3.遍历
        for(let i = 0; i < colorArr.length; i ++){
            itemArr.push(
                <View
                    style={{
                        width: Dimensions.get('window').width,
                        height: 300,
                        backgroundColor: colorArr[i]
                    }}
                    key={i}
                >
                    <Text>{i}</Text>
                </View>
            )
        }
        return itemArr;
    }
    render () {
        return (
            <View>
                <ScrollView
                    pagingEnabled={true}
                    horizontal={true}
                    showsHorizontalScrollIndicator={true}
                    scrollEnabled={false}
                >
                    {this._renderItem()}
                </ScrollView>
            </View>

        )
    }
}
const styles = StyleSheet.create({

})

export default HScrollView



