import React, { useState } from 'react'
import { View, ScrollView, TouchableOpacity, Dimensions, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useIsFocused } from '@react-navigation/native'

import { formatDistanceStrict } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Text, Row, Modal, Header, Button, Column } from 'src/components'
import { deleteNavers } from 'src/services'

const NaverProfile = ({ route }) => {
  const [isConfirmingDeletion, setIsConfirmingDeletion] = useState(false)
  const [hasSuccessfullyDeleted, setHasSuccessfullyDeleted] = useState(false)
  const [failToDeleteNaver, setFailToDeleteNaver] = useState(false)

  const { naver } = route.params

  const navigation = useNavigation()

  const width = Dimensions.get('screen').width
  const height = width * 0.8

  const deletingNaver = async () => {
    try {
      await deleteNavers(naver.id)

      setHasSuccessfullyDeleted(true)

      navigation.goBack()
    } catch (error) {
      setFailToDeleteNaver(true)

      console.tron.log(error)
    } finally {
      setIsConfirmingDeletion(false)
    }
  }

  return (
    <Column style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Header backHeader />
      <ScrollView>
        <Image source={{ uri: naver.url }} style={{ width, height }} />
        <Column mx={16}>
          <Text fontFamily='MontserratSemiBold' fontSize={22} color='black' marginTop={24}>
            {naver.name}
          </Text>
          <Text fontFamily='MontserratLight' fontSize={16} color='black' marginTop='4px'>
            {naver.job_role}
          </Text>

          <Text fontFamily='MontserratSemiBold' fontSize={16} color='black' marginTop={24}>
            Idade
          </Text>
          <Text fontFamily='MontserratLight' fontSize={16} color='black' marginTop='4px'>
            {formatDistanceStrict(new Date(naver.birthdate), new Date(), {
              addSuffix: false,
              locale: ptBR
            })}
          </Text>

          <Text fontFamily='MontserratSemiBold' fontSize={16} color='black' marginTop={24}>
            Tempo de empresa
          </Text>
          <Text fontFamily='MontserratLight' fontSize={16} color='black' marginTop='4px'>
            {formatDistanceStrict(new Date(naver.admission_date), new Date(), { locale: ptBR })}
          </Text>

          <Text fontFamily='MontserratSemiBold' fontSize={16} color='black' marginTop={24}>
            Projetos que participou
          </Text>
          <Text fontFamily='MontserratLight' fontSize={16} color='black' marginTop='4px'>
            {naver.project}
          </Text>
        </Column>

        <Row mx={16} my={36}>
          <Button
            text='Excluir'
            onPress={() => setIsConfirmingDeletion(true)}
            variant='secondary'
            width={(width - 48) / 2}
            height={40}
            icon={{ name: 'trash' }}
            marginRight={16}
          />
          <Button
            text='Editar'
            onPress={() => navigation.navigate('CreateNaver', { naver })}
            variant='primary'
            width={(width - 48) / 2}
            height={40}
            icon={{ name: 'edit' }}
          />
        </Row>
      </ScrollView>

      <Modal
        visible={isConfirmingDeletion}
        handleClose={() => setIsConfirmingDeletion(false)}
        title='Excluir naver'
        description='Tem certeza que deseja excluir este naver?'
        buttons={{
          btn1: { onPress: () => setIsConfirmingDeletion(false), title: 'Cancelar' },
          btn2: {
            onPress: () => {
              deletingNaver()
            },
            title: 'Excluir'
          }
        }}
      />

      <Modal
        visible={hasSuccessfullyDeleted}
        handleClose={() => setHasSuccessfullyDeleted(false)}
        title='Naver excluído'
        description='Naver excluído com sucesso'
      />

      <Modal
        visible={failToDeleteNaver}
        handleClose={() => setFailToDeleteNaver(false)}
        title='Houve um erro!'
        description='Houve um erro e seu Naver não foi excluído!'
      />
    </Column>
  )
}

export default NaverProfile
