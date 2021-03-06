import React from 'react'
import { Modal, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { Text } from '../Text'
import { Icons } from '../Icons'
import { Row } from '../Row'
import { Column } from '../Column'
import { Button } from '../Button'

const ModalComponent = ({
  visible,
  handleClose,
  buttons = {},
  title,
  description,
  closeAndLeaveScreen = '',
  ...props
}) => {
  const navigation = useNavigation()

  return (
    <Modal visible={visible} transparent animationType='fade'>
      <TouchableWithoutFeedback onPress={handleClose}>
        <Column
          flex={1}
          backgroundColor='rgba(0,0,0,0.7)'
          px={16}
          alignItems='center'
          justifyContent='center'
        >
          <TouchableWithoutFeedback onPress={() => {}}>
            <Column backgroundColor='white' width='100%' p={24} pt={16}>
              <Row justifyContent='space-between' my={16}>
                <Text color='black' fontFamily='MontserratSemiBold' fontSize='22px'>
                  {title}
                </Text>
                <TouchableOpacity
                  onPress={
                    !!closeAndLeaveScreen
                      ? () => navigation.navigate(closeAndLeaveScreen)
                      : handleClose
                  }
                  style={{ alignSelf: 'flex-start' }}
                >
                  <Icons icon='clear' />
                </TouchableOpacity>
              </Row>
              <Text color='black' fontFamily='MontserratLight' fontSize='16px'>
                {description}
              </Text>
              {!!buttons.btn1 && (
                <Row justifyContent='space-between' marginTop='32px'>
                  <Button
                    onPress={buttons.btn1.onPress}
                    text={buttons.btn1.title}
                    variant='secondary'
                    width='47%'
                    height={40}
                  />
                  <Button
                    onPress={buttons.btn2.onPress}
                    text={buttons.btn2.title}
                    width='47%'
                    height={40}
                  />
                </Row>
              )}
            </Column>
          </TouchableWithoutFeedback>
        </Column>
      </TouchableWithoutFeedback>
    </Modal>
  )
}

export default ModalComponent
