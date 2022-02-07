import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { Home, CreateNaver } from 'src/screens'

const Stack = createStackNavigator()

const HomeSack = () => (
  <Stack.Navigator>
    <Stack.Screen name='Home' component={Home} />
    <Stack.Screen name='CreateNaver' component={CreateNaver} />
  </Stack.Navigator>
)

export default HomeSack
