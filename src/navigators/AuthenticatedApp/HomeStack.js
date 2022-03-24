import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'

import { Home, CreateNaver, NaverProfile } from 'src/screens'
import { DrawerContent } from 'src/components'

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

const HomeStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name='Home' component={Home} />
    <Stack.Screen name='NaverProfile' component={NaverProfile} />
    <Stack.Screen name='CreateNaver' component={CreateNaver} />
  </Stack.Navigator>
)

const HomeDrawer = () => (
  <Drawer.Navigator
    screenOptions={{ headerShown: false }}
    drawerContent={props => <DrawerContent {...props} />}
    drawerPosition='right'
  >
    <Drawer.Screen name='HomeDrawer' component={HomeStack} />
  </Drawer.Navigator>
)

export default HomeDrawer
