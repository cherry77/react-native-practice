import React from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
    FlatList,
    TouchableOpacity
} from 'react-native'
import axios from 'axios'
import HSwiper from './Swiper/index'

const screenW = Dimensions.get('window').width;

class HNet extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            dataSource: [],
            imageDataArr: []
        }
    }

    render () {
        return (
            <FlatList
                ListEmptyComponent={() => (<Text>Loading......</Text>)}
                ListHeaderComponent={() => (
                    <HSwiper imageDataArr={this.state.imageDataArr}/>
                )}
                data={this.state.dataSource}
                renderItem={({item, index}) => this._renderRow(item, index)}
                keyExtractor={(item, index) => item.id}

            />
        )
    }
    componentDidMount () {
        //1.发起网络请求(fetch)
        /*fetch('http://demo.itlike.com/web/xlmc/api/homeApi')
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
            })
            .catch((error) => {
                console.error(error);
            });*/
        // this._getHomeFromApi();
        //1.发起网络请求(axios)
        axios('http://demo.itlike.com/web/xlmc/api/homeApi')
            .then(response => {
                let icon_list = response.data.data.list[0].icon_list;
                let product_list = response.data.data.list[12].product_list;
                this.setState({
                    imageDataArr: icon_list,
                    dataSource: product_list
                })
            })
            .catch(error => {
                console.log(error);
            }).finally( () => {

            })
    }
    // 注意这个方法前面有async关键字
    async _getHomeFromApi(){
        try {
            // 注意这里的await语句，其所在的函数必须有async关键字声明
            let response = await fetch(
                'http://demo.itlike.com/web/xlmc/api/homeApi',
            );
            let responseJson = await response.json();
            // console.log(responseJson);
            // return responseJson.movies;
        } catch (error) {
            console.error(error);
        }
    }

    _renderRow = (item, index) => {
        return (
            <TouchableOpacity
                style={{
                    width: screenW,
                    height: 140,
                    borderBottomWidth: 1,
                    borderBottomColor: '#e8e8e8',
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: 10
                }}
                key={index}
            >
                <Image source={{uri: item.small_image}} style={{width: 120, height: 120}}/>
                <View>
                    <Text>{item.product_name}</Text>
                    <Text>{item.price}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({

})

export default HNet



