import React from 'react'
import { Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { Text } from '../Text'
import { Icons } from '../Icons'
import { Row } from '../Row'
import { Column } from '../Column'

import theme from 'src/theme'

const Naver = ({ onEdit, onDelete, imageSize, naver, ...props }) => {
  const navigation = useNavigation()

  return (
    <Column {...props}>
      <TouchableOpacity onPress={() => navigation.navigate('NaverProfile', { naver })}>
        <Image
          style={{ width: imageSize, height: imageSize }}
          source={{ uri: naver.url }}
          resizeMode='cover'
        />
      </TouchableOpacity>
      <Text fontFamily='MontserratBold' marginTop={'8px'} color={theme.colors.black}>
        {naver.name}
      </Text>
      <Text fontFamily='MontserratLight' marginTop={'4px'} color={theme.colors.black}>
        {naver.job_role}
      </Text>

      <Row marginTop={'8px'}>
        <TouchableOpacity onPress={onDelete}>
          <Icons icon='trash' marginRight={16} />
        </TouchableOpacity>
        <TouchableOpacity onPress={onEdit}>
          <Icons icon='edit' />
        </TouchableOpacity>
      </Row>
    </Column>
  )
}

export default Naver
