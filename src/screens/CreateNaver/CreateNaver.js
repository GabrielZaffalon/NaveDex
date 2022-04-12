import React, { useState } from 'react'
import { View, ScrollView } from 'react-native'

import { Button, Column, Header, Input, Text, Modal } from 'src/components'
import { createNaver, editNaver } from 'src/services'
import { formatDate } from 'src/utils'


const CreateNaver = ({ route, navigation }) => {
  const [naver, setNaver] = useState(route.params?.naver)

  const [message, setMessage] = useState(false)
  const [errorMessage, setErrorMessage] = useState(false)

  const [isLoading, setIsLoading] = useState(false)

  const sendNaverToApi = async () => {
    try {
      setIsLoading(true)

      const formatNaverToApi = {
        name: naver.name,
        admission_date: naver.admission_date,
        job_role: naver.job_role,
        project: naver.project,
        birthdate: naver.birthdate,
        url: naver.url
      }

      await (!!route.params?.naver?.name
        ? editNaver(formatNaverToApi, naver.id)
        : createNaver(naver))
      setMessage(true)
    } catch (error) {
      console.tron.log({ error })
      setErrorMessage(true)
    } finally {
      setIsLoading(false)
    }
  }

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
            value={naver?.name}
            onChange={text => setNaver({ ...naver, name: text })}
          />
          <Input
            label='Cargo'
            placeholder='Cargo'
            value={naver?.job_role}
            onChange={text => setNaver({ ...naver, job_role: text })}
          />
          <Input
            label='Idade'
            placeholder='Data de nascimento'
            value={formatDate(editNaver?.birthdate)}
            onChange={text => setEditNaver({ ...editNaver, birthdate: text })}
          />
          <Input
            label='Tempo de empresa'
            placeholder='Data da admissão'
            value={formatDate(editNaver?.admission_date)}
            onChange={text => setEditNaver({ ...editNaver, admission_date: text })}
          />
          <Input
            label='Projetos que participou'
            placeholder='Projetos que participou'
            value={naver?.project}
            onChange={text => setNaver({ ...naver, project: text })}
          />
          <Input
            label='URL da foto do naver'
            placeholder='URL da foto do naver'
            value={naver?.url}
            onChange={text => setNaver({ ...naver, url: text })}
          />

          <Button
            text='Salvar'
            variant='primary'
            height={42}
            my='8px'
            onPress={() => {
              sendNaverToApi()
            }}
            isLoading={isLoading}
          />
        </Column>
      </ScrollView>

      <Modal
        visible={message}
        handleClose={() => setMessage(false)}
        title={`Naver ${!!route.params?.naver?.name ? 'editado' : 'criado'}`}
        description={` Naver ${!!route.params?.naver?.name ? 'editado' : 'criado'} com sucesso!`}
        closeAndLeaveScreen='Home'
      />

      <Modal
        visible={errorMessage}
        handleClose={() => setErrorMessage(false)}
        title={`Houve um erro!`}
        description={`Houve um erro e seu naver não foi ${
          !!route.params?.naver?.name ? 'editado' : 'criado'
        }!`}
      />
    </View>
  )
}

export default CreateNaver
