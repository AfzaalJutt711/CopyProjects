import React from 'react'
import { Text, View } from 'react-native'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

import SignUp from '../screens/authStack/SignUp'
import Login from '../screens/authStack/Login'

const Stack = createNativeStackNavigator()

function AuthStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
    )
}

export default AuthStack
