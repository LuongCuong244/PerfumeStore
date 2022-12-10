import React, { useState } from "react";
import {
    View, 
    StyleSheet,
    Text,
    FlatList,
} from 'react-native';

import LinearGradient from "react-native-linear-gradient";
import PerfumeItem from "../components/PerfumeItem";
import SearchBar from "../components/Search";

import { perfumes } from "../data/perfumes";

export default function CartScreen(props) {

    const [data, setData] = useState(perfumes.filter((perfume) => {
        return perfume.isAddedToCart;
    }));

    return (
        <LinearGradient
            style={styles.container}
            colors={['#3EB4BD', '#8ACDDA']}
        >
            <View style={styles.contentContainer} >
                <SearchBar onClickSearchButton={(text) => {
                    setData(perfumes.filter((perfume) => {
                        return perfume.name.normalize().startsWith(text.trim().normalize()) && perfume.isAddedToCart;
                    }));
                }}/>
                
                <View style = {{width: '100%', marginVertical: 10, paddingLeft: 15}}>
                    <Text style = {{fontSize: 20, fontWeight: '500', color: 'white', }} >{"* Danh sách đã thêm của bạn"}</Text>
                </View>

                <View style = {styles.listViewBackground} >
                    <FlatList
                        data={data}
                        renderItem = {(item) => {

                            const onClick = () => {
                                props.switchScreenCallBack("PayScreen", "Thanh toán", item.item);
                            }
                            
                            return <PerfumeItem item = {item} onClick = {onClick} isPay = {true} />
                        }}
                    />
                </View>
            </View>
        </LinearGradient >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    contentContainer: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
    },
    listViewBackground: {
        flex: 1,
        width: '100%',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        paddingTop: 30,
        backgroundColor: 'rgba(255,255,255,0.6)',
    }
})