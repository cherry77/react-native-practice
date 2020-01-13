import React from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
    Switch
} from 'react-native'
import Button from './Button'

const {width, height} = Dimensions.get('window');

//引入本地数据
const dataArr = require('./../../asset/localData/packageData');

class HImage9 extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            shopArr : [],
            //开关的状态
            on: false
        }

    }
    _addGood = (enableCallback) => {
        // 1.定义变量
        let cols = 3, shopW = 100, shopH = 120;

        //2.取出下标
        let index = this.state.shopArr.length;
        if(index >= 9){
            alert('购物车已满！');
            return;
        }

        //3.求出当前要创建的盒子所在的行和列
        let row = Math.floor(index / cols);
        let col = Math.floor(index % cols);

        //4.左边和上边
        let xSpace = (0.9 * width - cols * shopW) / (cols - 1);
        let ySpace = (0.7 * height - 3 * shopH) / 2;

        let left = col * (shopW + xSpace);
        let top = row * (shopW + ySpace);

        //5.创建盒子
        let shopView = (
            <View
                key={index}
                style={{
                    position: 'absolute',
                    left,
                    top,
                    width: shopW,
                    height: shopH,
                    alignItems: 'center'
                }}
            >
                <Image
                    source={require('./../../asset/images/timg.jpg')}
                    style={{width: shopW, height: shopH}}
                />
                <Text>{dataArr[index].name}</Text>
            </View>
        );

        //6.更新状态机
        let tempArr = this.state.shopArr;
        tempArr.push(shopView);
        this.setState({
            shopArr: tempArr
        }, enableCallback());
    }
    _removeGood = (enableCallback) => {
        //1.取出下标
        let tempArr = this.state.shopArr;
        if(tempArr.length === 0){
            alert('未添加任何商品！');
            enableCallback();
            return;
        }

        //2.从尾部移除
        tempArr.pop();

        //3.更新状态机
        this.setState({
            shopArr: tempArr
        }, enableCallback());
    }
    render () {
        return (
            <View style={styles.container}>
                {/*上部分*/}
                <View style={styles.topViewStyle}>
                    <Button
                        text="添加商品"
                        bgcolor="green"
                        onPress={this._addGood}
                    />
                    <Button
                        text="删除商品"
                        bgcolor="red"
                        onPress={this._removeGood}
                    />
                    <Switch
                        value={this.state.on}
                        onValueChange={() => this.setState({on: !this.state.on})}
                    />
                </View>
                {/*下部分*/}
                <View style={styles.bottomViewStyle}>
                    {this.state.shopArr}
                </View>
            </View>

        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'skyblue'
    },
    topViewStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20
    },
    bottomViewStyle:{
        width: 0.9 * width,
        height: 0.7 * height,
        backgroundColor: '#fff',
        marginLeft: 0.05 * width,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default HImage9



