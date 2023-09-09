import React from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";

const HomePage = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Xin chào mọi người
            </Text>
            <Image 
                source={ {uri: 'https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-1/352741917_2786211904847379_440591286711943252_n.jpg?stp=dst-jpg_p480x480&_nc_cat=111&ccb=1-7&_nc_sid=fe8171&_nc_ohc=ARo9LJjRnbsAX9p3SB1&_nc_ht=scontent.fdad1-3.fna&oh=00_AfDu2Nxv52n2g39Sf1tkoG9AlEosojHgye8UCJeXyyOJig&oe=65011DAE'}}
                style={styles.avatar}
            />
            <View style={styles.btn}>
                <Button 
                    color={'#ffffff'}
                    title="Click Me!" />
            </View>
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
    }
})

export default HomePage