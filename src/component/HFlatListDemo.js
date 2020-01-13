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
const screenW = Dimensions.get('window').width;

class HFlatListDemo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
           dataSource: [
               {
                   'id': '0001',
                   'image': require('./../../asset/images/timg.jpg'),
                   'title': '德国ookdsnkn奥丁个大麦啤酒500ml*4罐/组德国ookdsnkn奥丁个大麦啤酒500ml*4罐/组',
                   'price': 39
               },
               {
                   'id': '0002',
                   'image': require('./../../asset/images/timg.jpg'),
                   'title': '德国ookdsnkn奥丁个大麦啤酒500ml*4罐/组',
                   'price': 39
               },
               {
                   'id': '0003',
                   'image': require('./../../asset/images/timg.jpg'),
                   'title': '德国ookdsnkn奥丁个大麦啤酒500ml*4罐/组',
                   'price': 39
               },
               {
                   'id': '0004',
                   'image': require('./../../asset/images/timg.jpg'),
                   'title': '德国ookdsnkn奥丁个大麦啤酒500ml*4罐/组',
                   'price': 39
               },
               {
                   'id': '0005',
                   'image': require('./../../asset/images/timg.jpg'),
                   'title': '德国ookdsnkn奥丁个大麦啤酒500ml*4罐/组',
                   'price': 39
               },
               {
                   'id': '0006',
                   'image': require('./../../asset/images/timg.jpg'),
                   'title': '德国ookdsnkn奥丁个大麦啤酒500ml*4罐/组',
                   'price': 39
               },
               {
                   'id': '0007',
                   'image': require('./../../asset/images/timg.jpg'),
                   'title': '德国ookdsnkn奥丁个大麦啤酒500ml*4罐/组',
                   'price': 39
               },
               {
                   'id': '0008',
                   'image': require('./../../asset/images/timg.jpg'),
                   'title': '德国ookdsnkn奥丁个大麦啤酒500ml*4罐/组',
                   'price': 39
               }
           ]
        }
    }

    render () {
        return (
            <View>
                <FlatList
                    ListHeaderComponent={() => (
                        <Image source={require('./../../asset/images/timg.jpg')}
                               style={{
                                   width: screenW,
                                   height: 200
                               }}
                        />
                    )}
                    ListFooterComponent={() => (
                        <View>
                            <Image source={require('./../../asset/images/timg.jpg')}
                                   style={{
                                       width: screenW,
                                       height: 200
                                   }}
                            />
                        </View>
                    )}
                    data={this.state.dataSource}
                    renderItem={({item, index}) => this._renderRow(item, index)}
                    keyExtractor={(item, index) => item.id}

                />
            </View>

        )
    }

    _renderRow = (item, index) => {
        return (
            <TouchableOpacity style={{
                flexDirection: 'row',
                borderBottomWidth: 1,
                borderBottomColor: '#e8e8e8',
                padding: 10
            }}>
                {/*左边*/}
                <Image source={item.image} style={{width: 80, height: 80, backgroundColor: 'red'}}/>
                {/*右边*/}
                <View style={{
                    flex: 1,
                    marginLeft: 10,
                    marginRight: 10,
                    justifyContent: 'space-around'
                }}>
                    <Text style={{fontSize: 18}} numberOfLines={2}>{item.title}</Text>
                    <Text>${item.price}</Text>
                </View>
            </TouchableOpacity>
        )
    }

}

const styles = StyleSheet.create({
    rowBox: {
        // width: screenW,
        // height: 100,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        flexDirection: 'row',
        alignItems: 'center'
    }
})

export default HFlatListDemo



