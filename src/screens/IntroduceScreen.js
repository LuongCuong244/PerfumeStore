import React, { useState } from "react";
import {
    View,
    StyleSheet,
    Text,
    ScrollView,
} from 'react-native';

import LinearGradient from "react-native-linear-gradient";

export default function IntroduceScreen() {

    return (
        <LinearGradient
            style={{flex: 1}}
            colors={['#D6D6D6', '#BCBCBC']}
        >
            <ScrollView
                contentContainerStyle={{ flexGrow: 1, paddingBottom: 50 }}
            >
                <View style={styles.container}>
                    <Text style={styles.header} >{"SHOP NƯỚC HOA D2PERFUME"}</Text>
                    <Text style={[styles.normalText, { marginVertical: 10 }]} >
                        {"- Lời đầu tiên, Nước hoa Pháp D2perfume xin gửi lời chào, lời chúc sức khỏe, thành công và lời cảm ơn Quý khách hàng đã luôn ủng hộ chúng tôi trong suốt hơn 10 năm qua. Với hơn 10 năm kinh nghiệm, D2perfume  luôn mong muốn mang đến cho quý khách hàng những trải nghiệm mới về mùi hương cũng như sản phẩm tốt nhất với mức giá tốt nhất đến với người dùng."}
                    </Text>

                    <Text style={[styles.normalText, { marginTop: 10 }]} >{"Chúng tôi chuyên cung cấp các loại nước hoa Pháp cao cấp nhất trên thế giới với tất cả các thương hiệu nổi tiếng như : Chanel , Hermes , Tom ford, GUCCI, DIOR..."}</Text>

                    <Text style={[styles.normalText, { marginTop: 10 }]} >{"- Nguồn gốc hàng hoá xách tay Pháp  chính hãng sản xuất được thu mua từ công ty các trung tâm nước hoa uy tín nhất tại Pháp ( có hoá đơn mua hàng trực tiếp từ các gian hàng trên toàn Paris)."}</Text>

                    <Text style={[styles.normalText, { marginTop: 10 }]} >{"- Giá cả hầu hết các sản phẩm đều rẻ hơn giá niêm yết của cty bên Pháp vì lý do chúng tôi luôn mua hàng trong đợt giảm giá của hãng , và vì là đối tác thường xuyên nên bao giờ cũng có thẻ thành viên VIP được giảm giá 25-50% đối với tuỳ dòng sản phẩm. Do vậy các sản phẩm đến tay khách hàng luôn ở mức giá tốt nhất có thể."}</Text>

                    <Text style={[styles.normalText, { marginTop: 10 }]} >{"Hàng hoá đến tay khách hàng luôn đảm bảo chính hãng và chất lượng, khách hàng có quyền kiểm tra mùi hương , hoặc qua shop dùng thử trước khi mua hàng. "}</Text>

                    <Text style={[styles.normalText, { marginTop: 10 }]} >{"Ngoài ra chúng tôi có chính sách cho các shop nước hoa mỹ phẩm muốn làm đối tác."}</Text>

                    <Text style={[styles.normalText, { marginTop: 10 }]} >{"Giao hàng tận tay quý khách trên toàn quốc. Shop có miễn phí vận chuyển và gói quà đối với chai fullsize."}</Text>
                
                    <Text style={[styles.normalText, { marginTop: 10 }]} >{"Chúng tôi luôn muốn đem lại sự hài lòng đến với khách hàng, sự hài lòng cho khách hàng chính là thành công của chúng tôi."}</Text>
                </View >
            </ScrollView>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
    },
    header: {
        fontSize: 20,
        color: 'black',
        width: '100%',
        textAlign: 'center',
        marginTop: 15,
    },
    normalText: {
        fontSize: 17,
        color: 'black',
    }
})