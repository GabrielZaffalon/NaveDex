import React, { useState } from 'react'
import { View, ScrollView } from 'react-native'

import { Button, Column, Header, Input, Text, Modal } from 'src/components'

const CreateNaver = ({ route, navigation }) => {
  const [editNaver, setEditNaver] = useState(route.params?.naver)

  const [message, setMessage] = useState(false)

  console.tron.log({ editNaver })

  return (
    <View alignItems='center' justifyContent='center'>
      <Header backHeader />
      <Text fontFamily='MontserratSemiBold' color='black' fontSize='22px' my={24}>
        {`${!!route.params?.naver?.name ? 'Editar' : 'Criar'} Naver`}
      </Text>
      <ScrollView width='100%'>
        <Column px={16}>
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
            onChange={text => setEditNaver({ ...editNaver, job_role: text })}
          />
          <Input
            label='Idade'
            placeholder='Idade'
            value={editNaver?.birthdate}
            onChange={text => setEditNaver({ ...editNaver, birthdate: text })}
          />
          <Input
            label='Tempo de empresa'
            placeholder='Tempo de empresa'
            value={editNaver?.admission_date}
            onChange={text => setEditNaver({ ...editNaver, admission_date: text })}
          />
          <Input
            label='Projetos que participou'
            placeholder='Projetos que participou'
            value={editNaver?.project}
            onChange={text => setEditNaver({ ...editNaver, project: text })}
          />
          <Input
            label='URL da foto do naver'
            placeholder='URL da foto do naver'
            value={editNaver?.url}
            onChange={text => setEditNaver({ ...editNaver, url: text })}
          />

          <Button
            text='Salvar'
            variant='primary'
            height={42}
            my='8px'
            onPress={() => {
              setMessage(true)
            }}
          />
        </Column>
      </ScrollView>

      <Modal
        visible={message}
        handleClose={() => setMessage(false)}
        title={`Naver ${!!route.params?.naver?.name ? 'editado' : 'criado'}`}
        description={` Naver ${!!route.params?.naver?.name ? 'editado' : 'criado'} com sucesso!`}
      />
    </View>
  )
}

export default CreateNaver
