import React from 'react'
import { View, Text } from 'react-native'
import {FlatList, StyleSheet} from 'react-native'

class List extends React.PureComponent {
    render() {
        const {title, content} = this.props
        return (
            <View>
                <View>
                    <Text style={styles.titleText}>{title}</Text>
                </View>
                <View>
                    <FlatList
                        data={ content }
                        horizontal= {true}
                        renderItem={({item}) => <Text>{item.title}</Text>}
                    >
                    </FlatList>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    dotStyle: {
        height: 0
    },
    carousel: {
        
    }
});

export default List;