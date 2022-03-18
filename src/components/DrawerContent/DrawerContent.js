import React from 'react'
import { TouchableOpacity } from 'react-native'

import { DrawerActions } from '@react-navigation/native'

import { useUser } from 'src/context'

import { Text } from '../Text'
import { Column } from '../Column'
import { Icons } from '../Icons'
import { Row } from '../Row'

const DrawerContent = ({ navigation }) => {
  const { logout } = useUser()

  return (
    <Column bg='white' flex={1}>
      <Row py={20} px={16}>
        <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
          <Icons icon='menu' />
        </TouchableOpacity>
      </Row>
      <Column width='100%' alignItems='center' justifyContent='center' flex={1}>
        <TouchableOpacity onPress={() => navigation.navigate('CreateNaver')}>
          <Text fontFamily='MontserratSemiBold' color='black' fontSize='22px'>
            Navers
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={logout}>
          <Text fontFamily='MontserratSemiBold' marginTop={24} color='black' fontSize='22px'>
            Sair
          </Text>
        </TouchableOpacity>
      </Column>
    </Column>
  )
}

export default DrawerContent
