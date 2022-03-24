import React from 'react'
import { Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { Text } from '../Text'
import { Icons } from '../Icons'
import { Row } from '../Row'
import { Column } from '../Column'

import theme from 'src/theme'

const Naver = ({ uri, title, description, onEdit, onDelete, imageSize, naver, ...props }) => {
  const navigation = useNavigation()

  return (
    <Column {...props}>
      <TouchableOpacity onPress={() => navigation.navigate('NaverProfile', { naver })}>
        <Image
          style={{ width: imageSize, height: imageSize }}
          source={{ uri }}
          resizeMode='cover'
        />
      </TouchableOpacity>
      <Text fontFamily='MontserratBold' marginTop={'8px'} color={theme.colors.black}>
        {title}
      </Text>
      <Text fontFamily='MontserratLight' marginTop={'4px'} color={theme.colors.black}>
        {description}
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
