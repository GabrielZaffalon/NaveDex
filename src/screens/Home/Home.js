import React, { useState } from 'react'
import { View, ScrollView, TouchableOpacity, Dimensions } from 'react-native'
import { Text, Naver, Row, Modal, Header } from 'src/components'
import { Button } from '../../components'

const NAVERS = [
  {
    title: 'oi',
    description: 'tchau',
    uri: 'https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fi.ytimg.com%2Fvi%2F2EfHtzauHcM%2Fmaxresdefault.jpg'
  },
  {
    title: 'oi',
    description: 'tchau',
    uri: 'https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fmundoaparte.com.br%2Fwp-content%2Fuploads%2F2017%2F09%2Fgolden-retriever-2419453_960_720.jpg'
  },
  {
    title: 'oi',
    description: 'tchau',
    uri: 'https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fstatic.poder360.com.br%2F2021%2F07%2Ffaustao.png'
  },
  {
    title: 'oi',
    description: 'tchau',
    uri: 'https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fi.ytimg.com%2Fvi%2F2EfHtzauHcM%2Fmaxresdefault.jpg'
  }
]

const Home = ({ navigation }) => {
  const screenWidth = Dimensions.get('screen').width

  const [isConfirmingDeletion, setIsConfirmingDeletion] = useState(false)
  const [hasSuccessfullyDeleted, setHasSuccessfullyDeleted] = useState(false)

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Header navigation={navigation} />

      <Row flex={1} alignItems='center' justifyContent='space-between' width='100%' p={16}>
        <Text fontFamily='MontserratSemiBold' fontSize={22} color='black'>
          Navers
        </Text>
        <Button
          text='Adicionar naver'
          onPress={() => {}}
          variant='primary'
          width='170px'
          height={40}
        />
      </Row>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Row flexWrap='wrap' px='16px' justifyContent='space-between'>
          {NAVERS.map((naver, index) => (
            <Naver
              key={`${naver.title}-${index}`}
              title={naver.title}
              description={naver.description}
              uri={naver.uri}
              imageSize={(screenWidth - 48) / 2}
              my={13}
              onDelete={() => {
                setIsConfirmingDeletion(true)
              }}
              onEdit={() => {}}
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
