import React from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
    FlatList,
    TouchableOpacity,
    SectionList
} from 'react-native'
const screenW = Dimensions.get('window').width;

class HSectionList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }

    render () {
        return (
            <SectionList
                renderItem={({ item, index, section }) => <Text key={index}>{item}</Text>}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={{ fontWeight: "bold" }}>{title}</Text>
                )}
                sections={[
                    { title: "Title1", data: ["item1", "item2"] },
                    { title: "Title2", data: ["item3", "item4"] },
                    { title: "Title3", data: ["item5", "item6"] }
                ]}
                keyExtractor={(item, index) => item + index}
            />

        )
    }
}

const styles = StyleSheet.create({

});

export default HSectionList



