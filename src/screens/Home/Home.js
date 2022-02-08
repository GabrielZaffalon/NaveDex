import React from 'react'
import { View } from 'react-native'
import { Text } from 'src/components'
import { TouchableOpacity } from 'react-native'
import { width } from 'styled-system'

const Home = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text fontFamily='MontserratThin-MVY6x' color='#000' fontSize='48px'>
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
    </View>
  )
}

export default Home
