import React from 'react'
import styled from 'styled-components/native'
import { Image, TouchableOpacity } from 'react-native'

import { Text } from '../Text'
import { Icons } from '../Icons'
import { Row } from '../Row'
import { Column } from '../Column'
import theme from '../../theme'

const Naver = ({ href, title, description, onEdit, onDelete, ...props }) => {
  return (
    <Column {...props}>
      <Image
        style={{ width: 200, height: 200 }}
        source={{
          uri: 'https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fi.ytimg.com%2Fvi%2F2EfHtzauHcM%2Fmaxresdefault.jpg'
        }}
        resizeMode='cover'
      />
      <Text>{title}</Text>
      <Text>{description}</Text>
      <Row>
        <TouchableOpacity>
          <Icons icon='trash' />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icons icon='edit' />
        </TouchableOpacity>
      </Row>
    </Column>
  )
}

export default Naver
