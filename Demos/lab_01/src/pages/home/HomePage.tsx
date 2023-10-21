import React, { useEffect, useState } from "react";
import { Button, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { StudentModel } from "../../models/student.model";
import { SCREENS } from "../../helpers/constants";

type ItemProps = {
    item: StudentModel,
    onPress: () => void
}
const HomePage = ({navigation}) => {
    
    const [studentName, setStudentName] = useState('')

    useEffect(() => {
        if (studentName !== '') {
            navigation.navigate(SCREENS.DETAIL, {
                studentName: studentName
            })
        }
    }, [studentName]);

    const students = Array<StudentModel>();
    students.push({
        name: 'vuong',
        avatar: '../../assets/images/logo.png',
        dateOfBirth: new Date(2020, 10, 10)
    })
    students.push({
        name: 'dieu',
        avatar: '../../assets/images/logo.png',
        dateOfBirth: new Date(2020, 10, 10)
    })
    students.push({
        name: 'khue',
        avatar: '../../assets/images/logo.png',
        dateOfBirth: new Date(2020, 10, 10)
    })
    students.push({
        name: 'an',
        avatar: '../../assets/images/logo.png',
        dateOfBirth: new Date(2020, 10, 10)
    })
    
    const StudentItem = ({item, onPress}: ItemProps) => (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.studentContainer}>
                <Text>{item.name}</Text>
                <Text>{item.dateOfBirth.toLocaleString()}</Text>
            </View>
        </TouchableOpacity>
    )
    

    return (
        <View>
            <Text>Danh sach sinh vien</Text>
            <FlatList 
                data={students}
                renderItem={({item}) => <StudentItem item={item} onPress={() => setStudentName(item.name)}  />}
                keyExtractor={(item: StudentModel) => item.name} />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        color: 'red',
    },
    btn: {
        borderColor: '#176B87',
        backgroundColor: '#176B87',
        color: '#ffffff',
        width: 200,
        marginTop: 10
    },
    container: {
        padding: 10,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: 500,
        backgroundColor: '#EEEEEE'
    },
    avatar: {
        width: 150,
        height: 150
    },
    studentContainer: {
        padding: 10,
        borderBottomColor: '#EEEEEE',
        borderBottomWidth: 1
    }
})

export default HomePage