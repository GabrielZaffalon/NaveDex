import React, { useState } from 'react'
import { View, ScrollView } from 'react-native'
import { useForm, Controller } from 'react-hook-form'

import { Button, Column, Header, Input, Text, Modal } from 'src/components'
import { createNaver, editNaver } from 'src/services'
import { formatDate } from 'src/utils'

const CreateNaver = ({ route, navigation }) => {
  const { control, handleSubmit } = useForm({
    defaultValues: route.params?.naver
      ? {
          ...route.params.naver,
          admission_date: formatDate(route.params.naver.admission_date),
          birthdate: formatDate(route.params.naver.birthdate)
        }
      : {}
  })

  const [message, setMessage] = useState(false)
  const [errorMessage, setErrorMessage] = useState(false)

  const [isLoading, setIsLoading] = useState(false)

  const sendNaverToApi = async formState => {
    try {
      setIsLoading(true)

      const formatNaverToApi = {
        name: formState.name,
        admission_date: formState.admission_date,
        job_role: formState.job_role,
        project: formState.project,
        birthdate: formState.birthdate,
        url: formState.url
      }

      await (!!route.params?.naver?.name
        ? editNaver(formatNaverToApi, formState.id)
        : createNaver(formState))
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
          <Controller
            control={control}
            name='name'
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                label='Nome'
                placeholder='Nome'
                value={value}
                onBlur={onBlur}
                onChange={onChange}
              />
            )}
          />

          <Controller
            control={control}
            name='job_role'
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                label='Cargo'
                placeholder='Cargo'
                value={value}
                onBlur={onBlur}
                onChange={onChange}
              />
            )}
          />

          <Controller
            control={control}
            name='birthdate'
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                label='Idade'
                placeholder='Data de nascimento'
                value={value}
                type={'datetime'}
                options={{
                  format: 'DD/MM/YYYY'
                }}
                onBlur={onBlur}
                onChange={onChange}
              />
            )}
          />

          <Controller
            control={control}
            name='admission_date'
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                label='Tempo de empresa'
                placeholder='Data da admissão'
                value={value}
                type={'datetime'}
                options={{
                  format: 'DD/MM/YYYY'
                }}
                onBlur={onBlur}
                onChange={onChange}
              />
            )}
          />

          <Controller
            control={control}
            name='project'
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                label='Projetos que participou'
                placeholder='Projetos que participou'
                value={value}
                onBlur={onBlur}
                onChange={onChange}
              />
            )}
          />

          <Controller
            control={control}
            name='url'
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                label='URL da foto do naver'
                placeholder='URL da foto do naver'
                value={value}
                onBlur={onBlur}
                onChange={onChange}
              />
            )}
          />

          <Button
            text='Salvar'
            variant='primary'
            height={42}
            my='8px'
            onPress={handleSubmit(sendNaverToApi)}
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
