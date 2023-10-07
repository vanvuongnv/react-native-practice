import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SCREENS } from "../helpers/constants";

import LoginPage from "../pages/login/LoginPage";
import RegisterPage from "../pages/register/RegisterPage";

const Stack = createNativeStackNavigator()

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName={SCREENS.LOGIN}>
                <Stack.Screen name={SCREENS.LOGIN} component={LoginPage} />
                <Stack.Screen name={SCREENS.REGISTER} component={RegisterPage} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation