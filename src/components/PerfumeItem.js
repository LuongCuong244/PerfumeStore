import React from "react";
import {
    View,
    StyleSheet,
    Image,
    Text,
    TouchableOpacity,
    ImageBackground,
} from 'react-native';

import { formatNumberToString } from "../converter";

export default function PerfumeItem({ item: { item, index }, onClick, isPay = false }) {
    return (
        <View style={styles.container} >
            <View style={styles.divider} />
            <View style={styles.content} >
                <ImageBackground style={styles.backgroundImage} resizeMode='cover' source={{ uri: item.cover }}>
                    <TouchableOpacity
                        onPress={onClick}
                        style={[
                            styles.buttonStyle,
                            {
                                backgroundColor: (item.isAddedToCart || isPay) ? 'rgba(0,200,0,0.8)' : 'rgba(200,200,200,0.8)',
                            }
                        ]}
                        activeOpacity={0.7}
                    >
                        <Text style={[
                            styles.textButton,
                            {
                                color: (item.isAddedToCart || isPay) ? 'white' : 'black',
                            }
                        ]} >{item.isAddedToCart ? isPay ? "Thanh toán" : "Bỏ thêm" : "Thêm"}</Text>
                    </TouchableOpacity>
                </ImageBackground>
                <View style={styles.detail} >
                    <View style={styles.bookDetail} >
                        <View style={styles.row} >
                            <Text style={styles.bookNameTitle} >{"Tên: "}</Text>
                            <Text style={styles.bookNameStyle} >{item.name}</Text>
                        </View>
                        <View style={styles.row} >
                            <Text style={styles.bookMakerTitle} >{"Hãng: "}</Text>
                            <Text style={styles.bookMakerStyle} >{item.maker}</Text>
                        </View>
                    </View>
                    <View style={styles.bottomContainer} >
                        <View style={styles.row}>
                            <Text style={styles.bookPriceTitle} >{"Giá: "}</Text>
                            <Text style={styles.bookPriceStyle} >{`${formatNumberToString(item.price)} đ`}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 10,
        flexDirection: 'column',
    },
    divider: {
        backgroundColor: '#C6C6C6',
        width: '100%',
        height: 0.5,
    },
    content: {
        width: '100%',
        flexDirection: 'row',
        marginVertical: 15,
    },
    detail: {
        flex: 1,
        height: 130,
        justifyContent: 'space-between',
        paddingHorizontal: 10
    },
    backgroundImage: {
        width: 130,
        height: 130,
        flexDirection: 'column-reverse',
    },
    bookDetail: {
        flex: 1,
        flexDirection: 'column',
    },
    row: {
        flexDirection: 'row',
        marginTop: 5,
    },
    bookNameTitle: {
        fontSize: 20,
        color: '#5C5C5C',
        fontWeight: 'bold',
    },
    bookNameStyle: {
        flex: 1,
        fontSize: 20,
        color: '#000000',
    },
    bookMakerTitle: {
        fontSize: 18,
        color: '#5C5C5C',
    },
    bookMakerStyle: {
        flex: 1,
        fontSize: 18,
        color: '#000000',
    },
    bottomContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    bookPriceTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#00516E',
    },
    bookPriceStyle: {
        fontSize: 22,
        color: '#00516E',
    },
    buttonStyle: {
        height: 35,
        width: '100%',
        backgroundColor: 'rgba(200,200,200,0.8)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textButton: {
        color: 'black',
        fontSize: 18,
        fontWeight: '500',
        letterSpacing: 1,
    },
});