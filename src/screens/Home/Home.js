import React, { useState, useEffect } from 'react'
import { View, ScrollView, Dimensions } from 'react-native'

import { Text, Naver, Row, Modal, Header, Button } from 'src/components'
import { showNavers } from 'src/services'

const NAVERS = [
  {
    id: '1',
    name: 'Pequeno golden',
    admission_date: '2020-04-22T00:00:00.000Z',
    job_role: 'Um golden filhote',
    user_id: '1',
    project: 'Nasceu de um golden',
    birthdate: '2 meses',
    url: 'https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fi.ytimg.com%2Fvi%2F2EfHtzauHcM%2Fmaxresdefault.jpg'
  },
  {
    id: '2',
    name: 'Grande golden',
    admission_date: '2020-04-22T00:00:00.000Z',
    job_role: 'Um golden adulto',
    user_id: '2',
    project: 'Late',
    birthdate: '2 anos',
    url: 'https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fmundoaparte.com.br%2Fwp-content%2Fuploads%2F2017%2F09%2Fgolden-retriever-2419453_960_720.jpg'
  },
  {
    id: '3',
    name: 'Faustão',
    admission_date: '2020-04-22T00:00:00.000Z',
    job_role: 'É o Faustão',
    user_id: '3',
    project: 'Foi pra Band',
    birthdate: '71 anos',
    url: 'https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fstatic.poder360.com.br%2F2021%2F07%2Ffaustao.png'
  },
  {
    id: '4',
    name: 'Golden pequeno',
    admission_date: '2020-04-22T00:00:00.000Z',
    job_role: 'É o mesmo mas diferente',
    user_id: '4',
    project: 'Nasceu de outro golden',
    birthdate: '2/5 meses',
    url: 'https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fi.ytimg.com%2Fvi%2F2EfHtzauHcM%2Fmaxresdefault.jpg'
  }
]

const Home = ({ navigation }) => {
  const screenWidth = Dimensions.get('screen').width

  const [isConfirmingDeletion, setIsConfirmingDeletion] = useState(false)
  const [hasSuccessfullyDeleted, setHasSuccessfullyDeleted] = useState(false)

  const [navers, setNavers] = useState([])

  const fetchNavers = async () => {
    try {
      const response = await showNavers()
      setNavers(response)
    } catch (error) {
      console.tron.log(error)
    }
  }

  useEffect(() => {
    fetchNavers()
  }, [])

  return (
    <View style={{ flex: 1 }}>
      <Header navigation={navigation} />

      <Row alignItems='center' justifyContent='space-between' width='100%' p={16}>
        <Text fontFamily='MontserratSemiBold' fontSize={22} color='black'>
          Navers
        </Text>
        <Button
          text='Adicionar naver'
          onPress={() => {}}
          variant='primary'
          width='170px'
          height={40}
          onPress={() => navigation.navigate('CreateNaver')}
        />
      </Row>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ flex: 1 }}
        contentContainerStyle={{ width: '100%' }}
      >
        <Row flexWrap='wrap' px={16} justifyContent='space-between'>
          {navers.map((naver, index) => (
            <Naver
              key={`${naver.title}-${index}`}
              naver={naver}
              imageSize={(screenWidth - 48) / 2}
              my={13}
              onDelete={() => {
                setIsConfirmingDeletion(true)
              }}
              onEdit={() => {
                navigation.navigate('CreateNaver', { naver })
              }}
            />
          ))}
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
              setIsConfirmingDeletion(false)
              setHasSuccessfullyDeleted(true)
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
    </View>
  )
}

export default Home
