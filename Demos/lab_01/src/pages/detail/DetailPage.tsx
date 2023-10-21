import React from "react";
import { Button, Text, View } from "react-native";

const DetailPage = ({route, navigation}) => {
    const { studentName } = route.params
    return (
        <View>
            <Text>
                Xin chao {studentName}
            </Text>
            <Button title="Back to list"
                    onPress={() =>navigation.goBack()} />
        </View>
    )
}

export default DetailPage