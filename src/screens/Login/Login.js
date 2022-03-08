import React, { useState } from 'react'

import { Column, Input, Button, Text } from 'src/components'
import { useUser } from 'src/context'

const Login = () => {
  const { login } = useUser()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <Column flex={1} justifyContent='center' p={40}>
      <Input my={10} value={username} onChange={setUsername} label='E-mail' placeholder='E-mail' />
      <Input
        my={10}
        value={password}
        onChange={setPassword}
        secureTextEntry
        label='Senha'
        placeholder='Senha'
      />
      <Button
        text='Entrar'
        onPress={() => login({ username, password })}
        variant='primary'
        icon={{ name: 'trash' }}
      />
    </Column>
  )
}
export default Login
