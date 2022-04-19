import React, { useState, useEffect } from 'react'
import { View, ScrollView, Dimensions, FlatList } from 'react-native'
import { useIsFocused } from '@react-navigation/native'
import { ActivityIndicator } from 'react-native'

import { Text, Naver, Row, Modal, Header, Button, Column } from 'src/components'
import { showNavers, deleteNavers } from 'src/services'

const Home = ({ navigation }) => {
  const screenWidth = Dimensions.get('screen').width

  const isFocused = useIsFocused()

  const [isConfirmingDeletion, setIsConfirmingDeletion] = useState(false)
  const [hasSuccessfullyDeleted, setHasSuccessfullyDeleted] = useState(false)
  const [failToDeleteNaver, setFailToDeleteNaver] = useState(false)

  const [toDeleteNaver, setToDeleteNaver] = useState(null)

  const [isLoading, setIsLoading] = useState(false)

  const [navers, setNavers] = useState([])

  const fetchNavers = async () => {
    try {
      const response = await showNavers()
      setNavers(response)
    } catch (error) {
      console.tron.log(error)
    }
  }

  const deletingNaver = async () => {
    if (!!toDeleteNaver) {
      try {
        await deleteNavers(toDeleteNaver)

        setNavers(previousState => previousState.filter(naver => naver.id !== toDeleteNaver))

        // !!await fetchNavers()
        // !!setNavers(navers.filter(naver => naver.id !== toDeleteNaver))

        setHasSuccessfullyDeleted(true)
      } catch (error) {
        setFailToDeleteNaver(true)

        console.tron.log(error)
      } finally {
        setIsConfirmingDeletion(false)
        setToDeleteNaver(null)
      }
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

      {isLoading ? (
        <Column justifyContent='center' flex={1}>
          <ActivityIndicator color='black' size='small' />
        </Column>
      ) : (
        <View style={{ flex: 1, width: '100%' }}>
          <FlatList
            showsVerticalScrollIndicator={false}
            numColumns={2}
            contentContainerStyle={{ paddingHorizontal: 10, justifyContent: 'space-between' }}
            data={navers}
            keyExtractor={item => item.id}
            renderItem={({ item }) => {
              return (
                <Naver
                  naver={item}
                  imageSize={(screenWidth - 48) / 2}
                  my={13}
                  mx='8px'
                  onDelete={() => {
                    setIsConfirmingDeletion(true)
                    setToDeleteNaver(item.id)
                  }}
                  onEdit={() => {
                    navigation.navigate('CreateNaver', { naver: item })
                  }}
                />
              )
            }}
          />
        </View>
      )}

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
    </View>
  )
}

export default Home
