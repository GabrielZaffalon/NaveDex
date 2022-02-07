import React from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { width } from 'styled-system'

const Home = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <TouchableOpacity
        style={{ width: 200, height: 25, backgroundColor: '#f21', alignItems: 'center' }}
        onPress={() => {
          console.log('oi')
          navigation.navigate('CreateNaver')
        }}
      >
        <Text>Create Naver User</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home
