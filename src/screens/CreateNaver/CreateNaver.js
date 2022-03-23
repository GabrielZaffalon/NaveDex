import React, { useState } from 'react'
import { View, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { Button, Column, Header, Input, Row, Text } from '../../components'

const CreateNaver = ({ route }) => {
  // const { naver } = route.params
  // console.log(naver)

  const [editNaver, setEditNaver] = useState(route.params?.naver)
  // console.log(editNaver)
  const navigation = useNavigation()

  return (
    <View alignItems='center' justifyContent='center'>
      <Row>
        <Header backHeader />
      </Row>
      <Text fontFamily='MontserratSemiBold' color='black' fontSize='22px' my={24}>
        {`${!!route.params?.naver?.name ? 'Editar' : 'Criar'} Naver`}
      </Text>
      <ScrollView width='100%'>
        <Column px={16}>
          <View>
            <Input
              label='Nome'
              placeholder='Nome'
              value={editNaver?.name}
              onChange={text => setEditNaver({ ...editNaver, name: text })}
            />
            <Input
              label='Cargo'
              placeholder='Cargo'
              value={editNaver?.job_role}
              onChange={text => setEditNaver({ ...editNaver, name: text })}
            />
            <Input
              label='Idade'
              placeholder='Idade'
              value={editNaver?.birthdate}
              onChange={text => setEditNaver({ ...editNaver, name: text })}
            />
            <Input
              label='Tempo de empresa'
              placeholder='Tempo de empresa'
              value={editNaver?.admission_date}
              onChange={text => setEditNaver({ ...editNaver, name: text })}
            />
            <Input
              label='Projetos que participou'
              placeholder='Projetos que participou'
              value={editNaver?.project}
              onChange={text => setEditNaver({ ...editNaver, name: text })}
            />
            <Input
              label='URL da foto do naver'
              placeholder='URL da foto do naver'
              value={editNaver?.url}
              onChange={text => setEditNaver({ ...editNaver, name: text })}
            />
          </View>

          <Button
            text='Salvar'
            variant='primary'
            height={42}
            my='8px'
            onPress={() => {
              navigation.navigate('Home')
            }}
          />
        </Column>
      </ScrollView>
    </View>
  )
}

export default CreateNaver
