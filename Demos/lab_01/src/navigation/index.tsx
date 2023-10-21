import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SCREENS } from "../helpers/constants";

import LoginPage from "../pages/login/LoginPage";
import RegisterPage from "../pages/register/RegisterPage";
import HomePage from "../pages/home/HomePage";
import DetailPage from "../pages/detail/DetailPage";

const Stack = createNativeStackNavigator()

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName={SCREENS.HOME}>
                <Stack.Screen name={SCREENS.HOME} component={HomePage} />
                <Stack.Screen name={SCREENS.LOGIN} component={LoginPage} />
                <Stack.Screen name={SCREENS.REGISTER} component={RegisterPage} />
                <Stack.Screen name={SCREENS.DETAIL} component={DetailPage} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation