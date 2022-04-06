import React, { useState, useEffect } from 'react'
import { View, ScrollView, Dimensions } from 'react-native'
import { useIsFocused } from '@react-navigation/native'

import { Text, Naver, Row, Modal, Header, Button } from 'src/components'
import { showNavers } from 'src/services'

const Home = ({ navigation }) => {
  const screenWidth = Dimensions.get('screen').width

  const isFocused = useIsFocused()

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
  }, [isFocused])

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
