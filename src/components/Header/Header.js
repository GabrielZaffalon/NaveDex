import { DrawerActions, useNavigation } from '@react-navigation/native'

import React, { useState } from 'react'
import { View, TouchableOpacity } from 'react-native'

import { Text, Row, Column } from 'src/components'
import { Icons } from '../Icons'

const Header = ({ backHeader = false }) => {
  const navigation = useNavigation()

  return (
    <Row
      width='100%'
      justifyContent='space-between'
      p={16}
      elevation={3}
      bg='white'
      alignItems='center'
    >
      {backHeader ? (
        <TouchableOpacity
          onPress={() => {
            navigation.goBack()
          }}
        >
          <Icons icon='back' />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => {
            navigation.dispatch(DrawerActions.toggleDrawer())
          }}
        >
          <Icons icon='menu' />
        </TouchableOpacity>
      )}

      <Icons icon='logo' width='124.8px' height='32px' />

      <Column width={24} />
    </Row>
  )
}

export default Header
