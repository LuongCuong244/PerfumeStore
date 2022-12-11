import React, { useState } from "react";
import {
    View,
    StyleSheet,
    Image,
    Text,
    TouchableOpacity,
    Alert
} from 'react-native';

import LinearGradient from "react-native-linear-gradient";
import { formatNumberToString } from "../converter";
import { user } from "../data/user";

export default function PayScreen(props) {

    let perfumeItem = props.params;

    const [quantity, setQuantity] = useState(1); // state lưu giữ số lượng cuốn sách muốn mua
    const [isPayByMyWallet, setPayByMyWallet] = useState(true); // để kiểm tra xem có phải trường "Ví của tôi" được chọn, giá trị ban đầu là true

    return (
        <LinearGradient
            style={styles.screenStyle}
            colors={['#D6D6D6', '#BCBCBC']}
        >
            <View style={styles.container} >
                <View style={styles.divider} />
                <View style={styles.content} >
                    <Image style={styles.image} resizeMode='cover' source={{ uri: perfumeItem.cover }} />
                    <View style={styles.detail} >
                        <View style={styles.perfumeDetail} >
                            <View style={styles.row} >
                                <Text style={styles.perfumeNameTitle} >{"Tên: "}</Text>
                                <Text style={styles.perfumeNameStyle} numberOfLines={1}>{perfumeItem.name}</Text>
                            </View>
                            <View style={styles.row} >
                                <Text style={styles.perfumeMakerTitle} >{"Hãng: "}</Text>
                                <Text style={styles.perfumeMakerStyle} numberOfLines={1}>{perfumeItem.maker}</Text>
                            </View>
                        </View>

                        <LinearGradient
                            style={{ justifyContent: 'center', alignItems: 'center', width: '70%', height: 45, borderRadius: 10 }}
                            colors={['#4CEB90', '#79DCA7']}
                        >
                            <Text style={styles.perfumeUnitPrice} >{`${formatNumberToString(perfumeItem.price)} đ`}</Text>
                        </LinearGradient>

                        <View style={styles.bottomContainer} >
                            <View style={styles.row}>
                                <View style={styles.quantityButtonsContainer} >
                                    <TouchableOpacity
                                        style={styles.minusButton}
                                        activeOpacity={0.7}
                                        onPress={() => {
                                            quantity > 1 && setQuantity(quantity - 1);
                                        }}
                                    >
                                        <Text style={styles.operatorText} >-</Text>
                                    </TouchableOpacity>
                                    <Text style={styles.quantityText} >{quantity}</Text>
                                    <TouchableOpacity
                                        style={styles.plusButton}
                                        activeOpacity={0.7}
                                        onPress={() => {
                                            setQuantity(quantity + 1);
                                        }}
                                    >
                                        <Text style={styles.operatorText} >+</Text>
                                    </TouchableOpacity>

                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.divider} />

                <Text style={styles.totalAmount} >{`${formatNumberToString(quantity * perfumeItem.price)} đ`}</Text>

                <View style={styles.divider} />

                <View style={{ width: '100%' }} >
                    <Text style={styles.payMethod}>{"Chọn hình thức thanh toán"}</Text>
                </View>

                <TouchableOpacity
                    style = {{width: '100%'}}
                    activeOpacity = {1}
                    onPress = {() => {
                        setPayByMyWallet(true);
                    }}
                >
                    <View style={styles.payOptionsBackground} >
                        <View style={styles.outsideCircle}>
                            {
                                isPayByMyWallet && ( // thanh toán bằng "Ví của tôi" thì hiện chấm đen
                                    <View style={styles.blackDot} />
                                )
                            }
                        </View>
                        <Text style={styles.amountRemaining} >{`Số dư: ${formatNumberToString(user.amountRemaining)}`}</Text>
                        <Text style={styles.payMethodText} >{"Ví của tôi"}</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style = {{width: '100%'}}
                    activeOpacity = {1}
                    onPress = {() => {
                        setPayByMyWallet(false);
                    }}
                >
                    <View style={styles.payOptionsBackground} >
                        <View style={styles.outsideCircle}>
                            {
                                isPayByMyWallet == false && ( // không phải thanh toán bằng "Ví của tôi" thì là thanh toán bằng "Thanh toán khi nhận hàng"

                                    <View style={styles.blackDot} />

                                )
                            }
                        </View>
                        <Text style={styles.payMethodText} >{"Thanh toán khi nhận hàng"}</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.payButtonStyle}
                    activeOpacity={0.7}
                    onPress={() => {

                        if(isPayByMyWallet){
                            if (user.amountRemaining < (quantity * perfumeItem.price)) { // không đủ tiền
                                return Alert.alert("Lỗi", "Bạn không đủ tiền để thanh toán đơn hàng này!");
                            }
                            user.amountRemaining -= quantity * perfumeItem.price; // thanh toán và trừ tiền
                        }

                        // biến perfumeItem hiện tại đang cùng được tham chiếu đến phần tử trong perfumes.js, nên nếu thay đổi perfumeItem thì phần tử đó cũng được thay đổi theo
                        perfumeItem.isAddedToCart = false; // xóa khỏi giỏ hàng
                        Alert.alert("Thành công", "Đơn hàng đã hoàn tất. Đi tới giỏ hàng!", [
                            {
                                text: "Oki",
                                onPress: () => {
                                    props.switchScreenCallBack("CartScreen", "Giỏ hàng"); // đi tới màn giỏ hàng
                                }
                            }
                        ])
                    }}
                >
                    <LinearGradient
                        style={{ justifyContent: 'center', alignItems: 'center', flex: 1, borderRadius: 25 }}
                        colors={['#48B8CE', '#009BB3']}
                    >
                        <Text style={styles.payLabel} >{"Thanh toán"}</Text>
                    </LinearGradient>

                </TouchableOpacity>
            </View>
        </LinearGradient >
    )
}

const styles = StyleSheet.create({
    screenStyle: {
        flex: 1,
        flexDirection: 'column',
    },
    container: {
        flex: 1,
        width: '100%',
        paddingHorizontal: 10,
        flexDirection: 'column',
        marginTop: 10,
        alignItems: 'center',
    },
    divider: {
        backgroundColor: 'white',
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
        height: 130 * 1.36,
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingHorizontal: 10
    },
    image: {
        width: 130,
        height: 130 * 1.36,
    },
    perfumeDetail: {
        flexDirection: 'column',
    },
    row: {
        flexDirection: 'row',
        marginTop: 5,
    },
    perfumeNameTitle: {
        fontSize: 20,
        color: '#5C5C5C',
        fontWeight: 'bold',
    },
    perfumeNameStyle: {
        flex: 1,
        fontSize: 20,
        color: '#000000',
    },
    perfumeMakerTitle: {
        fontSize: 18,
        color: '#5C5C5C',
    },
    perfumeMakerStyle: {
        flex: 1,
        fontSize: 18,
        color: '#000000',
    },
    bottomContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    perfumeUnitPrice: {
        fontSize: 25,
        color: 'white',
    },
    quantityButtonsContainer: {
        width: 120,
        height: 40,
        borderRadius: 5,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderWidth: 0.5,
        borderColor: 'gray'
    },
    minusButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 0.5,
        borderRightColor: 'gray'
    },
    plusButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderLeftWidth: 0.5,
        borderLeftColor: 'gray'
    },
    operatorText: {
        fontSize: 25,
        color: 'gray',
    },
    quantityText: {
        flex: 1,
        fontSize: 20,
        color: 'black',
        fontWeight: '500',
        textAlign: 'center',
        top: 5,
    },
    totalAmount: {
        fontSize: 37,
        marginVertical: 10,
        color: '#707070',
        fontWeight: '500',
    },
    payMethod: {
        fontSize: 20,
        color: 'black',
        marginTop: 15,
        fontStyle: 'italic'
    },
    payOptionsBackground: {
        backgroundColor: 'rgba(255,255,255,0.72)',
        width: '100%',
        height: 50,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: 15,
    },
    outsideCircle: {
        width: 18,
        height: 18,
        borderRadius: 9,
        borderWidth: 1,
        borderColor: 'rgba(50,50,50,0.5)',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    blackDot: {
        width: 7,
        height: 7,
        borderRadius: 5,
        backgroundColor: 'rgb(50,50,50)',
    },
    payMethodText: {
        fontSize: 20,
        color: 'rgb(50,50,50)',
        marginLeft: 15,
    },
    amountRemaining: {
        fontSize: 16,
        color: '#2AAC88',
        position: 'absolute',
        top: 0,
        right: 0,
        paddingRight: 5,
        paddingTop: 2,
    },
    payButtonStyle: {
        width: 170,
        height: 50,
        borderRadius: 50,
        marginTop: 20
    },
    payLabel: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        letterSpacing: 0.5
    }
});