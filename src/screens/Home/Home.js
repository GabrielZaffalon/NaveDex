import React from 'react'
import { View, ScrollView } from 'react-native'
import { Text, Naver, Row } from 'src/components'
import { TouchableOpacity, Dimensions } from 'react-native'

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
  }
]

const Home = ({ navigation }) => {
  const screenWidth = Dimensions.get('screen').width

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text fontFamily='MontserratThin' color='#000' fontSize='48px'>
        Front-end Developer
      </Text>
      <TouchableOpacity
        style={{ width: 200, height: 25, alignItems: 'center' }}
        onPress={() => {
          navigation.navigate('CreateNaver')
        }}
      >
        <Text>Create Naver User</Text>
      </TouchableOpacity>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Row flexWrap='wrap' px='16px' justifyContent='space-between'>
          {NAVERS.map(naver => (
            <Naver
              title={naver.title}
              description={naver.description}
              uri={naver.uri}
              imageSize={(screenWidth - 48) / 2}
              my={13}
              onDelete={() => {}}
              onEdit={() => {}}
            />
          ))}
        </Row>
      </ScrollView>
    </View>
  )
}

export default Home
