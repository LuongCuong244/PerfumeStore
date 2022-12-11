import React, { useState } from "react";
import {
    View, 
    StyleSheet,
    Image,
    FlatList,
    Text
} from 'react-native';

import LinearGradient from "react-native-linear-gradient";
import PerfumeItem from "../components/PerfumeItem";
import SearchBar from "../components/Search";

import { perfumes } from "../data/perfumes";

export default function ProductScreen(props) {

    const [data, setData] = useState(perfumes);

    return (
        <LinearGradient
            style={styles.container}
            colors={['#D6D6D6', '#BCBCBC']}
        >
            <View style={styles.contentContainer} >
                <SearchBar onClickSearchButton={(text) => {
                    setData(perfumes.filter((perfume) => {
                        return perfume.name.normalize().startsWith(text.trim().normalize());
                    }));
                }}/>
                <Image 
                    source={{uri: 'https://nuochoarosa.com/wp-content/uploads/2020/03/niche-perfume-brand-tom-daxon-le-labo-SCENTS_1200x672_acf_cropped.jpg'}} 
                    style = {{width: '95%', height: 100, marginVertical: 10}}
                    resizeMode = {"cover"}
                />
                <Text style = {{fontSize: 20, marginVertical: 5, color: 'rgb(120,120,120)', fontWeight: 'bold', letterSpacing: 0.5}} >{"Tất cả sản phẩm"}</Text>
                <View style = {styles.listViewBackground} >
                    <FlatList
                        data={data}
                        renderItem = {(item) => {

                            const onClick = () => {
                                item.item.isAddedToCart = !item.item.isAddedToCart;
                                setData([...data])
                            }
                            
                            return <PerfumeItem item = {item} onClick = {onClick} />
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