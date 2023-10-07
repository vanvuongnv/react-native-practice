import React from "react";
import { SafeAreaView, StatusBar, StyleSheet, View, Image, Text, TextInput, Button } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { SCREENS } from "../../helpers/constants";

const LoginPage = ({ navigation }) => {
    return (
        <SafeAreaView>
            <StatusBar backgroundColor={styles.statusBar.backgroundColor}
                barStyle='dark-content'
                animated={true} />

            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
                    <Text style={styles.logoTitle}>VnCare</Text>
                </View>
                <View style={styles.pageContainer}>
                    <Text style={styles.pageTitle}>Đăng nhập</Text>
                    <View style={styles.btnPhoneContainer} >
                        <Button title="Thay số điện thoại"/>
                    </View>
                    <View style={styles.formGroup}>
                        <Text style={styles.formLabel}>Số điện thoại</Text>
                        <TextInput style={styles.formControl} placeholder="Nhập số điện thoại" />
                    </View>
                    <View style={styles.formGroup}>
                        <Text style={styles.formLabel}>Mật khẩu</Text>
                        <TextInput style={styles.formControl} placeholder="Nhập mật khẩu" secureTextEntry={true}/>
                    </View>
                    <View style={styles.forgotPassContainer}>
                        <BouncyCheckbox
                            size={25}
                            fillColor="red"
                            unfillColor="#FFFFFF"
                            text="Ghi nhớ"
                            iconStyle={{ borderColor: "red" }}
                            innerIconStyle={{ borderWidth: 2 }}
                            textStyle={{ fontFamily: "JosefinSans-Regular" }}
                            onPress={(isChecked: boolean) => {}}
                        />
                        <Button title="Quên mật khẩu"/>
                    </View>
                    <View style={styles.btnPrimary}>
                        <Button title="Đăng nhập" color={styles.btnPrimary.color}/>
                    </View>
                    <View style={styles.btnOutlinePrimary}>
                        <Button title="Đăng ký" color={styles.btnOutlinePrimary.color}
                        onPress={() => navigation.navigate(SCREENS.REGISTER)}/>
                    </View>
                </View>
            </View>

        </SafeAreaView>
    )
}

export default LoginPage;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        paddingLeft: 5,
        paddingRight: 5
    },
    logo:{
        width:80,
        height:80
    },
    logoContainer:{
        marginTop: 20,
        marginBottom: 20,
        alignItems:'center'
    },
    logoTitle: {
        color: '#1B86CE',
        fontWeight: 'bold',
        fontSize: 31,
        marginTop: 24
    },
    statusBar: {
        backgroundColor: '#3BCCBB'
    },
    pageTitle: {
        fontSize: 17,
        fontWeight: '600',
        marginTop: 20,
        color: '#141414'
    },
    pageContainer: {
        alignSelf: 'stretch',
        alignItems: 'center'
    },
    btnPhoneContainer: {
        marginTop: 40,
        alignSelf: 'flex-end'
    },
    formGroup: {
        alignSelf: 'stretch',
        marginBottom: 10
    },
    formLabel: {
        fontWeight: '600',
        fontStyle: 'italic',
        color: '#757575',
        fontSize: 13
    },
    formControl: {
        paddingTop: 15,
        paddingBottom: 15,
        borderBottomColor: '#757575',
        borderBottomWidth: 1
    },
    forgotPassContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf:'stretch'
    },
    btnPrimary:{
        backgroundColor:'#3BCCBB',
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 15,
        alignSelf:'stretch',
        marginLeft: 15,
        marginRight: 15,
        padding: 7,
        marginTop: 10,
        borderRadius: 5
    },
    btnOutlinePrimary:{
        borderColor:'#3BCCBB',
        borderWidth: 1,
        color: '#3BCCBB',
        fontWeight: 'bold',
        fontSize: 15,
        alignSelf:'stretch',
        marginLeft: 15,
        marginRight: 15,
        padding: 7,
        marginTop: 10,
        borderRadius: 5
    }
})