import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { Login } from 'src/screens'

const Stack = createStackNavigator()

const LoginStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name='Login' component={Login} />
  </Stack.Navigator>
)

export default LoginStack
